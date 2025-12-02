// console.log("javascript")


    // ......................................... 
//    keywords - a)let:-local scope , b)var :- global, c)const :- local

// a) #10 5
// let x=10
// {
//     let x=5
//     console.log("inside:",x);
// }
//  console.log("outside:",x);


// b) #5 5
// var x=10
// {
//     var x=5
//     console.log("inside:",x);
// }
//  console.log("outside:",x);


// c)#5 10
// const x=10
// {
//     const x=5
//     console.log("inside:",x);
// }
//  console.log("outside:",x);


// .........................
// d)
// var x
// x=10 

// let y
// y=5

// const pi=3.14

// var x=10
// var x=20

// let y=10
// let y=30

// const a=1
// const a=3



// ...................................................................

// I)...........           DATATYPES                  ........................

// String,number,NaN,Boolean,undefined,Object

// 1)string

// s="hello"
// s2='welcome'
// s3=`javascript`
// console.log(typeof s3);


// 2)number

// num=10.5
// console.log(typeof num)   #number


// 3)Boolean

// b1=false
// console.log(typeof b1)    #boolean

// 4)undefined
// let x
// console.log(typeof x)   #undefined

// 5)NaN
// console.log("hello"/2)    #NaN

// console.log(2+2+"4")     #44

// 6)object

// arr1=[1,2,3,4,5,6]
// console.log(arr1)
// console.log(typeof arr1)        #object

// person={name:"abc",place:"calicut"}
// console.log(person);                  #{name:'abc',place:'calicut'}
// console.log(typeof person);           #object


// .................................................................................................

//                                  II) OPERATORS

// 1)arithematic operators +,-,*,/,%,**,++,--

// let num1=10
// console.log(num1++);  #10          \\post-increment

// let num2=20
// console.log(++num2);      #21       \\ pre-increment

// x=10
// y=x++
// console.log(x)   #11
// console.log(y)   #10

// x=10
// y=++x
// console.log(x)      #11
// console.log(y)      #11



// 2)Assignment operators   =,+=,-=

// num=10
// num+=2  //num=num+2
// num-=2   //10
// console.log(num)   //12


// 3)relational operators <,>,<=,>=,==,!=,===,!==

// num1=10
// num2=20
// console.log(num1>num2) //false
// console.log(num1<num2)  //true
// console.log(num1==num2) //false
// console.log(num1===num2) //false
// console.log(num1!=num2) //true
// console.log(num1!==num2) //true  


// 4)logical operators     &&, ||, !

// n1=10
// n2=20
// console.log(n1>5 && n2<30);   //true
// console.log(n1>5 || n2<30);   //true
// console.log(!(n1>5));   //false



// 5) bitwise operators    &, |, ^

// console.log(1&2);    //0
// console.log(2&3);    //2

// 00  -0
// 01  -1
// 0010 -2
// 0011 -3


//  6)ternary operators   ?:




// ...............................................................................
 
//...............conditional statements(if,switch)...............

// if(condition1){
//     block1
// }
// else if(conditio2){
//     block2
// }
// else{
//     block3
// }

// a?)) //in python:
// age=15
// if(age>=18){console.log("eligible")}
// else{
//     console.log("not eligible")               //not eligible
// }

// //in js:
// console.log(age>=18?"eligible":"not eligible")     //not eligible


// // b?))given the largest number
// num1=Number(prompt("enter the first number")) // :-load in browser showing in alert box
// num2=Number(prompt("enter the second number"))
// num3=Number(prompt("enter the third number"))
// if(num1>num2 && num1>num3){
//     // console.log(`${num1} is large`)
//     alert(`${num1} is large`)
// }
// else if(num2>num3){
//     // console.log(`${num2} is large`)
//     alert(`${num2} is large`)
// }
// else{
//     // console.log(`${num3} is large`)
//     alert(`${num3} is large`)
// }


// parseInt()         //only integer value
// parseFloat()       //take decimal value

// num1=parseInt(prompt("enter the number"))
// alert(num1)

// m1=parseFloat(prompt("enter the number"))
// alert(num1)


//switch
// switch(exp){
//     case value1:
//         block
//         break 
//     case value2:
//         block
//         break 
//     default:
//         block
// }

// day=1
// switch(day){
//     case 1:
//         console.log("sunday");
//         break 
//     case 2:
//         console.log("monday");
//         break 
//     default:
//         console.log("something else");
// }

// ............................................................................................


//......................looping statements (for,while,do-while).......................

// for iter in range(startTransition,encodeURI,step)
// for(initialization;CSSConditionRule;incr/desc){

// }

// for(let i=1;i<11;i++){
//     console.log(i);
// }

// s="welcome"
// for(let i in s){
//     console.log(i);    // 1 2 3 4 5 6 
// }

// s="welcome"
// console.log(s.length);  //7


// arr=[10,20,30,40,50]
// for(let i of arr){
//     console.log(i);   //10 20 30 40 50  
// }

// arr=[10,20,30,40,50]
// for(let i in arr){
//     console.log(i);   // 0 1 2 3 4  
// }

// for/in
// for/of

// arr=[10,20,30,40,50]
// largest=0
// for(let i of arr){
//     if(i>largest){
//         largest=i
//     }
// }
// console.log(largest);   //50


// while loop:

// initialization
// while(condition){
//     inc/dec
// }

// let i=1
// while(i<11){
//     console.log(i);
//     i++
// }

// num=123
// result=0
// temp=num
// while(num>0){
//     rem=num%10;
//     result=result*10+rem;
//     num=parseInt(num/10)
// }
// console.log("Reversed number is:",result);
// if(temp==result){
//     console.log(`${temp} is palindrome`);  
// }
// else{
//     console.log(`${temp} is not palindrome`);  
// }

// do-while:

// let i=1
// do{
//     console.log(i);
//     i++
// }
// while(i<11)


// .........................................................................

// .....................FUNCTIONS...................

// function findSum(a,b){
//     console.log(a+b);
// }

// findSum(10,20)
// findSum(11,20)
// findSum(18,20)



// ..............................................................................

// ......................STRING METHODS..............................
// s="hello"
// num=123
// console.log(s.length);   //5
// s2=num.toString()
// console.log(typeof s2);

// s='Hello world'
// console.log(s.toUpperCase());   //HELLO WORLD
// console.log(s.toLowerCase());   //hello world
// console.log(s[0]);      //H
// console.log(s.charAt(0));   //H
// console.log(s.at(0));  //H
// console.log(s.trim());   //Hello World  #used to remove the space
// console.log(s.trimStart());    //--used to remove the beginning space
// console.log(s.trimEnd());    //--used to remove the ending space
// console.log(s.split(" "));  //['Hello','world']
// console.log(s.slice(0,5));   //Hello
// console.log(s.substring(0,5));    //Hello
// console.log(s.substr(0,5));   //Hello

// num=5
// s=num.toString()
// console.log(s.padStart(5,0));     //00005
// console.log(s.padEnd(5,0));       //50000  #5 digit,endswith 0
// eg:- 20
//     padStart(3,0)   #want 3 digit number so start with 0 and fill given 2 digits
//     answer is 020

// ......Date..........

// let today=new Date
// console.log(today);
// console.log(today.getFullYear());   //2025
// console.log(today.getMonth()+1);    //12
// console.log(today.getDate());       //1

// let today=new Date
// console.log(today);
// y=today.getFullYear()
// m=today.getMonth()+1
// d=today.getDate()
// d1=d.toString().padStart(2,0)

// fulldate=`${y}-${m}-${d1}`
// console.log(fulldate)             //2025-12-01

// .............................................

// s="HeLlo world"
// console.log(s.replace("l","*"));   //HeL*o world
// console.log(s.replaceAll(/l/g,"*"));  //HeL*o wor*d
// console.log(s.concat("s"));  //HeLlo worlds


// ..................................................................................................

// ..........................ARRAY METHODS.............................

// arr1=[100,200,300,400,500]
// // console.log(arr1[0]);       //100
// // console.log(arr1.pop());    //500    delete last element
// // console.log(arr1.shift());     //100    remove first element

// // arr1.push(1000)
// // console.log(arr1);    //[200,300,400,1000]     add element

// // arr1.unshift(1,2,3)
// // console.log(arr1);      //[  1,2,3,
// // //                        200,300,400,
// // //                     1000]

// // console.log(arr1.slice(2,4));        //[300,400]
// // // arr1.splice(2,0,1000)    //[100,200,1000,300,400,500]
// // // arr1.splice(2,1,1000)    //[100,200,1000,400,500]
// // arr1.splice(2,2,1000)    //[100,200,1000,500]
// // console.log(arr1);

// console.log(arr1.length);   //5
// console.log(arr1.at(0));   //100


// ......................................................................................................

// ............ARROW FUNCTION ()=>()   -anonymous function or lamnda functions...............

// symbols:-
      
//      (arguments)=>(exp)
//      x=>()
//      x=>{}

// let f=(x,y)=>{
//     console.log(x);      //2
//     return x+y
// }
// console.log(f(2,3));        //5
                
        //    .......................................................


// // asynchronous functions:- not depend another lines
// // eg:-
//     console.log("welcome");
//     setTimeout(()=>{
//         console.log("asynchronous");
//     },2000)
//     console.log("bye");

        //    .......................callback function.........................

// //promises :-fulfilled,rejected,pending
// syntax:-  
//      promises=fetch("")

// let promises=new Promise(function(resolve,rejected){
//     let data=false       //true-fulfilled   false-rejected
//     if(data){
//         resolve("fulfilled")
//     }
//     else{
//         resolve("rejected")
//     }
// })
// promises.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })
    

// ...............................................

//map,filter,reduce,foreach(),find()

// arr1=[10,20,30,40,50]
// arr1.forEach((i)=>{
//     console.log(i);      //10 20 30 40 50
// });
     
// arr1.map((i)=>{
//     console.log(i);    //10 20 30 40 50  
// });
     
// arr1.filter((i)=>{
//     console.log(i);       //10 20 30 40 50
// });

// let res=arr1.reduce((i,j)=>(i+j))
// console.log(res);                //10 20 30 40 50 150

     




























