const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");

const models = require("./models");

const setupAuth = app => {
    app.use(cookieParser());

    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: true
        })
    );

    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: process.env.GOOGLE_CALLBACK_URL
            },
            (accessToken, refreshToken, profile, done) => {
                // console.log(profile);
                models.author
                    .findOrCreate({
                        where: { googleId: profile.id }
                    })
                    .then(author => {
                        if (
                            author[0].firstName == null ||
                            author[0].lastName == null
                        ) {
                            author[0]
                                .update({
                                    firstName: profile.name.givenName,
                                    lastName: profile.name.familyName
                                })
                                .then(console.log("Profile name updated"));
                        }

                        if (author[0].photoUrl == null) {
                            author[0]
                                .update({ photoUrl: profile.photos[0].value })
                                .then(console.log("Profile image updated"));
                        }

                        return done(null, author[0]);
                    })
                    .catch(err => {
                        done(err);
                    });
            }
        )
    );

    passport.serializeUser((author, done) => {
        done(null, author);
    });

    passport.deserializeUser((id, done) => {
        done(null, id);
    });

    app.use(passport.initialize());

    app.use(passport.session());

    app.get(
        "/login/google",
        passport.authenticate("google", {
            scope: ["profile"]
        })
    );

    app.get("/logout", (req, res, next) => {
        req.logout();
        res.redirect("/");
    });

    app.get(
        "/google/auth",
        passport.authenticate("google", { failureRedirect: "/login/google" }),
        function(req, res) {
            res.redirect("/");
        }
    );
};

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login/google"); // "Change to /login later"
};

module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;
