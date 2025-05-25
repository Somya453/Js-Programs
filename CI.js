// Compound Interest Calculation
P = 1000;
r = 5;
t = 3;


A=P*(Math.pow((1+r/100), t));
ci=A-P;

console.log("Compound Interest is", ci);
