function leapyear(year)
{
if (year%4==0)
{
  if(year%100==0)
  {
    if(year%400==0)
    {
      return "Leap year";
    }
    else{
      return "not leap year";
    }
  }
  else{
    return "not leap year";
  }
}
else{
  return "not leap year";
}
}
result=leapyear(2000);
console.log(result);
