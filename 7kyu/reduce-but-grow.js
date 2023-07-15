/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

//answer
function grow(x){
  
    let order = x.sort((a,b) => a-b);
    let product = order.reduce((a,b) => a*b);
    
    return product;
    
  }