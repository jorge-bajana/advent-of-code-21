const bingoCalc = (input) => {
  const [calls, ...bingoCards] = input.split('\n\n')
  const cards = bingoCards.map(card => card.split('\n').map(row => row.trim().replace(/  /g, ' ').split(' ')))
  const nums = calls.split(',')
  let numHist = []
  let winnerCard = null
  for (let i = 0; i < nums.length; i++) {
    numHist.push(nums[i])
    for (let j = 0; j < cards.length; j++) {
      const isWinner = checkMatrix(cards[j], numHist)
      if (isWinner) {
        winnerCard = cards[j]
        break
      }
    }
    if (winnerCard) break
  }

  return getResult(numHist, winnerCard)
}

const checkMatrix = (card, numHist) => {
  const currentNumber = numHist[numHist.length - 1]
  let position = []
  for (let i = 0; i < card.length; i++) {
    if (card[i].includes(currentNumber)) {
      position[0] = i
      for (let j = 0; j < card[i].length; j++) {
        if (card[i][j] === currentNumber) {
          position[1] = j
          break
        }
      }
      break
    }
  }
  if (position[0] === undefined || position[1] === undefined) return false

  const row = card[position[0]]
  const column = card.map(i => i[position[1]])

  const hasRowComplete = row.every(num => numHist.includes(num))
  const hasColumnComplete = column.every(num => numHist.includes(num))

  return numHist.length >= card[0].length && (hasRowComplete || hasColumnComplete)
}

const getResult = (numHist, card) => {
  const cardNumbers = card.join().split(',')
  const unmarkedNumbers = cardNumbers.filter(x => !numHist.includes(x)).reduce((acc, curr) => acc + parseInt(curr), 0)
  return unmarkedNumbers * numHist[numHist.length - 1]
}

const lastBingoCard = (input) => {
  const [calls, ...bingoCards] = input.split('\n\n')
  const cards = bingoCards.map(card => card.split('\n').map(row => row.trim().replace(/  /g, ' ').split(' ')))
  const nums = calls.split(',')
  let numHist = []
  let winnerCards = []
  for (let i = 0; i < nums.length; i++) {
    if (winnerCards.length === cards.length) break
    numHist.push(nums[i])
    for (let j = 0; j < cards.length; j++) {
      const isWinner = checkMatrix(cards[j], numHist)
      if (isWinner && !winnerCards.includes(j)) {
        if (winnerCards.length < cards.length) winnerCards.push(j)
        else break
      }
    }
  }

  return getResult(numHist, cards[winnerCards[winnerCards.length - 1]])
}


module.exports = {
  bingoCalc,
  lastBingoCard
}
