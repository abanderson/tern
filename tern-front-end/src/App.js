import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Journal from "./components/Journal";
import Home from "./components/Home";
import Entry from "./components/Entry";
import Google from "./components/Google";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            entries: []
        };
    }


    componentDidMount() {
        this.getEntriesForAuthor();
        this.setState({userId: 42});
    }

    getEntriesForAuthor() {
        let entry1 = {
            id: 1,
            date: "September 13, 2018",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat hendrerit suscipit. Nunc lacinia egestas felis, ac auctor leo dapibus nec. Cras aliquam ultricies quam, eget semper massa. Aliquam id mi magna. Integer cursus lectus vel nulla tristique, quis imperdiet nulla gravida. Nunc fermentum ex leo, sit amet maximus lorem mattis at. Proin eu hendrerit ipsum. Duis fringilla efficitur nisi eget auctor. Integer gravida consequat risus sed vehicula. Pellentesque malesuada, quam vitae faucibus bibendum, erat libero elementum ipsum, id suscipit felis quam a lorem. Nam mauris mauris, gravida ut felis elementum, luctus venenatis dolor. Ut vel vulputate mi. Cras consectetur eget arcu a lobortis. Praesent ut tincidunt dui. Quisque vitae pretium nunc, ac mollis lectus."
        };
        let entry2 = {
            id: 2,
            date: "September 14, 2018",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat hendrerit suscipit. Nunc lacinia egestas felis, ac auctor leo dapibus nec. Cras aliquam ultricies quam, eget semper massa. Aliquam id mi magna. Integer cursus lectus vel nulla tristique, quis imperdiet nulla gravida. Nunc fermentum ex leo, sit amet maximus lorem mattis at. Proin eu hendrerit ipsum. Duis fringilla efficitur nisi eget auctor. Integer gravida consequat risus sed vehicula. Pellentesque malesuada, quam vitae faucibus bibendum, erat libero elementum ipsum, id suscipit felis quam a lorem. Nam mauris mauris, gravida ut felis elementum, luctus venenatis dolor. Ut vel vulputate mi. Cras consectetur eget arcu a lobortis. Praesent ut tincidunt dui. Quisque vitae pretium nunc, ac mollis lectus."
        };
        let entry3 = {
            id: 3,
            date: "September 15, 2018",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat hendrerit suscipit. Nunc lacinia egestas felis, ac auctor leo dapibus nec. Cras aliquam ultricies quam, eget semper massa. Aliquam id mi magna. Integer cursus lectus vel nulla tristique, quis imperdiet nulla gravida. Nunc fermentum ex leo, sit amet maximus lorem mattis at. Proin eu hendrerit ipsum. Duis fringilla efficitur nisi eget auctor. Integer gravida consequat risus sed vehicula. Pellentesque malesuada, quam vitae faucibus bibendum, erat libero elementum ipsum, id suscipit felis quam a lorem. Nam mauris mauris, gravida ut felis elementum, luctus venenatis dolor. Ut vel vulputate mi. Cras consectetur eget arcu a lobortis. Praesent ut tincidunt dui. Quisque vitae pretium nunc, ac mollis lectus."
        };
        let entries = [entry1, entry2, entry3];

        this.setState({ entries: entries });
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:userid/journal" render={ () => <Journal user={this.state.userId} entries={this.state.entries} />  } />
                    <Route exact path="/:userid/journal/:entryid" render={ () => <Entry />} />
                    // <Route exact path="/:userid/journal/:collection" render={ () => <Journal />} />
                </Switch>
            </div>
        );
    }
}

export default App;
