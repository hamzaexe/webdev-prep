function lifeInWeeks(age)
{
var days=365*(90-age);
var weeks=52*(90-age);
var months=12*(90-age);
console.log("You have "+days+" days,"+weeks+" weeks, and "+months+" left");
}

lifeInWeeks(25);