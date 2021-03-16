function calculatBmi(weight, height)
{
  bmi=weight/(height*height);
  return Math.round(bmi);
}
console.log(calculatBmi(75,1.65));