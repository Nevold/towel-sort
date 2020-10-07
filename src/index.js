
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix) && matrix.length >1){
  for (let j=1;j<matrix.length;j+=2) {
    matrix[j].reverse(); 
  }
let arr=[];
  for ( let i=0;i<matrix.length;i++){
    for ( let j=0;j<matrix[i].length;j++){
    arr.push(matrix[i][j]);
    }
  }
  return arr;
} else {
  return arr=[];
}
}
