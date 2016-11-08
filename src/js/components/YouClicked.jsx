var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function() {
      return (
          {timesClicked: 0,
           timesReset: 0  
          }
          )  
    },
    _handleButtonClick: function() {
       return (
           this.setState({
               timesClicked: this.state.timesClicked + 1
           })
           ) 
    },
    clickMessage: function() {
        
      if(this.state.timesClicked === 0) {
        return "You have clicked 0 times";  
      } else if(this.state.timesClicked === 1) {
          return "You have clicked 1 time";
      } else if(this.state.timesClicked === 2) {
          return "You have clicked 2 times";
      } else {
          return `You have clicked ${this.state.timesClicked} times`;
      }
        
    },
    resetButton: function() {
      
        return (
         
          this.setState({
              timesClicked: 0,
              timesReset: this.state.timesReset + 1
         
          })
    )
    },
    resetMessage: function() {
        if(this.state.timesReset > 0) return `You have reset ${this.state.timesReset} times`;
        else { return '' }

    },
     render: function() {
        return (
            <div>
                <button onClick={this._handleButtonClick}>Button</button>
                <button onClick={this.resetButton}>Reset</button>
                <p>
                    {this.clickMessage()}
                    <br/>
                    {this.resetMessage()}
                </p>
            </div>
            )
    }
    
});

module.exports = YouClicked;