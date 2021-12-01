// https://adventofcode.com/2021/day/1
const increased = (arr) => {
  const numOfIncreased = arr.reduce((acc, curr, index) => {
    if (index !== 0 && acc[1] < curr) acc[0]++
    acc[1] = curr
    return acc
  }, [0, 0])
  return numOfIncreased[0]
}

const increasedTwo = (arr) => {
  let sumCount = []
  for (let i = 0; i < arr.length - 2; i++) {
    const sum = arr[i] + arr[i + 1] + arr[i + 2]
    sumCount.push(sum)
  }
  return increased(sumCount)
}

module.exports = { increased, increasedTwo }
