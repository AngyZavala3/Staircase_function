function matrix(num) {
  let num1 = "";
  for (let i = 0; i < num; i++) {
  
    for (let j = 0; j <= i; j++) { 
      num1 = num1 + "[*]"; 
    }
    num1 = num1 + "\n"; 
  }
  
  console.log(num1);
}
matrix(5);