export default {
  proxy: {
    '/api': {
      target: "http://135.64.58.9/mock/11/",
      changeOrigin: true,
      pathRewrite: {"^/api": ""},
    }
  }
};
