// do not use this method to compare object or array
const first = {a : 2 , b : 4, c : 3 };
const second = {a : 2, c : 3, b : 4};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if(firstString === secondString){
    console.log('they are same');
}
else{
    console.log('different');
}

function compareObj(first , second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length ){
        for(const key of firstKeys){

            if(first[key] !== second[key]){
    
                return false;
            }
        }
        return true;
    }
}
const compareObject = compareObj(first , second);
console.log(compareObject);