const path = require('path')
export default {
  exportStatic:true,
  ignoreMomentLocale: true,
  hash: true,
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
      routes: {
        exclude: [
          /model\.([jt])sx?$/,
          /service\.([jt])sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
      library: 'react',
      fastClick: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/loading'
      }
    }],
  ],
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    utils: path.resolve(__dirname, 'src/utils'),
    models: path.resolve(__dirname, 'src/models'),
    assets: path.resolve(__dirname, 'src/assets')
  },
  define: {
    apiPrefix:'/api'
  },
  theme: {
    'brand-primary': '#fa4448',
    'brand-primary-tap': '#f87073'
  }
}
