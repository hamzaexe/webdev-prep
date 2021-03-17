function calculatBmi(weight, height)
{
  bmi=weight/(height*height);
  bmi=Math.floor(bmi);
  if (bmi<18.5)
  {
    return "your bmi is "+bmi+" you are underweight";
  }
  if(bmi>=18.5 && bmi<=24.9)
  {
  return "your bmi is "+bmi+" so you have a normal weight";
  }
  if(bmi>24.9)
  {
    return "your bmi is "+bmi+" so you are over-weight";
  }
}
var val=calculatBmi(75,2);
console.log(val);

