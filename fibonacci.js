function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    fibarray=[];
  
    if(n==1)
    {
        fibarray=[0];
        return fibarray;
    }
    else if(n==2)
    {
        fibarray=[0,1];
        return fibarray;
    }
    else{
      fibarray=[0,1];
    for(var i=2; i<=n;i++)
    {
      var value=fibarray[i-1]+fibarray[i-2];
      fibarray[i]=fibarray.push(fibarray[value]);
     
    }
    console.log(fibarray);
    }
     
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
fibonacciGenerator(5);