var beer=99;
var wall;
function bottle()
{
while(beer>=1)
{
wall=beer-1;
console.log(beer+" bottles of beer on the wall "+beer+ " bottles of beer Take one down and pass it around "+beer+ " bottles of beer on the wall.");
beer-=1;
}
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}
bottle()