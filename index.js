// not q1
//function countToTen(){
//}

//1
function countFromOne(int){
  for (let i = 1; i < int + 1; i++) {
     console.log(i);
  }
}

//2
function countEveryOdd(int){
  for (let i = 1; i < int + 1; i++) {
      if (i % 2 === 1) {
         console.log(i)
      }
  }
}

//3
function isNegative(int){
  if (int < 0) {
      return 'true'
  } else {
      return 'false'
  }
}


//5 
function countEvens(){
  
}


//countFromOne(11);
//countEveryOdd(11);
console.log(isNegative(-11));