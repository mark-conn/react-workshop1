var React = require('react');

var NumberGuessing = React.createClass({
    propTypes: {
        number: React.PropTypes.number.isRequired
    },
    
    componentDidMount: function() {
       this._startGame(); 
    },
    
    getInitialState: function() {
      return {};  
    },
    
    _startGame: function() {
      this.setState({
          gameStatus: 'playing',
          numberToGuess: Math.floor(Math.random() * 100),
          guesses: []
      }); 
    },

    checkNumber: function() {
        if (this.state.guesses.length === 4) {
            this.setState({
                gameStatus: 'lose'
            });
        }
        else if (this.refs.userGuess.value === this.state.numberToGuess) {
            this.setState({
                gameStatus: 'win'
            });
        }
        else {
            this.setState({guesses: this.state.guesses.concat(this.refs.userGuess.value)});
            this.refs.userGuess.value = null;
        }

        },
    
    render: function() {
    if (!this.state.gameStatus)
        return null;
        
    else if(this.state.gameStatus === 'win') {
        return (
            <div>
                <h1>YOU WIN</h1>
                <button onClick={this._startGame}>NEW GAME</button>
            </div>
            )   
    }
    
    else if(this.state.gameStatus === 'lose') {
        return (
            <div>
                <h1>YOU LOSE</h1>
                <button onClick={this._startGame}>NEW GAME</button>
            </div>
            ) 
        
    }
    else {
        return (
            <div>    
                <input type="number" ref="userGuess"/>
                <button onClick={this.checkNumber}>GUESS</button>
                <p>Guesses: {this.state.guesses + ' '}</p>
                <p>Guesses Remaining {5 - this.state.guesses.length}</p>
            </div>
        )
    }
    }
    });

module.exports = NumberGuessing;