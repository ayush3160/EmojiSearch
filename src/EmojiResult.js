import React, { Component } from "react";

export default class EmojiResult extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((emoji) => {
          const codePointHex = emoji.symbol.codePointAt(0).toString(16);
          const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
          return (
            <div className="component-emoji-result-row copy-to-clipboard">
              <img src={src} alt="Card image cap" />

              <span className="title">{emoji.title}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
