

// const hotDogStack = ['🌭', '🌭', '🌭', '🌭', '🌭', '🌭']
// console.log(hotDogStack.length)
 

// // build a function that uses a callback

// function getHotDog(next){
//     if(!hotDogStack.length) {
//         throw 'no more hotdogs!'
//     }
//     const hotDog = hotDogStack.pop()
//     next(hotDog)
// }
// do not need to name it callback, can shoose 'doSomething' , 'CB' , etc.
// next write a function that returns a hotdog

// function eatSomething(food){
//     console.log('i ate the', food)
// }
// // function ^


// // call a function with a callback
// try {
//     getHotDog(eatSomething)
// }
// catch(error){
//     console.error(error)
// }

// function isSumTen(a, b){
// const sum = a+b //  ternary:  const result = (sum === 10)?
// // true :false
// // return result
//  }
// if(sum === 15){
//     return true
// } else {
//     return false
// }
// }

// const num1 = 6
// const num2 = 4

// console.log(isSumTen(num1, num2))

// function isGreaterThan(a,b){
//     const result = a/b
//     if(result <= 1){
//         return false
//     } else {
//         return true
//     }
// }

// const num= 3
// const den= 4

//  console.log(isGreaterThan(num, den))

// function addArrayItems(array){
//     let sum=0
//     for(let i = 0; i <array.length; i++){
//         sum=sum + array[i]
//     }
//     return sum
// }
// const numGroup= [5, 10, 15, 20, 25]
// console.log(addArrayItems(numGroup))

// function absoluteValue(a){
// if(a < 0){
//     return -a
// } else {
//     return a
// }
// }

// let num1= 0
// console.log (absoluteValue(num1))

// function areaRectangle(a,b){
//     const area = a * b
//     return area
// }
// const len = 8
// const wid = 5

// console.log(areaRectangle(len, wid))

// area of a triangle
// function areaTriangle(a, b){
// const area = (a * b/2)
// return area
// }
// const hei = 8
// const base = 7

// console.log(areaTriangle(hei, base))

//Write a function that returns the remainder of a division operation using no modulus (%)

function noModDivide(a, b){
    let result = 
        return result
}
 const num1 = 5
 const num2 = 5

 console.log(noModDivide(num1, num2))
