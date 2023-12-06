toLocaleString()

/*
Parameters
  None. However, all objects that override this method are expected to accept at most two parameters, corresponding to locales and options, such as Date.prototype.toLocaleString. The parameter positions should not be used for any other purpose.

Return value
  The return value of calling this.toString().

Description
All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the toLocaleString() method. Object's toLocaleString returns the result of calling this.toString().

This function is provided to give objects a generic toLocaleString method, even though not all may use it. In the core language, these built-in objects override toLocaleString to provide locale-specific formatting:

  Array: Array.prototype.toLocaleString()
  Number: Number.prototype.toLocaleString()
  Date: Date.prototype.toLocaleString()
  TypedArray: TypedArray.prototype.toLocaleString()
  BigInt: BigInt.prototype.toLocaleString()
*/
