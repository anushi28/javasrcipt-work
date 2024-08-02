

// console.log("hello")
// // let

// let k = 10;
//  let m=30;
// console.log(m);


// // var
// var b = "haapy"
// console.log(b);

// // const

// const c = 20;
// console.log(c);

// // addition
// a=30;
// b=20;
// console.log(a+b);

// // subtraction
// e=20;
// d=60;
// console.log(d-e);

// // multiplication

// h=100;
// f=20;
// console.log(h*f);

// // division
// i=10;
// g=20;
// console.log(g%d);


// // bitwise
// console.log(i==g & h>f);
// console.log(i!=g | h>f );

// // logical
// console.log(i==g && h>f);
// console.log(i!=g || h>f);







// if else

let a = 17;
if(a == 17){
    console.log("not adult")
}
else if (a==12){
    console.log("teenager")
}
else{
    console.log("adult")
}



// while loop

 let count = 0;
while(count<=10){
    console.log("count is"+ count)
    count++
}

// do while loop
let abc =2;
do{
    console.log("count is" +count) 
    abc++
}
while(abc<=10)


// for loop

for(count=30; count>15;count--){
    console.log("count is"+ count )
}


// break nd  continue in for loop

for (let num = 0; num < 10; num++) {
//   if (num === 3) { break; }

//   console.log("numubers are "+ num)
  if (num == 5) {continue;}
  console.log("numubers are "+ num)
}


// break nd continue in while loop

let num=0;
while(num<=10){
    console.log("game start" +num)
    num++
    if(num==5){
        console.log("game over"+num)
        
        break;

    }
   


}

let pqr=0;
while(pqr<=10){
    console.log("numbers are"+pqr )
    pqr++
    if(pqr==5){
        
       continue;

    }
   


}


    



// switch case
let grade = "a";
switch(grade){
    case "a"  : console.log("excellent");
    break;
    case "b"  : console.log("good job");
    break;
    case "c"  : console.log("can do better");
    break;
    case "d"  : console.log("fail");
    break;
    default:console.log("exam not given");

}