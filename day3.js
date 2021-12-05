const rateCalculator = (arr) => {
  const gammaRateBinary = gammaRate(arr)
  const a = binaryToNumber(gammaRateBinary)
  const b = binaryToNumber(epsilonRate(gammaRateBinary))

  return a * b
}

const gammaRate = (arr) => {
  const it1 = arr.map(i => i.split(''))
  const it2 = []
  for (let i = 0; i < it1[0].length; i++) {
    it2[i] = []
    for (let j = 0; j < it1.length; j++) {
      it2[i].push(it1[j][i])
    }
  }
  const it3 = it2.map(i => {
    const zeroTimes = i.reduce((acc, cur) => {
      return cur === '0' ? acc + 1 : acc
    }, 0)
    return zeroTimes > (i.length / 2) ? '0' : '1'
  })

  return it3.join('')
}

const epsilonRate = (gammaRate) => {
  return gammaRate.split('').map(i => i === '0' ? '1' : '0').join('')
}

const binaryToNumber = (binary) => {
  return parseInt(binary, 2)
}

// Part two

const parseOxigenArr = arr => {
  const it1 = arr.map(i => i.split(''))
  const it2 = []
  for (let i = 0; i < it1[0].length; i++) {
    it2[i] = []
    for (let j = 0; j < it1.length; j++) {
      it2[i].push(it1[j][i])
    }
  }
  const it3 = it2.map(i => {
    const zeroTimes = i.reduce((acc, cur) => {
      return cur === '0' ? acc + 1 : acc
    }, 0)
    return zeroTimes > (i.length / 2) ? '0' : '1'
  })
  return it3
}

const parseCO2Arr = arr => {
  const it1 = arr.map(i => i.split(''))
  const it2 = []
  for (let i = 0; i < it1[0].length; i++) {
    it2[i] = []
    for (let j = 0; j < it1.length; j++) {
      it2[i].push(it1[j][i])
    }
  }
  const it3 = it2.map(i => {
    const zeroTimes = i.reduce((acc, cur) => {
      return cur === '0' ? acc + 1 : acc
    }, 0)
    return zeroTimes <= (i.length / 2) ? '0' : '1'
  })
  return it3
}

const oxigenGeneratorRating = (arr) => {
  let finalArray = [...arr]

  for (let i = 0; i < arr.length; i++) {
    const oxigenPredominator = parseOxigenArr(finalArray)[i]
    finalArray = finalArray.filter(item => item.split('')[i] === oxigenPredominator)
  }

  return parseInt(finalArray[0], 2)
}

const co2GeneratorRating = arr => {
  let finalArray = [...arr]

  for (let i = 0; i < arr.length; i++) {
    if (finalArray.length === 1) break
    const co2Predominator = parseCO2Arr(finalArray)[i]
    finalArray = finalArray.filter(item => item.split('')[i] === co2Predominator)
  }

  return parseInt(finalArray[0], 2)
}

const vitalSupportRating = (arr) => {
  return oxigenGeneratorRating(arr) * co2GeneratorRating(arr)
}


module.exports = { rateCalculator, vitalSupportRating }
