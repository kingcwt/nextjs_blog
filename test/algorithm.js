// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// const isprimeFunc = (item) => {
//   if (item <= 1) {
//     return false
//   }

//   for (let i = 2; i <= Math.sqrt(item); i++) {
//     if (item % i === 0) {
//       return false
//     }
//   }

//   return true
// }
// const main = (arr) => {
//   return arr.filter(isprimeFunc)
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const main = (arr) => {
  return arr.filter((item) => {
    if (item <= 1) return false
    for (let i = 2; i < item; i++) {
      if (item % i === 0) {
        return false
      }
    }
    return true
  })
}

console.log(main(numbers))

