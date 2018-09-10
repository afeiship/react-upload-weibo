import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactUpload from 'react-upload';
import NxWeiboOss from 'next-weibo-oss';

// Refused to set unsafe header "Cookie"
// DO NOT USE xhr.setHeader to set cookie

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    token: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
  };

  static defaultProps = {
    onChange: noop,
    token: []
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this._oss = new NxWeiboOss(inProps.token);
  }

  _onChange = inEvent => {
    const { onChange } = this.props;
    const { value } = inEvent.target;

    this._oss.uploads(value).then(response => {
      onChange({ target: { value: response } });
    }, error => {
      console.error('[UPLOAD FAILED]:', error);
    })
  };

  render() {
    const { token, onChange, ...props } = this.props;
    return (
      <ReactUpload onChange={this._onChange} {...props} />
    );
  }
}
