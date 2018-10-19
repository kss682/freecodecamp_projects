function largestOfFour(arr) {
  // You can do this!
  var bigarr=[];
  for(let i=0;i<arr.length;i++){
    let big=arr[i][0];
    for(let j=1;j<arr[i].length;j++){
        if(arr[i][j]>big){
          big=arr[i][j];
        }
       
    }
     bigarr.push(big);
  }
  return bigarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
