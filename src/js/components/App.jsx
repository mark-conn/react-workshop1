var React = require('react');
var ImageCaption = require('./ImageCaption');
var Layout = require('./Layout');
var GuessTheNumber = require("./GuessTheNumber");
var YouClicked = require('./YouClicked');
var CharacterCounter = require('./CharacterCounter');
var CharacterLimit = require('./CharacterLimit');
var NumberGuessing = require('./NumberGuessing');
const GitHubProfile = require('./GitHubProfile');
const GithubSearch = require('./GitHubSearch');

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];


var App = React.createClass({
  renderImage: function() {
    return (  
    <div>
      {
      imageList.map(function(item) {
        return <ImageCaption key={item.id} source={item.source} text={item.text}/>
      })
      }
    </div> 
    )
  },    
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>Testing ImageCaption</h2>
            <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Rainbow ass kitty"/>
        <hr/>
        <div>
          {this.renderImage()}
        </div>
        <hr/>
        <h2>Testing Layout</h2>
            <Layout>
                <h2>About us</h2>
                <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
            </Layout>
        <hr/>
        <GuessTheNumber numberToGuess = {30}/>
        <hr/>
        <YouClicked/>
        <hr/>
        <CharacterCounter/>
        <hr/>
        <CharacterLimit limit = {140}/>
        <hr/>
        <NumberGuessing number = {Math.floor(Math.random() * 100)}/>
        <hr/>
        <GitHubProfile username = "connman" />
        <hr/>
        <GithubSearch />
      </main>
    );
  }
});

module.exports = App;