import React, { Component } from 'react';
import './App.css';
import EventCard from '../components/EventCard.jsx'

class App extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    fetch('http://demo2365253.mockable.io/events')
    .then(res => res.json())
    .then((data) => {
      this.setState({events: data})
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Here are the events near you
        </header>
        <body className="App-body">
          <div className="events-row">
            {
              this.state.events.map(event_obj => {
                return(
                  <EventCard event = {event_obj}></EventCard>
                );
              })
            }
           
          </div>
        </body>
      </div>
    );
  }
  
}

export default App;
