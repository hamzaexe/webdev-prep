var names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var number;
function billSelector()
{
number=Math.floor(Math.random()*names.length);
console.log(names[number]+" is going to buy lunch today!");
}
billSelector();