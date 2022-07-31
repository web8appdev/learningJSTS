// global context var
let hi = "Hi";

let  sayHi = () => console.log(hi);

sayHi();

function sayHi2() {
    const hi2 = "Hi two";
    console.log(hi);
    console.log(hi2);
}

sayHi2();
// let sayHi3 = () => console.log(hi2); //hi2' is not defined.eslintno-undef
// sayHi3();