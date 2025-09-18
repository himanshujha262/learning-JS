//Number
let balance =102
console.log(typeof balance);//this will give you the type of
console.log(balance)// this will give you value
let anotherBalance = new Number(120);
console.log(anotherBalance);
console.log(typeof anotherBalance);


//boolean
let isactive = true
let isRealActive = new Boolean(true); //not recommended

//stings & taking backtake
let username = "himanshu";
console.log(typeof username);
console.log(username);

//now taking backtake
let greetMessage ='hello ${username} !';

//symbols
let sm1 =Symbol("himanshu");
let sm2 = Symbol("Himanshu");
console.log(sm1== sm2);
