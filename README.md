# react-upload-weibo
> Weibo upload pictures for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func,
    itemLimit: PropTypes.number,
    token: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
  };

  static defaultProps = {
    onBeforeChange: noop,
    onChange: noop,
    itemLimit: 10,
    token: []
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
    token: tokenJson.token
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
        <ReactUploadWeibo itemLimit={3} token={this.state.token} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```

## token.json
```json
{
  "token": "SUB=YOUR_TOKEN"
}
```
