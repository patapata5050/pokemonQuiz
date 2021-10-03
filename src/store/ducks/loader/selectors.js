// selectors とは、state から必要な値を算出する関数のこと。state をシンプルに保つために、既存の state から算出できる値はすべて Selectors 経由で取得する。
import { useSelector } from 'react-redux'

const getLoading = () => {
  const isLoading = useSelector((state) => state.isLoading)
  return isLoading
}

// const exportObject = {
//   GetLoading,
// }

export default { getLoading }
