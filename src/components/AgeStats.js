import React, { Component } from 'react';
import partyPic from '../assets/party-pic.png';

class AgeStats extends Component {

  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000*3600*24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days/31);
    days -= months * 31;

    return `${years} years ${months} months, and ${days} days`
  }

  render() {
    return (
      <div>
        <img src={partyPic} alt="party-pic" className="party-pic" />
        <div className="post-div">
        <h3 className="post-date">{this.props.date}</h3>
        <h4 className="post-date-since">Congrats on {this.timeSince(this.props.date)}!</h4>
      </div>
      </div>
    )
  }
}

export default AgeStats;
