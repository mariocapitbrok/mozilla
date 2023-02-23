/*
Description
Object.defineProperty() allows a precise addition to or modification of a property on an object. Normal property addition through assignment creates properties which show up during property enumeration (for...in, Object.keys(), etc.), whose values may be changed and which may be deleted. This method allows these extra details to be changed from their defaults. By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable. In addition, Object.defineProperty() uses the [[DefineOwnProperty]] internal method, instead of [[Set]], so it does not invoke setters, even when the property is already present.

Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors. A data descriptor is a property with a value that may or may not be writable. An accessor descriptor is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

Both data and accessor descriptors are objects. They share the following optional keys (please note: the defaults mentioned here are in the case of defining properties using Object.defineProperty()):

configurable
  when this is set to false,
    * the type of this property cannot be changed between data property and accessor property, and
    * the property may not be deleted, and
    * other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, the value can be changed, and writable can be changed to false).

  Defaults to false.

enumerable
  true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

A data descriptor also has the following optional keys:

  value
    The value associated with the property. Can be any valid JavaScript value (number, object, function, etc.). Defaults to undefined.

  writable
    true if the value associated with the property may be changed with an assignment operator. Defaults to false.

  An accessor descriptor also has the following optional keys:

  get
    A function which serves as a getter for the property, or undefined if there is no getter. When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property. Defaults to undefined.

  set
    A function which serves as a setter for the property, or undefined if there is no setter. When the property is assigned, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned. Defaults to undefined.

If a descriptor doesn't have any of the value, writable, get, and set keys, it is treated as a data descriptor. If a descriptor has both [value or writable] and [get or set] keys, an exception is thrown.
*/

// These attributes are not necessarily the descriptor's own properties. Inherited properties will be considered as well. In order to ensure these defaults are preserved, you might freeze existing objects in the descriptor object's prototype chain upfront, specify all options explicitly, or point to null with Object.create(null).

const obj = {}
// 1. Using a null prototype: no inherited properties
const descriptor = Object.create(null)
descriptor.value = 'static'

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, 'key', descriptor)

// 2. Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, 'key2', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static',
})

// 3. Recycling same object
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    })

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value

  return d
}
// and
Object.defineProperty(obj, 'key', withValue('static'))

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
;(Object.freeze || Object)(Object.prototype)

/*
When the property already exists, Object.defineProperty() attempts to modify the property according to the values in the descriptor and the property's current configuration.

If the old descriptor had its configurable attribute set to false, the property is said to be non-configurable. It is not possible to change any attribute of a non-configurable accessor property, and it is not possible to switch between data and accessor property types. For data properties with writable: true, it is possible to modify the value and change the writable attribute from true to false. A TypeError is thrown when attempts are made to change non-configurable property attributes (except value and writable, if permitted), except when defining a value same as the original value on a data property.

When the current property is configurable, defining an attribute to undefined effectively deletes it. For example, if o.k is an accessor property, Object.defineProperty(o, "k", { set: undefined }) will remove the setter, making k only have a getter and become readonly. If an attribute is absent from the new descriptor, the old descriptor attribute's value is kept (it won't be implicitly re-defined to undefined). It is possible to toggle between data and accessor property by giving a descriptor of a different "flavor". For example, if the new descriptor is a data descriptor (with value or writable), the original descriptor's get and set attributes will both be dropped.
*/
