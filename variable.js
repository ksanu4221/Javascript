//   const ---constant
 let  names='sanu';
 names="kumar"
 console.log(names);
 // simple functtion
function fun(){
    console.log(names);
    
}
// function call
fun();
// arrow function

const fun2=()=>console.log(names);

fun2();

//self invoking function

(function fun3(){
    console.log(names);
    
})();