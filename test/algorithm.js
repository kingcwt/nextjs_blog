// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // const isprimeFunc = (item) => {
// //   if (item <= 1) {
// //     return false
// //   }
//
// //   for (let i = 2; i <= Math.sqrt(item); i++) {
// //     if (item % i === 0) {
// //       return false
// //     }
// //   }
//
// //   return true
// // }
// // const main = (arr) => {
// //   return arr.filter(isprimeFunc)
// // }
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// const PrimeCheck = (n) => {
//   // input: n: int
//   // output: boolean
//   if (n === 1) return false
//   if (n === 0) return false
//   if (n === 2) return true
//   if (n % 2 === 0) return false
//
//   for (let i = 3; i * i <= n; i += 2) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }
//
//
// console.log(PrimeCheck(13))
//

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i)
  }, 1000)
}
