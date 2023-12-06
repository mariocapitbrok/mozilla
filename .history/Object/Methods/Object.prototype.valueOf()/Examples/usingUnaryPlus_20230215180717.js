/*
Using unary plus on objects
Unary plus performs number coercion on its operand, which, for most objects without @@toPrimitive, means calling its valueOf(). However, if the object doesn't have a custom valueOf() method, the base implementation will cause valueOf() to be ignored and the return value of toString() to be used instead.
*/

;+new Date() // the current timestamp; same as new Date().getTime()
;+{} // NaN (toString() returns "[object Object]")
;+[] // 0 (toString() returns an empty string list)
;+[1] // 1 (toString() returns "1")
;+[1, 2] // NaN (toString() returns "1,2")
;+new Set([1]) // NaN (toString() returns "[object Set]")
;+{ valueOf: () => 42 } // 42
