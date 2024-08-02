
// SETTIMEOUT USING ARROW FUNCTION

function hello(h){
    setTimeout(()=>{
        console.log("welcome");
        h();
    },5000)
    }


    
const h = ()=>{
    console.log("complete")

}
hello(h);


// SETTIMEOUT WITHOUT ARROW FUNCTION

function abc(call){
   setTimeout (function(){
    console.log("task done");
    call();
   },5000)
}
function j(){
    console.log("next");
}
abc(j);


// SETTIMEOUT DIRECT

function def(){
    console.log("statement");
}

setTimeout(def,5000);



