var React = require('react');


var SearchForm = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired   
  },
  
  getInitialState: function() {
    return {};  
     
  },
  
  _handleSubmit: function(event) {
    event.preventDefault();  
    this.props.onSearch(this.refs.userInput.value)

  },
  
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput" />
        <button>Go!</button>
      </form>
    );
  }
});

module.exports = SearchForm;