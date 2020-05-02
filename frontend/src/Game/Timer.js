import React from 'react'

export default class Timer extends React.Component {

  componentDidMount() {
     this.timerID = setInterval(
       () => this.tick(),
       1000
     );
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
    }

   tick() {
     this.props.setTime()
    }

  render() {
    if (this.props.activeGame === true)  {
      return (
        <h3>
          This is the time: {this.props.currentTime}
        </h3>
      )
    } else {
      return ""
    }

  }

}
