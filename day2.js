const calculatePosition = (input) => {
  const [position, depth] = input.reduce((acc, item) => {
    const [move, steps] = item.split(' ')
    switch (move) {
      case 'forward':
        acc[0] += parseInt(steps)
        break
      case 'down':
        acc[1] += parseInt(steps)
        break
      case 'up':
        acc[1] -= parseInt(steps)
        break
    }
    return acc
  }, [0, 0])
  return position * depth
}

const calculatePositionTwo = (input) => {
  const [position, depth] = input.reduce((acc, item) => {
    const [move, steps] = item.split(' ')
    switch (move) {
      case 'forward':
        acc[0] += parseInt(steps)
        acc[1] += acc[2] * parseInt(steps)
        break
      case 'down':
        acc[2] += parseInt(steps)
        break
      case 'up':
        acc[2] -= parseInt(steps)
        break
    }
    return acc
  }, [0, 0, 0])
  return position * depth
}

module.exports = { calculatePosition, calculatePositionTwo }
