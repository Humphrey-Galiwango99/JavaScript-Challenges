function array(data){

    let result = {
        evens: [],
        odds: [],
        chars: [],
    }
    data.forEach(element => {
        if(typeof element === "string"){
            result.chars.push(element);
        }
        else if(element % 2 === 0){
            result.evens.push(element)
        }
        else{
            result.odds.push(element)
        }
    });
    console.log(result)
}
array([1,2,3,4,5,6,7,8,8.9,"Joe"]);