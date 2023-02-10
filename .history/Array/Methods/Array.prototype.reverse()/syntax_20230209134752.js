reverse()

/*
Return value
The reference to the original array, now reversed. Note that the array is reversed in place, and no copy is made.

Description
The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

The reverse() method preserves empty slots. If the source array is sparse, the empty slots' corresponding new indices are deleted and also become empty slots.

The reverse() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.
*/
