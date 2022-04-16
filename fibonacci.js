let i = 1;
let n = 10;
let a = 1;
let b = 1;
while (i <= n)  {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  i = i + 1;
}