const str='test statement of counting words.';
var count=0;
for(let i=0;i<str.length;i++)
    {
    if(str[i]==' ' || str[i]=='.')
        {
        count++;
        }
    }
console.log('No of words:',count); 