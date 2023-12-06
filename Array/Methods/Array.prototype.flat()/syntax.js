flat()
flat(depth)

/*
Parameters
depth Optional
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Return value
A new array with the sub-array elements concatenated into it.

Description
The flat() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array.

The flat() method ignores empty slots if the array being flattened is sparse. For example, if depth is 1, both empty slots in the root array and in the first level of nested arrays are ignored, but empty slots in further nested arrays are preserved with the arrays themselves.

The flat() method is generic. It only expects the this value to have a length property and integer-keyed properties. However, its elements must be arrays if they are to be flattened.
*/
