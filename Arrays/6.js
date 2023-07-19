var str="india is my country.";
var newArray = []
let copyString = ""
for (let i = 0; i < str.length; i++) {
    copyString += str[i]
    if(str[i] == " " || str[i]=='.'){
        newArray.push(copyString)
        copyString = ""
    }
}
console.log(newArray);