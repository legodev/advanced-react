export const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error()

    
  
    if (number % 5 === 0 && number % 3 === 0) return 'fizzbuzz'
    if (number % 3 === 0) return 'fizz'
    if (number % 5 === 0) return 'buzz'
  
    return number
  }