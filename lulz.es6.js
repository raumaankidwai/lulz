// This is perfectly valid ES6 code:
_=_=> k=_=> 0+_+0 ;_; o=> _-_
// _=_=> is an indifferent face looking behind you
// k=_=> is an indifferent face with a phone to their ear staring at you
// 0+_+0 is a bored monkey
// ;_; is a sad face
// If you tilt your head 90 degrees left, o=> looks like a surprised guy with a hat; 90 degrees to the right, it looks like a smiling angel
// _-_ is an extremely bored kid hanging upside down from his bed.

// BREAKDOWN:
// We need to condense things a bit:
_=_=>k=_=>0+_+0;_;o=>_-_
// Now rearrange them:
/*
_=			     Create a variable "_" with the value of
  _=>            An arrow function taking a parameter named "_" for input
     k=          Create a variable "k" with the value of
       _=>       An arrow function taking a parameter named "_" for input
          0+_+0  The sum of 0, the parameter "_", and 0 (equivalent to the parameter "_" converted to a number)
;                End the statement
                 (Implicit get)
_                The variable "_" (Since there's nothing that tells JS to do anything with it, it doesn't do anything)
;                End the statement
                 (Implicit get)
o=>              An arrow function taking a parameter named "o" for input
   _-_           The variable "_" minus the variable "_" (Returns Not a Number (NaN), because, well, "_" isn't a number)
*/
