/* global $ */
var React = require('react');
var $ = require('jquery');

var GitHubProfile = React.createClass({
    proptypes: {
        username: React.PropTypes.string.isRequired
    },
    
    getInitialState: function() {
      return {};  
    },
    
    componentDidMount: function() {
       this.fetchData(); 
    },
    
    componentDidUpdate: function(prevProps) {
      if(prevProps.username !== this.props.username) {
          this.fetchData();
      }  
    },
    
    fetchData: function() {
        var that = this;
        $.getJSON('https://api.github.com/users/' + this.props.username, 
        function(data){
            that.setState({
               user: data 
            });
        });
    },
    render: function() {
        if(!this.state.user) {
            return <h1>LOADING</h1>
        } else {
        return(
            <div>
                <img className="user_avatar" src={this.state.user.avatar_url}/>
            <div className ="user_info">
                <p>{this.state.user.name}</p>
                <p>{this.state.user.bio}</p>
            </div>
            </div>
            )
        }
    }
 })

module.exports = GitHubProfile;