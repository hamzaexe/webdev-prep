
var array=[];
var count=1;
function fizzbuzz()
{
if(count%5==0 && count%3==0)
{
 array.push("fizzbuzz");
}
else if(count%5==0)
{
  array.push("buzz");
}
else if(count%3==0)
{
  array.push("fizz");
}
else{
  array.push(count);

}
count++;
console.log(array);
  
}
fizzbuzz();
