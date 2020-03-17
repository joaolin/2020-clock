import React, {Component} from 'react';

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        isLoaded: false
      };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    tick() {
      this.setState({
        date: new Date(),
        isLoaded: true
      });
      this.state = {date: new Date};
    }
  
    render() {
      let {date, isLoaded} = this.state;
      if (!isLoaded){
        return(
          <div>
            <h2>World Clock is Loading...</h2>
          </div>
        )
      }
      else{
        return (
          <div>
            <h2>World Clock is {date.toLocaleTimeString()}.</h2>
            
          </div>
        );
      }
    }
  }

export default WorldClock;