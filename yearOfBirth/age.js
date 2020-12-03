let birthYear = prompt("Enter your year of Birth");
let age = 2020 - birthYear;
console.log(age)
if(age > 0 && age < 18){
    console.log("You are a minor")
}else if(age >= 18 && age <= 36){
    console.log("You are a youth")
}else if(age > 36){
    console.log("You are an elder")
}else{
    console.log("Error!!!!")
}