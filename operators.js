//Unary Operartor
let a = 5;
let b = 10;

console.log("a--=",a--); // 5
console.log("a=",a); // 4



//Assignment Operator
let x = 5;

console.log("x=",x); // 5
console.log("x += 5 =",x+=5); // 10


//Comparison Operator
let y = 10;
let z = 20;
console.log('y<z', y<z); // false
console.log(y==10); // true
console.log(y!=10); // false


let r='5';
let s=5;
console.log(r==s); // true (loose equality)
console.log(r===s); // false (strict equality)


//Logical Operator
let p = true;
let q = false;
console.log(p && q); // false (logical AND)
console.log(p || q); // true (logical OR)
console.log(!p); // false (logical NOT)
console.log(!q); // true (logical NOT)