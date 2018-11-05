import React from 'react'
import { connect } from 'dva'
import withRouter from 'umi/withRouter'

function BasicLayout({ children }) {
    return (
        <>
          { children }
        </>
    )
}

function mapStateToProps(state) {
  return {
    progressPercent: state.global.progressPercent,
    globalLoading: state.loading.global,
  };
}

export default withRouter(connect(mapStateToProps)(BasicLayout))
