import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactUploadWeibo from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [],
    token:
      'SUB=_2A25NRDndDeRhGeVI7VMZ8yzEyz-IHXVuMCwVrDV_PUNbm9AfLVX9kW9NTBpP0WiKCSBlMw7oSMG7Zy0nrMofP6ea'
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ items: e.target.value });
  };

  handleTokenChange = (e) => {
    console.log('token changed.');
  };

  render() {
    const { items } = this.state;

    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-upload-weibo">
        <ReactUploadWeibo
          name="pic1"
          className="input"
          limit={3}
          multiple
          token={this.state.token}
          onChange={this.handleChange}
        />

        <textarea
          className="textarea my-3"
          placeholder="token like this: SUB=_2A25NRDndDeRhGeVI7VMZ8yzEyz-IHXVuMCwVrDV_PUNbm9AfLVX9kW9NTBpP0WiKCSBlMw7oSMG7Zy0nrMofP6ea"
          value={this.state.value}
          onChange={this.handleTokenChange}
        />

        <div className="pic-list">
          {items.map((item) => {
            return <img alt="" key={item.pid} src={item.url} />;
          })}
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
