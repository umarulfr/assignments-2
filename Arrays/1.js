let string = "hannah";
let flag=0;
for (let i = 0; i < string.length/2; i++) {
   string[i] != string[string.length-i-1] ? flag=1 : flag=0;
  
}

if(flag==1)
    console.log("It is not palindrome");
else
    console.log("It is palindrome");
