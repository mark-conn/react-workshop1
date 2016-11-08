var React = require('react');

var GuessTheNumber = React.createClass({
    propTypes: {
    numberToGuess: React.PropTypes.number.isRequired
    },
    
    _handleButtonClick: function() {
        if(this.refs.userGuess.value === this.props.numberToGuess) {
            alert("You nailed it");
        } else if(this.refs.userGuess.value > this.props.numberToGuess) {
            alert("guess lower!");
        } else {
            alert("guess higher!");
        }
    },
    
    render: function() {
    return (    
    <div>
        <input type="number" ref="userGuess"/>
        <button onClick={this._handleButtonClick}>Button</button>
    </div>
      )  
    }
})



module.exports = GuessTheNumber;