import ReactUploadWeibo from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import tokenJson from '../.token.json';

import './assets/style.scss';

class App extends React.Component {
  state = {
    token: tokenJson.token
  };

  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="app-container">
        <ReactUploadWeibo
          max={3}
          token={this.state.token}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
