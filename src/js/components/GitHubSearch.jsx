var React = require('react');
var SearchForm = require('./GitHubSearchForm');
var GithubProfile = require('./GitHubProfile');

var GithubSearch = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  _handleSearch: function(searchTerm) {
    this.setState({user: searchTerm});  
  },
  
  render: function() {
    console.log(this.state.user)  
    return (
      <div>
        <SearchForm onSearch={this._handleSearch}/>
        {this.state.user ? <GithubProfile username= {this.state.user}/> : null}
      </div>
    );
  }
});

module.exports = GithubSearch;