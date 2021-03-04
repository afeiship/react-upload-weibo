import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import NxWeiboOss from '@jswork/next-weibo-oss';
import ReactUpload from '@jswork/react-upload';

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
    limit: PropTypes.number,
    /**
     * The weibo oss token.
     */
    token: PropTypes.string
  };

  static defaultProps = {
    onChange: noop,
    limit: 10
  };

  constructor(inProps) {
    super(inProps);
    this.weiboOss = new NxWeiboOss(inProps.token);
  }

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    const { value } = inEvent.target;
    this.weiboOss.uploads(value.files).then(
      (response) => {
        onChange({ target: { value: response } });
      },
      (error) => {
        console.error('[UPLOAD FAILED]:', error);
      }
    );
  };

  render() {
    const { className, limit, onChange, token, ...props } = this.props;
    return (
      <ReactUpload
        limit={limit}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
