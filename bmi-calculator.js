function calculatBmi(weight, height)
{
  bmi=weight/(height*height);
  return bmi
}
var value=calculatBmi(75,1.8);

console.log(Math.round(value));