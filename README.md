# react-upload-weibo
> Weibo upload pictures for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    token: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-upload-weibo --registry=https://registry.npm.taobao.org
```

```js
import ReactUploadWeibo from 'react-upload-weibo';
```

```scss
// customize your styles:
$react-upload-weibo-options:(
);

@import 'node_modules/react-upload-weibo/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-upload-weibo --save
// import : import ReactUploadWeibo from 'react-upload-weibo'

class App extends React.Component{
  state = {
    token: '_2A252jRgmDeRhGeBO7lAX8CzOyjSIHXVV-w7urDV8PUJbmtBeLWf5kW9NReLbimaRejwVk8D69sJv_CfRCAe0CtOp'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e=>{
    console.log(e.target.value)
  };

  render(){
    return (
      <div className="hello-react-upload-weibo">
        <ReactUploadWeibo token={this.state.token} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```