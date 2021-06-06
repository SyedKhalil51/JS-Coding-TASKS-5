//   1. Problem Name: Introduction To Function

function double(paisa)
{
  var answer = paisa *2;
  return answer;
}

var value = double(5);
console.log(value);

function multiply(number)  //2. Problem Name: FunctionCalling 
{
  var answer = number*2;
  console.log(answer);
}

multiply(56);
multiply(66);
multiply(76);
multiply(86);
multiply(96);
multiply(106);
multiply(116);
multiply(126);
multiply(136);


// 3. Problem Name: Function With Multiple Input Parameters

function AddTwoNumbers(Num1,Num2)
{
  var sum = Num1 + Num2;
  return sum;
}

var result = AddTwoNumbers(60,40);
console.log(result);

// 4. Problem Name: ReturningUsingAnotherWay

function Addition(Number1,Number2)
{
   return Number1 + Number2;
   
}

var addition = Addition(1000,1500);
console.log(addition);

