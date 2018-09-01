import './dev.scss';
import ReactUploadWeibo from './main';

/*===example start===*/

// install: npm install afeiship/react-upload-weibo --save
// import : import ReactUploadWeibo from 'react-upload-weibo'

class App extends React.Component{
  state = {
    token: 'XX'
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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
