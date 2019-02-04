import React, { Component } from 'react';
import Calender from './components/Calender';
import Clock from './components/Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'May 03, 2019',
            newDeadline: '',
        };
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    // handleKeyPress = (event) => {
    //     if(event.keyCode === '13'){
    //         console.log("Enter");
    //     }
    // };

    render() {
        return (
            <div className="App">
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
                            react-<b>calender</b>
                        </span>
                    </div>
                </header>
                <main>
                    <Calender />
                </main>
                <div><hr></hr></div>
                <div className="App-clock">
                    <div className='App-title'>
                    {/* Adding countdown component */}
                        Countdown to {this.state.deadline}
                    </div>
                    <Clock
                        deadline= {this.state.deadline} 
                    />
                    <Form inline>
                        <FormControl
                        className='Deadline-input' 
                        placeholder='Enter New Date' 
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        // onKeyPress={(event) => this.setState({})}
                        />
                        <Button className='button-click' onClick={() => this.changeDeadline()}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default App;