// const x:number =2;
// console.log(x);


// giving arguments 
// function heyy (fname: string)
// {
//     console.log("hello "+fname)

// }
// heyy("nikhil");

// return values from an function 
// function sum (a: number, b: number):number
// {

//    return a + b;

// }

// const val=sum(1,2);
// console.log(val)



// function isValid(age: number): boolean {
//     if (age > 18)
//         return true;
//     else
//         return false;
// }

// console.log(isValid(20))

//function to function or callbacks
// function runAfter1S(fn:()=>void )//passed function as an argument
// {
//     setTimeout(fn,1000);

// }

// runAfter1S(()=>{
//     console.log("heyy after 1s")
// })


//  interface user{
//     fname:string,
//     age:number,
//     email?:string // user can pass it or it can be empty
// }
// function isLegal(user:user)
// {
//     if(user.age>18)
//         return true;
//     else 
//      return false;

// }

// console.log(isLegal({
//     fname:"nikhil achale ",
//     age:21
// }))


//we can implement interfaces as class

// interface user {
//     fname: string,
//     age: number,
//     email?: string // user can pass it or it can be empty
//     greet(sen: string): void
// }

// class Employees implements user {
//     fname: string;
//     age: number;
//     constructor(n: string, a: number) {
//         this.fname = n,
//             this.age = a;
//     }

//     greet(sen: string) {
//         console.log(`${sen},${this.fname}`)
//     }
// }
// const e = new Employees("nikhil achale", 21);
// console.log(e.fname + ' , ' + e.age);

// Types  cannot implement interfaces
// type user= {
//     fname: string,
//     age: number,
    
// }
// function isLegal(user:user)
// {
//     if(user.age>18)
//         return true;
//     else 
//      return false;

// }

// console.log(isLegal({
//     fname:"nikhil achale ",
//     age:21
// }))


// //Union 
// type stringOrNumber = string | number;  // it can be string or number
// function printAge(age: stringOrNumber) {
//     console.log(age)
// }
// printAge("21");



// //intersection
// type user = {
//     fname: string,
//     age: number,
//     email?: string // user can pass it or it can be empty
   
// }

// type address = {
//     city: string,
//     pincode: number,
//     state: string
// }

// type employee = user & address; // it can be user or address

// const e: employee = {
//     fname: "nikhil",
//     age: 21,
//     city: "pune",
//     pincode: 411033,
//     state: "maharashtra"
// }

// console.log(e)


//Arrays in TS
 const arr: number[] = [1, 2, 3, 4, 5];

 // function to print the max value in an array
 function max(arr: number[]): number {   // this can be also wrrtien as  types numarr=number[]; function max(arr:numarr):number
     let max = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] > max)
             max = arr[i];
     }
     return max;
 }
 console.log(max(arr));
