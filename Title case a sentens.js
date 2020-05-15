/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

For this algorithm, you can use the split() method.

titleCase("I'm a little tea pot")should return a string.
titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
*/
function titleCase(str){
   const newStr=str.toLowerCase().split(" ")
     const arr=[]
       for (var i = 0; i < newStr.length; i++) {
       const upprStr=newStr[i][0].toUpperCase() + newStr[i].slice([1])
      arr.push(upprStr)  
       }
       return arr.join(" ")
      
     }
   console.log(titleCase("I'm a little tea pot"))
   // let sum=0
   // function sumAll(arr){
   //     if(arr[0]<arr[1]){
   //         for (let i =arr[0] ; i <= arr[1]; i++) {
   //             sum+=i 
   //         } 
   //     }else 
   //     for (let i =arr[1] ; i <= arr[0]; i++) {
   //         sum+=i 
   //     }
   //     console.log(sum)
   // }
   // sumAll([5, 10])
   
      