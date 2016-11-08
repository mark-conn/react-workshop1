var React = require('react');

var Layout = React.createClass({
    render: function() {
        return (
        <div>    
            <div className="main-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
            <div className="main">
                {this.props.children}
            </div>
            <footer>
                Copywhat 2016 Kittens
            </footer>
        </div>
        );
    }



})


module.exports = Layout;