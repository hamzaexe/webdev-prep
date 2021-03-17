function leapyear(year)
{
if (year%4==0 && year%400==0)
{
  console.log("Leap year");
}
else if(year%100==0){
  console.log("not leap year");
}
}
leapyear(2000);
