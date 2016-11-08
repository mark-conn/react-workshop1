var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
      limit: React.PropTypes.number.isRequired  
    },
    getInitialState: function() {
        return {currentInput: ''}
        
    },
    
    _handleInput: function(event) {
        var value = event.target.value;
        if(value.length < this.props.limit) {
            return (
            this.setState({
                currentInput: value
            })
            )
        } else {}
        },

    render: function() {
        return (
        <div>
            <input value={this.state.currentInput} onInput={this._handleInput} type="text"/>
            <p>{this.props.limit - this.state.currentInput.length} remaining</p>
        </div>
        )
        
    }
    
})


module.exports = CharacterLimit;