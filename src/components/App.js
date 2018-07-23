import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './AgeStats';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate : '',
      birthday: '06-25-1996',
      showStats: false
    }
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    })
  }

  render () {
    return (
      <div className="App">
        <Form inline>
          <h2 className="main-title">Input Your Birthday!</h2>
          <div className="input-div">
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
            className="input-month"
            >
            </FormControl>
          {' '}
          <Button className="button-submit" onClick={() => this.changeBirthday()}>
            Submit
          </Button>
        </div>
          {

            this.state.showStats ?
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday}/>
            </div>
            :
            <div></div>
          }

        </Form>
      </div>
    )
  }
}

export default App;
