const a=[[1,2,3],[4,5,6],[7,8,9]];
var s1=0;
var s2=0;


for(let i=0;i<a.length;i++) 
    {
        s1=s1+a[i][i];
        s2=s2+a[i][a[i].length-i-1];
        
    }
console.log('First diagonal sum:', s1);
console.log('Second diagonal sum:',s2);
console.log(s2-s1);