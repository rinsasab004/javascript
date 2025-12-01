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

function findSum(a,b){
    console.log(a+b);
}

findSum(10,20)
findSum(11,20)
findSum(18,20)






