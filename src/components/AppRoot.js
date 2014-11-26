var React = require('react');
var Style = require('../Style');
var Model = require('../Model');
var Constants = require('../Constants');
var Board = require('./Board');
var getDonburiMixin = require('donburi-model').getReactMixin;

var AppRoot = React.createClass({
  mixins: [getDonburiMixin(Model)],

  _handleShuffleClick: function () {
    Model.request(Constants.SHUFFLE_BOARD);
  },

  render: function () {
    return (
      <div style={Style.MainContainer}>
        <h2>Hello world</h2>
        <p>My state:</p>
        <p>{
          this.state.board.map(function (a) {
            return (<span key={a} style={{margin: 10}}>{a}</span>)
          })
        }</p>
        <Board board={this.state.board}/>
        <button style={Style.ShuffleButton} onClick={this._handleShuffleClick}>
          Shuffle
        </button>
      </div>
    );
  }
});

module.exports = AppRoot;
