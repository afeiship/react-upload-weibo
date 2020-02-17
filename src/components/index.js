import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import NxWeiboOss from '@feizheng/next-weibo-oss';
import ReactUpload from '@feizheng/react-upload';

const CLASS_NAME = 'react-upload-weibo';

export default class ReactUploadWeibo extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The max upload limit.
     */
    max: PropTypes.number,
    /**
     * The weibo oss token.
     */
    token: PropTypes.string
  };

  static defaultProps = {
    onChange: noop,
    max: 10
  };

  constructor(inProps) {
    super(inProps);
    this.weiboOss = new NxWeiboOss(inProps.token);
  }

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    const { value } = inEvent.target;
    this.weiboOss.uploads(value).then(
      (response) => {
        onChange({ target: { value: response } });
      },
      (error) => {
        console.error('[UPLOAD FAILED]:', error);
      }
    );
  };

  render() {
    const { className, max, onChange, ...props } = this.props;
    return (
      <ReactUpload
        max={max}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
