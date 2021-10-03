// 指定したmin~max間のランダムな整数値を返す
export const getRandomInt = (min, max) => {
  const minComputed = Math.ceil(min)
  const maxComputed = Math.floor(max)
  return Math.floor(Math.random() * (maxComputed - minComputed) + minComputed)
}
