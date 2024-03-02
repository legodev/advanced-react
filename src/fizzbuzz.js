export const fizzbuzz = (number) => {
  
  if (typeof number !== 'number') throw new Error()
  const multplies = {
    3: 'fizz',
    5: 'buzz',
    7: "woff"
  }

  let output = ''

  Object.entries(multplies)
  .forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}
