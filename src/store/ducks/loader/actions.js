import types from './types'

const startLoading = () => ({
  type: types.START_LOADING,
})

const stopLoading = () => ({
  type: types.STOP_LOADING,
})

export { startLoading, stopLoading }
