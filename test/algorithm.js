









/**
 * @description 判断一个数组中的素数
 * @param {*} numbers
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const isPrime = (numbers) =>{
   
    const result = []
    for(let i =2;i<numbers.length;i++){
      let item = numbers[i]
      
      let cur = []
      for(let j = 2;j<item;j++){
        if(item%j===0){
           cur.push(j)
        }
      }

      if(cur.length===0){
        result.push(item)
      }
       
    }

    return result
}

console.log(isPrime(numbers))