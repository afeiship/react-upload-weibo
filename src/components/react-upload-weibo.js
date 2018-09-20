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
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this._oss = new NxWeiboOss(inProps.token);
  }

  _onChange = inEvent => {
    const { onBeforeChange, onChange } = this.props;
    const { value } = inEvent.target;
    onBeforeChange(inEvent);
    this._oss.uploads(value).then(response => {
      onChange({ target: { value: response } });
    }, error => {
      console.error('[UPLOAD FAILED]:', error);
    })
  };

  render() {
    const { token, itemLimit, onBeforeChange, onChange, ...props } = this.props;
    return (
      <ReactUpload itemLimit={itemLimit} onChange={this._onChange} {...props} />
    );
  }
}
