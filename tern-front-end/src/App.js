import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Journal from "./components/Journal";
import Home from "./components/Home";
import Entry from "./components/Entry";
import NewEntry from "./components/NewEntry";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authorId: null,
            googleId: null,
            entries: []
        };
    }

    // componentDidMount() {
    //     this.getEntriesForAuthor();
    //     //this.setState({ authorId: 42 });
    // }

    // getEntriesForAuthor() {
    //     if (this.state.authorId == null) {
    //         console.log("No author");
    //         return;
    //     }

    //     let entry1 = {
    //         id: 1,
    //         date: "September 13, 2018",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat hendrerit suscipit. Nunc lacinia egestas felis, ac auctor leo dapibus nec. Cras aliquam ultricies quam, eget semper massa. Aliquam id mi magna. Integer cursus lectus vel nulla tristique, quis imperdiet nulla gravida. Nunc fermentum ex leo, sit amet maximus lorem mattis at. Proin eu hendrerit ipsum. Duis fringilla efficitur nisi eget auctor. Integer gravida consequat risus sed vehicula. Pellentesque malesuada, quam vitae faucibus bibendum, erat libero elementum ipsum, id suscipit felis quam a lorem. Nam mauris mauris, gravida ut felis elementum, luctus venenatis dolor. Ut vel vulputate mi. Cras consectetur eget arcu a lobortis. Praesent ut tincidunt dui. Quisque vitae pretium nunc, ac mollis lectus."
    //     };
    //     let entry2 = {
    //         id: 2,
    //         date: "September 14, 2018",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat hendrerit suscipit. Nunc lacinia egestas felis, ac auctor leo dapibus nec. Cras aliquam ultricies quam, eget semper massa. Aliquam id mi magna. Integer cursus lectus vel nulla tristique, quis imperdiet nulla gravida. Nunc fermentum ex leo, sit amet maximus lorem mattis at. Proin eu hendrerit ipsum. Duis fringilla efficitur nisi eget auctor. Integer gravida consequat risus sed vehicula. Pellentesque malesuada, quam vitae faucibus bibendum, erat libero elementum ipsum, id suscipit felis quam a lorem. Nam mauris mauris, gravida ut felis elementum, luctus venenatis dolor. Ut vel vulputate mi. Cras consectetur eget arcu a lobortis. Praesent ut tincidunt dui. Quisque vitae pretium nunc, ac mollis lectus."
    //     };
    //     let entry3 = {
    //         id: 3,
    //         date: "September 15, 2018",
    //         content:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat hendrerit suscipit. Nunc lacinia egestas felis, ac auctor leo dapibus nec. Cras aliquam ultricies quam, eget semper massa. Aliquam id mi magna. Integer cursus lectus vel nulla tristique, quis imperdiet nulla gravida. Nunc fermentum ex leo, sit amet maximus lorem mattis at. Proin eu hendrerit ipsum. Duis fringilla efficitur nisi eget auctor. Integer gravida consequat risus sed vehicula. Pellentesque malesuada, quam vitae faucibus bibendum, erat libero elementum ipsum, id suscipit felis quam a lorem. Nam mauris mauris, gravida ut felis elementum, luctus venenatis dolor. Ut vel vulputate mi. Cras consectetur eget arcu a lobortis. Praesent ut tincidunt dui. Quisque vitae pretium nunc, ac mollis lectus."
    //     };
    //     let entries = [entry1, entry2, entry3];

    //     this.setState({ entries: entries });
    // }

    setAuthorId(googleId) {
        axios
            .get(`http://localhost:3001/authors/google/${googleId}`)
            .then(response => {
                console.log(response.data);
                this.setState({ googleId: googleId });
                this.setState({ authorId: response.data.id });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home
                                setAuthorId={googleId =>
                                    this.setAuthorId(googleId)
                                }
                                author={this.state.authorId}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/:authorid/journal"
                        render={() => (
                            <Journal
                                user={this.state.authorId}
                                entries={this.state.entries}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/:authorid/journal/:entryid"
                        render={() => <Entry />}
                    />
                    //{" "}
                    <Route
                        exact
                        path="/:authorid/journal/:collection"
                        render={() => <Journal />}
                    />
                    <Route
                        exact
                        path="/new-entry"
                        render={() => <NewEntry user={this.state.authorId} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
