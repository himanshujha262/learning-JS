//As we know that const is used to for nonmutable function 
const username={
  "first name": "himanshu",
  lastname: "Jha",
  isLoggedin: true,
};
//console.log(username);
//accesing them for change
username.firstname = "himanshu raj";
username.lastname ="Kumar";

console.log(username);

//another method to access the const data
console.log(username["first name"]);

let today = new Date();
console.log(today.getDate());

//Arr