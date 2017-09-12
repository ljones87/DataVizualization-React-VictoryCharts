

const coordGenerator = (state, years) => {
  const xy = []
  for (let year of years) {
    const xcoord = year
    const ycoord = Math.ceil(state[year])
    xy.push({ x: xcoord, y: ycoord })
  }
  return xy
}

module.exports = { coordGenerator }
