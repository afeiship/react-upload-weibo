# react-upload-weibo
> Weibo upload pictures for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-upload-weibo
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| onChange  | func   | false    | noop    | The change handler.                   |
| limit     | number | false    | 10      | The max upload limit.                 |
| token     | string | false    | -       | The weibo oss token.                  |


## usage
1. import css
  ```scss
  @import "~@jswork/react-upload-weibo/dist/style.css";

  // or use sass
  @import "~@jswork/react-upload-weibo/dist/style.scss";

  // customize your styles:
  $react-upload-weibo-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactUploadWeibo from '@jswork/react-upload-weibo';
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

  ```

## documentation
- https://afeiship.github.io/react-upload-weibo/


## license
Code released under [the MIT license](https://github.com/afeiship/react-upload-weibo/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-upload-weibo
[version-url]: https://npmjs.org/package/@jswork/react-upload-weibo

[license-image]: https://img.shields.io/npm/l/@jswork/react-upload-weibo
[license-url]: https://github.com/afeiship/react-upload-weibo/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-upload-weibo
[size-url]: https://github.com/afeiship/react-upload-weibo/blob/master/dist/react-upload-weibo.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-upload-weibo
[download-url]: https://www.npmjs.com/package/@jswork/react-upload-weibo
