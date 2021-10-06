// operations とは、1つ以上の action を組み合わせたもの。個別の action は単純なままに、必要に応じて複雑な operations を作成できる。redux-thunkなどのミドルウェアはここで使う。
import * as actions from './actions'

const { getInformation, setInitialStates } = actions

export { getInformation, setInitialStates }
