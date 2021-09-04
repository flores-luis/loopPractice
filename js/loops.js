/*

This program will explain all loops in Javascript with examples

Loops essentially do same things, repeat an action a number of times, but
difference of how they start and end.

Loops are: for, while, do while, for...in, for...of
*/

// For loop----------------------------------------------------------------------------------------
console.log("This is a For loop")
/*
    for (Initial Expression / Declaration; Condition; Increment Expression) {
        Statement
    }
or 

    for(statement1; statement2; statement3){
        lines of code to be executed
    }
NOTE:

The statement1 is executed first even before executing the looping code. So, 
this statement is normally used to assign values to variables that will be used inside the loop.
The statement2 is the condition to execute the loop.
The statement3 is executed every time after the looping code is executed.
- i is used as index as a starting point
*/

    for (let i = 0; i < 10; i++)
        console.log(i)

// While loop----------------------------------------------------------------------------------------
console.log("This is a While Loop")
/*

    While (Condition) {
        Statement
        Increment Expression - This used as an expression to break out the loop
    }

NOTE: While loop is support by a global variable
he “while loop” is executed as long as the specified condition is true. 
Inside the while loop, you should include the statement that will end 
the loop at some point of time. Otherwise, your loop will never end and your browser may crash.
*/

    let num = 0

    while (num < 10){
        console.log(num);
        num++;
    }


// Do While loop----------------------------------------------------------------------------------------

// For...in loop----------------------------------------------------------------------------------------

// For...of loop----------------------------------------------------------------------------------------