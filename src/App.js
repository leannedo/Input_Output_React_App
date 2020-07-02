import React, {Component} from 'react';
import './App.css';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";


class App extends Component {
    state = {
        userName: "Joe Don",
        text: "Some text"
    }

    handleNameChange = (event) => {
        // call setState instead of directly manipulate the state
        this.setState({
            userName: event.target.value
        })
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        const { userName, text } = this.state;

        return (
            <div className="App">
                <UserOutput
                    username={userName}
                    text={null}
                />
                <UserInput
                    value={userName}
                    change={this.handleNameChange}
                />
                <UserOutput
                    username={null}
                    text={text}
                />
                <UserInput
                    change={this.handleTextChange}
                    value={text}
                />
            </div>
        );
    }
}


export default App;
