import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactUploadWeibo'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    '@feizheng/next-weibo-oss': '@feizheng/next-weibo-oss',
    '@feizheng/react-upload': '@feizheng/react-upload'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
