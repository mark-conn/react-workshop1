var React = require('react');

var CharacterCounter = React.createClass({
    getInitialState: function() {
        return {currentInput: ''}
        
    },
    
    _handleInput: function(event) {
        var value = event.target.value;
            return (
            this.setState({
                currentInput: value
            })
            )
        },

    render: function() {
        return (
        <div>
            <input onInput={this._handleInput} type="text"/>
            <p>Character Count {this.state.currentInput.length}</p>
        </div>
        )
        
    }
    
})


module.exports = CharacterCounter;