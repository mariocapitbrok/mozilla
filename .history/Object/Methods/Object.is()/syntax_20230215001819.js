Object.is(value1, value2)

/* 
Parameters
  value1
    The first value to compare.

  value2
    The second value to compare.

Return value
A boolean indicating whether or not the two arguments are the same value.

Description
Object.is() determines whether two values are the same value. Two values are the same if one of the following holds:

  both undefined
  both null
  both true or both false
  both strings of the same length with the same characters in the same order
  both the same object (meaning both values reference the same object in memory)
  both BigInts with the same numeric value
  both symbols that reference the same symbol value
  both numbers and
    both +0
    both -0
    both NaN
    or both non-zero, not NaN, and have the same value
    
Object.is() is not equivalent to the == operator. The == operator applies various coercions to both sides (if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is() doesn't coerce either value.

Object.is() is also not equivalent to the === operator. The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.
*/
