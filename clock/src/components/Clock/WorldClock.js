import React, {Component} from 'react';

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        local: props.local ? props.local : "America/Fortaleza",
        date: new Date()
      };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        2000
      );
    }
  
    tick() {
      let {local} = this.state;
      let url = "http://worldtimeapi.org/api/timezone/" + local;
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.datetime);
          this.setState({
            isLoaded: true,
            error: null,
            date: result.datetime
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            date: null,
            error
          });
        }
      )
    }
  
    render() {
      let {date, isLoaded, error, local} = this.state;
      if (error){
        return(
          <div>
          <h2>World Clock :/ ({error.message})</h2>
          </div>
        )
      }else if (!isLoaded){
        return(
          <div>
            <h2>World Clock is loading...</h2>
          </div>
        )
      }
      else{
        return (
          <div>
            <h2> {local ? local : "World Clock"} is {date}.</h2>
            
          </div>
        );
      }
    }
  }

export default WorldClock;