function calculatBmi(weight, height)
{
  bmi=weight/(height*height);
  bmi=Math.floor(bmi);
  var result;
  if (bmi<18.5)
  {
    result="your bmi is "+bmi+" you are underweight";
  }
  else if(bmi>=18.5 && bmi<=24.9)
  {
  result="your bmi is "+bmi+" so you have a normal weight";
  }
  else if(bmi>24.9)
  {
    result="your bmi is "+bmi+" so you are over-weight";
  }
  return result;
}
console.log(calculatBmi(85,1.8));


