var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
    render: function() {
      var link = 'http://www.imdb.com/title/'+this.props.movies.imdbID;
      return (
        <div className="well">
           <div className="row">
                <div className="col-md-4">
                    <img className="thumbnail" src={this.props.movie.Poster} />
                </div>
                <div className="col-md-8">
                    <h4>{this.props.movies.Title}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Year Released: {this.props.movies.Year}</li>
                        <li className="list-group-item">IMDB ID: {this.props.movies.imdbID}</li>
                    </ul>
                    <a className="btn btn-primary" href={link}>View on IMDB</a>
                </div>
           </div>
        </div>
      )
    }
});

module.exports = Movie;
