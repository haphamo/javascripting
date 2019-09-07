/*
Use your knowledge of the variables' scope and place the following code inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6 
*/

let a = 1, b = 2, c = 3;  
       
     (function firstFunction(){  
       let b = 5, c = 6;  
       
       (function secondFunction(){  
         let b = 8;  
         console.log(`a: ${a}, b: ${b}, c: ${c}`);
       
         (function thirdFunction(){  
           let a = 7, c = 9;  
       
           (function fourthFunction(){  
             let a = 1, c = 8;  
       
           })();  
         })();  
       })();  
     })();  