const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
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

    passport.use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_APP_ID,
                clientSecret: process.env.FACEBOOK_APP_SECRET,
                callbackURL: process.env.FACEBOOK_CALLBACK_URL,
                profileFields: ["id", "name", "displayName", "photos", "email"]
            },
            (accessToken, refreshToken, profile, done) => {
                models.author
                    .findOrCreate({ where: { facebookId: profile.id } })
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

                        if (author[0].email == null) {
                            author[0]
                                .update({ email: profile.emails[0].value })
                                .then(console.log("Email updated"));
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

    app.get(
        "/google/auth",
        passport.authenticate("google", { failureRedirect: "/login/google" }),
        function(req, res) {
            //console.log(req.user.dataValues);
            res.redirect(
                //`http://localhost:3000/${req.user.dataValues.googleId}/journal`
                //"http://localhost:3000?id=" + req.user.dataValues.googleId
                // process.env.EXPRESS_REDIRECT_URL +
                //     "?id=" +
                //     req.user.dataValues.googleId
                `${process.env.EXPRESS_REDIRECT_URL}?id=${
                    req.user.dataValues.googleId
                }`
            );
            // res.redirect("http://localhost:3001/");
        }
    );

    app.get(
        "/login/facebook",
        passport.authenticate("facebook", { scope: ["email"] })
    );

    app.get(
        "/facebook/auth",
        passport.authenticate("facebook", {
            failureRedirect: "/login/facebook"
        }),
        function(req, res) {
            res.redirect("/");
        }
    );

    app.get("/logout", (req, res, next) => {
        req.logout();
        //res.redirect("/");
        //res.redirect("http://localhost:3000/");
        res.redirect(process.env.EXPRESS_REDIRECT_URL);
    });
};

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login/google"); // "Change to /login later"
};

module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;
