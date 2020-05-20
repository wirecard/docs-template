/* Polyfill service v3.52.1
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 * 
 * Features requested: Array.from,Array.isArray,Array.of,Array.prototype.@@iterator,Array.prototype.copyWithin,Array.prototype.entries,Array.prototype.every,Array.prototype.fill,Array.prototype.filter,Array.prototype.find,Array.prototype.findIndex,Array.prototype.flat,Array.prototype.flatMap,Array.prototype.forEach,Array.prototype.includes,Array.prototype.indexOf,Array.prototype.keys,Array.prototype.lastIndexOf,Array.prototype.map,Array.prototype.reduce,Array.prototype.reduceRight,Array.prototype.some,Array.prototype.values,ArrayBuffer,Date.now,Date.prototype.toISOString,Element,Element.prototype.after,Element.prototype.append,Element.prototype.before,Element.prototype.classList,Element.prototype.cloneNode,Element.prototype.closest,Element.prototype.dataset,Element.prototype.inert,Element.prototype.matches,Element.prototype.nextElementSibling,Element.prototype.placeholder,Element.prototype.prepend,Element.prototype.previousElementSibling,Element.prototype.remove,Element.prototype.replaceWith,Element.prototype.scroll,Element.prototype.scrollBy,Element.prototype.scrollIntoView,Element.prototype.toggleAttribute,Function.prototype.bind,Function.prototype.name,JSON,Navigator.prototype.geolocation,Node.prototype.contains,NodeList.prototype.@@iterator,NodeList.prototype.forEach,Number.isFinite,Number.isInteger,Number.isNaN,Number.isSafeInteger,Number.parseFloat,Number.parseInt,Object.assign,Object.create,Object.defineProperties,Object.defineProperty,Object.entries,Object.freeze,Object.fromEntries,Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getPrototypeOf,Object.is,Object.isExtensible,Object.isFrozen,Object.isSealed,Object.keys,Object.preventExtensions,Object.seal,Object.setPrototypeOf,Object.values,Promise,Promise.prototype.finally,String.prototype.@@iterator,String.prototype.anchor,String.prototype.big,String.prototype.blink,String.prototype.bold,String.prototype.codePointAt,String.prototype.endsWith,String.prototype.fixed,String.prototype.fontcolor,String.prototype.fontsize,String.prototype.includes,String.prototype.italics,String.prototype.link,String.prototype.normalize,String.prototype.padEnd,String.prototype.padStart,String.prototype.repeat,String.prototype.small,String.prototype.startsWith,String.prototype.strike,String.prototype.sub,String.prototype.sup,String.prototype.trim,String.prototype.trimEnd,String.prototype.trimStart,String.raw,URL,URLSearchParams,document.querySelector,fetch,innerHeight,innerWidth,location.origin,pageXOffset,pageYOffset,requestAnimationFrame,requestIdleCallback,screen.orientation,scroll,scrollBy,scrollIntoView,scrollX,scrollY,smoothscroll,viewport,window.scroll,window.scrollBy
 * 
 * - _ESAbstract.ArrayCreate, License: CC0 (required by "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap", "Array.prototype.map")
 * - _ESAbstract.Call, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "WeakMap", "_ESAbstract.GetIterator", "Map", "Set", "_ESAbstract.IteratorClose", "_ESAbstract.IteratorNext", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "Array.prototype.filter", "Symbol", "Array.prototype.map", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.CreateDataProperty, License: CC0 (required by "_ESAbstract.CreateIterResultObject", "Map", "Element.prototype.inert", "Set", "_ESAbstract.CreateDataPropertyOrThrow", "Array.prototype.filter", "Symbol", "WeakMap", "Array.prototype.map")
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "Array.prototype.filter", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap", "Array.prototype.map")
 * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "Function.prototype.bind", "Map", "Set", "WeakMap", "Array.isArray", "Object.create", "_ESAbstract.GetIterator", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol", "Object.isExtensible", "Object.getPrototypeOf", "Array.prototype.filter", "Array.prototype.map", "Object.getOwnPropertyNames", "Object.getOwnPropertyDescriptor", "Object.freeze", "Object.keys", "Object.defineProperties", "Array.prototype.includes", "Array.prototype.indexOf")
 * - _ESAbstract.Get, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "WeakMap", "_ESAbstract.IteratorComplete", "Map", "Set", "_ESAbstract.IteratorValue", "_ESAbstract.GetPrototypeFromConstructor", "_ESAbstract.OrdinaryCreateFromConstructor", "Array.prototype.filter", "Symbol", "Array.prototype.map", "Object.defineProperties", "Object.create", "_ESAbstract.GetIterator", "_ESAbstract.OrdinaryToPrimitive", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.includes", "Object.getOwnPropertyNames", "Array.prototype.indexOf")
 * - _ESAbstract.HasOwnProperty, License: CC0 (required by "Object.getOwnPropertyDescriptor", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _ESAbstract.HasProperty, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map", "Array.prototype.indexOf", "Object.getOwnPropertyNames")
 * - _ESAbstract.IsArray, License: CC0 (required by "WeakMap", "Element.prototype.inert", "Array.isArray", "Map", "Set", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Array.prototype.map")
 * - _ESAbstract.IsCallable, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "Function.prototype.bind", "Map", "Set", "WeakMap", "_ESAbstract.GetMethod", "Array.prototype.filter", "Symbol", "Array.prototype.map", "_ESAbstract.OrdinaryToPrimitive", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString")
 * - _ESAbstract.SameValueNonNumber, License: CC0 (required by "_ESAbstract.SameValueZero", "Map", "Element.prototype.inert", "Set", "_ESAbstract.SameValue", "WeakMap")
 * - _ESAbstract.ToBoolean, License: CC0 (required by "_ESAbstract.IteratorComplete", "Map", "Element.prototype.inert", "Set", "Array.prototype.filter", "Symbol", "WeakMap")
 * - _ESAbstract.ToInteger, License: CC0 (required by "_ESAbstract.ToLength", "Array.prototype.forEach", "Element.prototype.inert", "Array.prototype.includes", "Object.getOwnPropertyNames", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.indexOf")
 * - _ESAbstract.ToLength, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map", "Array.prototype.includes", "Object.getOwnPropertyNames", "Array.prototype.indexOf")
 * - _ESAbstract.ToObject, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "_ESAbstract.GetV", "_ESAbstract.GetMethod", "Map", "Set", "_ESAbstract.GetIterator", "WeakMap", "Array.prototype.filter", "Symbol", "Array.prototype.map", "Object.getOwnPropertyNames", "Object.getOwnPropertyDescriptor", "Object.defineProperties", "Object.create", "_ESAbstract.OrdinaryCreateFromConstructor", "Array.prototype.includes", "Array.prototype.indexOf")
 * - _ESAbstract.GetV, License: CC0 (required by "_ESAbstract.GetMethod", "Map", "Element.prototype.inert", "Set", "_ESAbstract.GetIterator", "WeakMap")
 * - _ESAbstract.GetMethod, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "_ESAbstract.GetIterator", "WeakMap", "_ESAbstract.IteratorClose", "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "Array.prototype.forEach", "_ESAbstract.IsConstructor", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Array.prototype.map")
 * - _ESAbstract.Type, License: CC0 (required by "Map", "Element.prototype.inert", "WeakMap", "_ESAbstract.ToString", "Array.prototype.forEach", "_ESAbstract.CreateIterResultObject", "Set", "_ESAbstract.GetIterator", "_ESAbstract.IteratorClose", "_ESAbstract.IteratorComplete", "_ESAbstract.IteratorNext", "_ESAbstract.IteratorValue", "_ESAbstract.SameValueZero", "Object.create", "_ESAbstract.OrdinaryCreateFromConstructor", "Symbol", "Object.isExtensible", "_ESAbstract.SameValue", "_ESAbstract.ToPrimitive", "_ESAbstract.GetPrototypeFromConstructor", "Object.getOwnPropertyDescriptor", "Object.defineProperties", "_ESAbstract.OrdinaryToPrimitive", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Array.prototype.map", "_ESAbstract.ToPropertyKey", "_ESAbstract.IsConstructor")
 * - _ESAbstract.CreateIterResultObject, License: CC0 (required by "Map", "Element.prototype.inert", "Set")
 * - _ESAbstract.GetIterator, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _ESAbstract.GetPrototypeFromConstructor, License: CC0 (required by "_ESAbstract.OrdinaryCreateFromConstructor", "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "WeakMap", "_ESAbstract.Construct", "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Array.prototype.map")
 * - _ESAbstract.IsConstructor, License: CC0 (required by "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap", "Array.prototype.map", "_ESAbstract.Construct")
 * - _ESAbstract.Construct, License: CC0 (required by "_ESAbstract.ArraySpeciesCreate", "Array.prototype.filter", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap", "Array.prototype.map")
 * - _ESAbstract.ArraySpeciesCreate, License: CC0 (required by "Array.prototype.filter", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap", "Array.prototype.map")
 * - _ESAbstract.IteratorClose, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _ESAbstract.IteratorComplete, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "_ESAbstract.IteratorStep", "WeakMap")
 * - _ESAbstract.IteratorNext, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "_ESAbstract.IteratorStep", "WeakMap")
 * - _ESAbstract.IteratorStep, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _ESAbstract.IteratorValue, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "_ESAbstract.ToPrimitive", "_ESAbstract.ToString", "Array.prototype.forEach", "Element.prototype.inert")
 * - _ESAbstract.SameValue, License: CC0 (required by "WeakMap", "Element.prototype.inert")
 * - _ESAbstract.SameValueZero, License: CC0 (required by "Map", "Element.prototype.inert", "Set", "Array.prototype.includes", "Object.getOwnPropertyNames", "Symbol", "WeakMap")
 * - _ESAbstract.ToPrimitive, License: CC0 (required by "_ESAbstract.ToString", "Array.prototype.forEach", "Element.prototype.inert", "_ESAbstract.ToPropertyKey", "Object.getOwnPropertyDescriptor", "Symbol", "Map", "Set", "WeakMap")
 * - _ESAbstract.ToString, License: CC0 (required by "Array.prototype.forEach", "Element.prototype.inert", "Array.prototype.filter", "Symbol", "Map", "Set", "WeakMap", "Array.prototype.map", "Array.prototype.includes", "Object.getOwnPropertyNames", "Array.prototype.indexOf", "_ESAbstract.ToPropertyKey", "Object.getOwnPropertyDescriptor")
 * - _ESAbstract.ToPropertyKey, License: CC0 (required by "Object.getOwnPropertyDescriptor", "Symbol", "Map", "Element.prototype.inert", "Set", "WeakMap")
 * - _TypedArray, License: MIT (required by "ArrayBuffer")
 * - Element.prototype.inert, License: W3C */

(function(self, undefined) {

  // _ESAbstract.ArrayCreate
  // 9.4.2.2. ArrayCreate ( length [ , proto ] )
  function ArrayCreate(length /* [, proto] */) { // eslint-disable-line no-unused-vars
    // 1. Assert: length is an integer Number ≥ 0.
    // 2. If length is -0, set length to +0.
    if (1 / length === -Infinity) {
      length = 0;
    }
    // 3. If length>2^32-1, throw a RangeError exception.
    if (length > (Math.pow(2, 32) - 1)) {
      throw new RangeError('Invalid array length');
    }
    // 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
    // 5. Let A be a newly created Array exotic object.
    var A = [];
    // 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
    // 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
    // 8. Set A.[[Prototype]] to proto.
    // 9. Set A.[[Extensible]] to true.
    // 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
    A.length = length;
    // 11. Return A.
    return A;
  }
  
  // _ESAbstract.Call
  /* global IsCallable */
  // 7.3.12. Call ( F, V [ , argumentsList ] )
  function Call(F, V /* [, argumentsList] */) { // eslint-disable-line no-unused-vars
    // 1. If argumentsList is not present, set argumentsList to a new empty List.
    var argumentsList = arguments.length > 2 ? arguments[2] : [];
    // 2. If IsCallable(F) is false, throw a TypeError exception.
    if (IsCallable(F) === false) {
      throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
    }
    // 3. Return ? F.[[Call]](V, argumentsList).
    return F.apply(V, argumentsList);
  }
  
  // _ESAbstract.CreateDataProperty
  // 7.3.4. CreateDataProperty ( O, P, V )
  // NOTE
  // This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
  // Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
  function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
    var newDesc = {
      value: V,
      writable: true,
      enumerable: true,
      configurable: true
    };
    // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
    try {
      Object.defineProperty(O, P, newDesc);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // _ESAbstract.CreateDataPropertyOrThrow
  /* global CreateDataProperty */
  // 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
  function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let success be ? CreateDataProperty(O, P, V).
    var success = CreateDataProperty(O, P, V);
    // 4. If success is false, throw a TypeError exception.
    if (!success) {
      throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
    }
    // 5. Return success.
    return success;
  }
  
  // _ESAbstract.CreateMethodProperty
  // 7.3.5. CreateMethodProperty ( O, P, V )
  function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
    var newDesc = {
      value: V,
      writable: true,
      enumerable: false,
      configurable: true
    };
    // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
    Object.defineProperty(O, P, newDesc);
  }
  
  // _ESAbstract.Get
  // 7.3.1. Get ( O, P )
  function Get(O, P) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Return ? O.[[Get]](P, O).
    return O[P];
  }
  
  // _ESAbstract.HasOwnProperty
  // 7.3.11 HasOwnProperty (O, P)
  function HasOwnProperty(o, p) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let desc be ? O.[[GetOwnProperty]](P).
    // 4. If desc is undefined, return false.
    // 5. Return true.
    // Polyfill.io - As we expect user agents to support ES3 fully we can skip the above steps and use Object.prototype.hasOwnProperty to do them for us.
    return Object.prototype.hasOwnProperty.call(o, p);
  }
  
  // _ESAbstract.HasProperty
  // 7.3.10. HasProperty ( O, P )
  function HasProperty(O, P) { // eslint-disable-line no-unused-vars
    // Assert: Type(O) is Object.
    // Assert: IsPropertyKey(P) is true.
    // Return ? O.[[HasProperty]](P).
    return P in O;
  }
  
  // _ESAbstract.IsArray
  // 7.2.2. IsArray ( argument )
  function IsArray(argument) { // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    // 2. If argument is an Array exotic object, return true.
    // 3. If argument is a Proxy exotic object, then
      // a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
      // b. Let target be argument.[[ProxyTarget]].
      // c. Return ? IsArray(target).
    // 4. Return false.
  
    // Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
    return Object.prototype.toString.call(argument) === '[object Array]';
  }
  
  // _ESAbstract.IsCallable
  // 7.2.3. IsCallable ( argument )
  function IsCallable(argument) { // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    // 2. If argument has a [[Call]] internal method, return true.
    // 3. Return false.
  
    // Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
    return typeof argument === 'function';
  }
  
  // _ESAbstract.SameValueNonNumber
  // 7.2.12. SameValueNonNumber ( x, y )
  function SameValueNonNumber(x, y) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(x) is not Number.
    // 2. Assert: Type(x) is the same as Type(y).
    // 3. If Type(x) is Undefined, return true.
    // 4. If Type(x) is Null, return true.
    // 5. If Type(x) is String, then
      // a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
    // 6. If Type(x) is Boolean, then
      // a. If x and y are both true or both false, return true; otherwise, return false.
    // 7. If Type(x) is Symbol, then
      // a. If x and y are both the same Symbol value, return true; otherwise, return false.
    // 8. If x and y are the same Object value, return true. Otherwise, return false.
  
    // Polyfill.io - We can skip all above steps because the === operator does it all for us.
    return x === y;
  }
  
  // _ESAbstract.ToBoolean
  // 7.1.2. ToBoolean ( argument )
  // The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
  /*
  --------------------------------------------------------------------------------------------------------------
  | Argument Type | Result                                                                                     |
  --------------------------------------------------------------------------------------------------------------
  | Undefined     | Return false.                                                                              |
  | Null          | Return false.                                                                              |
  | Boolean       | Return argument.                                                                           |
  | Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
  | String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
  | Symbol        | Return true.                                                                               |
  | Object        | Return true.                                                                               |
  --------------------------------------------------------------------------------------------------------------
  */
  function ToBoolean(argument) { // eslint-disable-line no-unused-vars
    return Boolean(argument);
  }
  
  // _ESAbstract.ToInteger
  // 7.1.4. ToInteger ( argument )
  function ToInteger(argument) { // eslint-disable-line no-unused-vars
    // 1. Let number be ? ToNumber(argument).
    var number = Number(argument);
    // 2. If number is NaN, return +0.
    if (isNaN(number)) {
      return 0;
    }
    // 3. If number is +0, -0, +∞, or -∞, return number.
    if (1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
      return number;
    }
    // 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
    return ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
  }
  
  // _ESAbstract.ToLength
  /* global ToInteger */
  // 7.1.15. ToLength ( argument )
  function ToLength(argument) { // eslint-disable-line no-unused-vars
    // 1. Let len be ? ToInteger(argument).
    var len = ToInteger(argument);
    // 2. If len ≤ +0, return +0.
    if (len <= 0) {
      return 0;
    }
    // 3. Return min(len, 253-1).
    return Math.min(len, Math.pow(2, 53) -1);
  }
  
  // _ESAbstract.ToObject
  // 7.1.13 ToObject ( argument )
  // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
  // Table 12: ToObject Conversions
  /*
  |----------------------------------------------------------------------------------------------------------------------------------------------------|
  | Argument Type | Result                                                                                                                             |
  |----------------------------------------------------------------------------------------------------------------------------------------------------|
  | Undefined     | Throw a TypeError exception.                                                                                                       |
  | Null          | Throw a TypeError exception.                                                                                                       |
  | Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
  | Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
  | String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
  | Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
  | Object        | Return argument.                                                                                                                   |
  |----------------------------------------------------------------------------------------------------------------------------------------------------|
  */
  function ToObject(argument) { // eslint-disable-line no-unused-vars
    if (argument === null || argument === undefined) {
      throw TypeError();
    }
    return Object(argument);
  }
  
  // _ESAbstract.GetV
  /* global ToObject */
  // 7.3.2 GetV (V, P)
  function GetV(v, p) { // eslint-disable-line no-unused-vars
    // 1. Assert: IsPropertyKey(P) is true.
    // 2. Let O be ? ToObject(V).
    var o = ToObject(v);
    // 3. Return ? O.[[Get]](P, V).
    return o[p];
  }
  
  // _ESAbstract.GetMethod
  /* global GetV, IsCallable */
  // 7.3.9. GetMethod ( V, P )
  function GetMethod(V, P) { // eslint-disable-line no-unused-vars
    // 1. Assert: IsPropertyKey(P) is true.
    // 2. Let func be ? GetV(V, P).
    var func = GetV(V, P);
    // 3. If func is either undefined or null, return undefined.
    if (func === null || func === undefined) {
      return undefined;
    }
    // 4. If IsCallable(func) is false, throw a TypeError exception.
    if (IsCallable(func) === false) {
      throw new TypeError('Method not callable: ' + P);
    }
    // 5. Return func.
    return func;
  }
  
  // _ESAbstract.Type
  // "Type(x)" is used as shorthand for "the type of x"...
  function Type(x) { // eslint-disable-line no-unused-vars
    switch (typeof x) {
      case 'undefined':
        return 'undefined';
      case 'boolean':
        return 'boolean';
      case 'number':
        return 'number';
      case 'string':
        return 'string';
      case 'symbol':
        return 'symbol';
      default:
        // typeof null is 'object'
        if (x === null) return 'null';
        // Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
        if ('Symbol' in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) return 'symbol';
        return 'object';
    }
  }
  
  // _ESAbstract.CreateIterResultObject
  /* global Type, CreateDataProperty */
  // 7.4.7. CreateIterResultObject ( value, done )
  function CreateIterResultObject(value, done) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(done) is Boolean.
    if (Type(done) !== 'boolean') {
      throw new Error();
    }
    // 2. Let obj be ObjectCreate(%ObjectPrototype%).
    var obj = {};
    // 3. Perform CreateDataProperty(obj, "value", value).
    CreateDataProperty(obj, "value", value);
    // 4. Perform CreateDataProperty(obj, "done", done).
    CreateDataProperty(obj, "done", done);
    // 5. Return obj.
    return obj;
  }
  
  // _ESAbstract.GetIterator
  /* global GetMethod, Symbol, Call, Type, GetV */
  // 7.4.1. GetIterator ( obj [ , method ] )
  // The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
  function GetIterator(obj /*, method */) { // eslint-disable-line no-unused-vars
    // 1. If method is not present, then
      // a. Set method to ? GetMethod(obj, @@iterator).
    var method = arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
    // 2. Let iterator be ? Call(method, obj).
    var iterator = Call(method, obj);
    // 3. If Type(iterator) is not Object, throw a TypeError exception.
    if (Type(iterator) !== 'object') {
      throw new TypeError('bad iterator');
    }
    // 4. Let nextMethod be ? GetV(iterator, "next").
    var nextMethod = GetV(iterator, "next");
    // 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
    var iteratorRecord = Object.create(null);
    iteratorRecord['[[Iterator]]'] = iterator;
    iteratorRecord['[[NextMethod]]'] = nextMethod;
    iteratorRecord['[[Done]]'] = false;
    // 6. Return iteratorRecord.
    return iteratorRecord;
  }
  
  // _ESAbstract.GetPrototypeFromConstructor
  /* global Get, Type */
  // 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
  function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
    // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
    // 2. Assert: IsCallable(constructor) is true.
    // 3. Let proto be ? Get(constructor, "prototype").
    var proto = Get(constructor, "prototype");
    // 4. If Type(proto) is not Object, then
    if (Type(proto) !== 'object') {
      // a. Let realm be ? GetFunctionRealm(constructor).
      // b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
      proto = intrinsicDefaultProto;
    }
    // 5. Return proto.
    return proto;
  }
  
  // _ESAbstract.OrdinaryCreateFromConstructor
  /* global GetPrototypeFromConstructor */
  // 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
  function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
    var internalSlotsList = arguments[2] || {};
    // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
    // The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.
  
    // 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
    var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);
  
    // 3. Return ObjectCreate(proto, internalSlotsList).
    // Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
    var obj = Object.create(proto);
    for (var name in internalSlotsList) {
      if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
        Object.defineProperty(obj, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: internalSlotsList[name]
        });
      }
    }
    return obj;
  }
  
  // _ESAbstract.IsConstructor
  /* global Type */
  // 7.2.4. IsConstructor ( argument )
  function IsConstructor(argument) { // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    if (Type(argument) !== 'object') {
      return false;
    }
    // 2. If argument has a [[Construct]] internal method, return true.
    // 3. Return false.
  
    // Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
    // We choose to not use`new argument` because the argument could have side effects when called.
    // Instead we check to see if the argument is a function and if it has a prototype.
    // Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
    return typeof argument === 'function' && !!argument.prototype;
  }
  
  // _ESAbstract.Construct
  /* global IsConstructor, OrdinaryCreateFromConstructor, Call */
  // 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
  function Construct(F /* [ , argumentsList [ , newTarget ]] */) { // eslint-disable-line no-unused-vars
    // 1. If newTarget is not present, set newTarget to F.
    var newTarget = arguments.length > 2 ? arguments[2] : F;
  
    // 2. If argumentsList is not present, set argumentsList to a new empty List.
    var argumentsList = arguments.length > 1 ? arguments[1] : [];
  
    // 3. Assert: IsConstructor(F) is true.
    if (!IsConstructor(F)) {
      throw new TypeError('F must be a constructor.');
    }
  
    // 4. Assert: IsConstructor(newTarget) is true.
    if (!IsConstructor(newTarget)) {
      throw new TypeError('newTarget must be a constructor.');
    }
  
    // 5. Return ? F.[[Construct]](argumentsList, newTarget).
    // Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
    if (newTarget === F) {
      return new (Function.prototype.bind.apply(F, [null].concat(argumentsList)))();
    } else {
      // Polyfill.io - This is mimicking section 9.2.2 step 5.a.
      var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
      return Call(F, obj, argumentsList);
    }
  }
  
  // _ESAbstract.ArraySpeciesCreate
  /* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
  // 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
  function ArraySpeciesCreate(originalArray, length) { // eslint-disable-line no-unused-vars
    // 1. Assert: length is an integer Number ≥ 0.
    // 2. If length is -0, set length to +0.
    if (length === 0 && 1/length === -Infinity) {
      length = 0;
    }
  
    // 3. Let isArray be ? IsArray(originalArray).
    var isArray = IsArray(originalArray);
  
    // 4. If isArray is false, return ? ArrayCreate(length).
    if (isArray === false) {
      return ArrayCreate(length);
    }
  
    // 5. Let C be ? Get(originalArray, "constructor").
    var C = Get(originalArray, 'constructor');
  
    // Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
    // 6. If IsConstructor(C) is true, then
    // if (IsConstructor(C)) {
      // a. Let thisRealm be the current Realm Record.
      // b. Let realmC be ? GetFunctionRealm(C).
      // c. If thisRealm and realmC are not the same Realm Record, then
        // i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
    // }
    // 7. If Type(C) is Object, then
    if (Type(C) === 'object') {
      // a. Set C to ? Get(C, @@species).
      C = 'Symbol' in self && 'species' in self.Symbol ? Get(C, self.Symbol.species) : undefined;
      // b. If C is null, set C to undefined.
      if (C === null) {
        C = undefined;
      }
    }
    // 8. If C is undefined, return ? ArrayCreate(length).
    if (C === undefined) {
      return ArrayCreate(length);
    }
    // 9. If IsConstructor(C) is false, throw a TypeError exception.
    if (!IsConstructor(C)) {
      throw new TypeError('C must be a constructor');
    }
    // 10. Return ? Construct(C, « length »).
    return Construct(C, [length]);
  }
  
  // _ESAbstract.IteratorClose
  /* global GetMethod, Type, Call */
  // 7.4.6. IteratorClose ( iteratorRecord, completion )
  function IteratorClose(iteratorRecord, completion) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
    if (Type(iteratorRecord['[[Iterator]]']) !== 'object') {
      throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
    }
    // 2. Assert: completion is a Completion Record.
    // Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.
  
    // 3. Let iterator be iteratorRecord.[[Iterator]].
    var iterator = iteratorRecord['[[Iterator]]'];
    // 4. Let return be ? GetMethod(iterator, "return").
    // Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
    var returnMethod = GetMethod(iterator, "return");
    // 5. If return is undefined, return Completion(completion).
    if (returnMethod === undefined) {
      return completion;
    }
    // 6. Let innerResult be Call(return, iterator, « »).
    try {
      var innerResult = Call(returnMethod, iterator);
    } catch (error) {
      var innerException = error;
    }
    // 7. If completion.[[Type]] is throw, return Completion(completion).
    if (completion) {
      return completion;
    }
    // 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
    if (innerException) {
      throw innerException;
    }
    // 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
    if (Type(innerResult) !== 'object') {
      throw new TypeError("Iterator's return method returned a non-object.");
    }
    // 10. Return Completion(completion).
    return completion;
  }
  
  // _ESAbstract.IteratorComplete
  /* global Type, ToBoolean, Get */
  // 7.4.3 IteratorComplete ( iterResult )
  function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(iterResult) is Object.
    if (Type(iterResult) !== 'object') {
      throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
    }
    // 2. Return ToBoolean(? Get(iterResult, "done")).
    return ToBoolean(Get(iterResult, "done"));
  }
  
  // _ESAbstract.IteratorNext
  /* global Call, Type */
  // 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
  function IteratorNext(iteratorRecord /* [, value] */) { // eslint-disable-line no-unused-vars
    // 1. If value is not present, then
    if (arguments.length < 2) {
      // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
      var result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']);
    // 2. Else,
    } else {
      // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
      result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]);
    }
    // 3. If Type(result) is not Object, throw a TypeError exception.
    if (Type(result) !== 'object') {
      throw new TypeError('bad iterator');
    }
    // 4. Return result.
    return result;
  }
  
  // _ESAbstract.IteratorStep
  /* global IteratorNext, IteratorComplete */
  // 7.4.5. IteratorStep ( iteratorRecord )
  function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
    // 1. Let result be ? IteratorNext(iteratorRecord).
    var result = IteratorNext(iteratorRecord);
    // 2. Let done be ? IteratorComplete(result).
    var done = IteratorComplete(result);
    // 3. If done is true, return false.
    if (done === true) {
      return false;
    }
    // 4. Return result.
    return result;
  }
  
  // _ESAbstract.IteratorValue
  /* global Type, Get */
  // 7.4.4 IteratorValue ( iterResult )
  function IteratorValue(iterResult) { // eslint-disable-line no-unused-vars
    // Assert: Type(iterResult) is Object.
    if (Type(iterResult) !== 'object') {
      throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
    }
    // Return ? Get(iterResult, "value").
    return Get(iterResult, "value");
  }
  
  // _ESAbstract.OrdinaryToPrimitive
  /* global Get, IsCallable, Call, Type */
  // 7.1.1.1. OrdinaryToPrimitive ( O, hint )
  function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: Type(hint) is String and its value is either "string" or "number".
    // 3. If hint is "string", then
    if (hint === 'string') {
      // a. Let methodNames be « "toString", "valueOf" ».
      var methodNames = ['toString', 'valueOf'];
      // 4. Else,
    } else {
      // a. Let methodNames be « "valueOf", "toString" ».
      methodNames = ['valueOf', 'toString'];
    }
    // 5. For each name in methodNames in List order, do
    for (var i = 0; i < methodNames.length; ++i) {
      var name = methodNames[i];
      // a. Let method be ? Get(O, name).
      var method = Get(O, name);
      // b. If IsCallable(method) is true, then
      if (IsCallable(method)) {
        // i. Let result be ? Call(method, O).
        var result = Call(method, O);
        // ii. If Type(result) is not Object, return result.
        if (Type(result) !== 'object') {
          return result;
        }
      }
    }
    // 6. Throw a TypeError exception.
    throw new TypeError('Cannot convert to primitive.');
  }
  
  // _ESAbstract.SameValue
  /* global Type, SameValueNonNumber */
  // 7.2.10. SameValue ( x, y )
  function SameValue(x, y) { // eslint-disable-line no-unused-vars
    // 1. If Type(x) is different from Type(y), return false.
    if (Type(x) !== Type(y)) {
      return false;
    }
    // 2. If Type(x) is Number, then
    if (Type(x) === 'number') {
      // a. If x is NaN and y is NaN, return true.
      if (isNaN(x) && isNaN(y)) {
        return true;
      }
      // Polyfill.io - 0 === -0 is true, but they are not the same value.
      // b. If x is +0 and y is -0, return false.
      // c. If x is -0 and y is +0, return false.
      if (x === 0 && y === 0 && 1/x !== 1/y) {
        return false;
      }
      // d. If x is the same Number value as y, return true.
      if (x === y) {
        return true;
      }
      // e. Return false.
      return false;
    }
    // 3. Return SameValueNonNumber(x, y).
    return SameValueNonNumber(x, y);
  }
  
  // _ESAbstract.SameValueZero
  /* global Type, SameValueNonNumber */
  // 7.2.11. SameValueZero ( x, y )
  function SameValueZero (x, y) { // eslint-disable-line no-unused-vars
    // 1. If Type(x) is different from Type(y), return false.
    if (Type(x) !== Type(y)) {
      return false;
    }
    // 2. If Type(x) is Number, then
    if (Type(x) === 'number') {
      // a. If x is NaN and y is NaN, return true.
      if (isNaN(x) && isNaN(y)) {
        return true;
      }
      // b. If x is +0 and y is -0, return true.
      if (1/x === Infinity && 1/y === -Infinity) {
        return true;
      }
      // c. If x is -0 and y is +0, return true.
      if (1/x === -Infinity && 1/y === Infinity) {
        return true;
      }
      // d. If x is the same Number value as y, return true.
      if (x === y) {
        return true;
      }
      // e. Return false.
      return false;
    }
    // 3. Return SameValueNonNumber(x, y).
    return SameValueNonNumber(x, y);
  }
  
  // _ESAbstract.ToPrimitive
  /* global Type, GetMethod, Call, OrdinaryToPrimitive */
  // 7.1.1. ToPrimitive ( input [ , PreferredType ] )
  function ToPrimitive(input /* [, PreferredType] */) { // eslint-disable-line no-unused-vars
    var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
    // 1. Assert: input is an ECMAScript language value.
    // 2. If Type(input) is Object, then
    if (Type(input) === 'object') {
      // a. If PreferredType is not present, let hint be "default".
      if (arguments.length < 2) {
        var hint = 'default';
        // b. Else if PreferredType is hint String, let hint be "string".
      } else if (PreferredType === String) {
        hint = 'string';
        // c. Else PreferredType is hint Number, let hint be "number".
      } else if (PreferredType === Number) {
        hint = 'number';
      }
      // d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
      var exoticToPrim = typeof self.Symbol === 'function' && typeof self.Symbol.toPrimitive === 'symbol' ? GetMethod(input, self.Symbol.toPrimitive) : undefined;
      // e. If exoticToPrim is not undefined, then
      if (exoticToPrim !== undefined) {
        // i. Let result be ? Call(exoticToPrim, input, « hint »).
        var result = Call(exoticToPrim, input, [hint]);
        // ii. If Type(result) is not Object, return result.
        if (Type(result) !== 'object') {
          return result;
        }
        // iii. Throw a TypeError exception.
        throw new TypeError('Cannot convert exotic object to primitive.');
      }
      // f. If hint is "default", set hint to "number".
      if (hint === 'default') {
        hint = 'number';
      }
      // g. Return ? OrdinaryToPrimitive(input, hint).
      return OrdinaryToPrimitive(input, hint);
    }
    // 3. Return input
    return input;
  }
  // _ESAbstract.ToString
  /* global Type, ToPrimitive */
  // 7.1.12. ToString ( argument )
  // The abstract operation ToString converts argument to a value of type String according to Table 11:
  // Table 11: ToString Conversions
  /*
  |---------------|--------------------------------------------------------|
  | Argument Type | Result                                                 |
  |---------------|--------------------------------------------------------|
  | Undefined     | Return "undefined".                                    |
  |---------------|--------------------------------------------------------|
  | Null	        | Return "null".                                         |
  |---------------|--------------------------------------------------------|
  | Boolean       | If argument is true, return "true".                    |
  |               | If argument is false, return "false".                  |
  |---------------|--------------------------------------------------------|
  | Number        | Return NumberToString(argument).                       |
  |---------------|--------------------------------------------------------|
  | String        | Return argument.                                       |
  |---------------|--------------------------------------------------------|
  | Symbol        | Throw a TypeError exception.                           |
  |---------------|--------------------------------------------------------|
  | Object        | Apply the following steps:                             |
  |               | Let primValue be ? ToPrimitive(argument, hint String). |
  |               | Return ? ToString(primValue).                          |
  |---------------|--------------------------------------------------------|
  */
  function ToString(argument) { // eslint-disable-line no-unused-vars
    switch(Type(argument)) {
      case 'symbol':
        throw new TypeError('Cannot convert a Symbol value to a string');
      case 'object':
        var primValue = ToPrimitive(argument, String);
        return ToString(primValue);
      default:
        return String(argument);
    }
  }
  
  // _ESAbstract.ToPropertyKey
  /* globals ToPrimitive, Type, ToString */
  // 7.1.14. ToPropertyKey ( argument )
  function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
    // 1. Let key be ? ToPrimitive(argument, hint String).
    var key = ToPrimitive(argument, String);
    // 2. If Type(key) is Symbol, then
    if (Type(key) === 'symbol') {
      // a. Return key.
      return key;
    }
    // 3. Return ! ToString(key).
    return ToString(key);
  }
  
  // _TypedArray
  /*
   Copyright (c) 2010, Linden Research, Inc.
   Copyright (c) 2014, Joshua Bell
  
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
  
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
  
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
   $/LicenseInfo$
   */
  
  // Original can be found at:
  //   https://bitbucket.org/lindenlab/llsd
  // Modifications by Joshua Bell inexorabletash@gmail.com
  //   https://github.com/inexorabletash/polyfill
  
  // ES3/ES5 implementation of the Krhonos Typed Array Specification
  //   Ref: http://www.khronos.org/registry/typedarray/specs/latest/
  //   Date: 2011-02-01
  //
  // Variations:
  //  * Allows typed_array.get/set() as alias for subscripts (typed_array[])
  //  * Gradually migrating structure from Khronos spec to ES2015 spec
  //
  // Caveats:
  //  * Beyond 10000 or so entries, polyfilled array accessors (ta[0],
  //    etc) become memory-prohibitive, so array creation will fail. Set
  //    self.TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS=true to disable
  //    creation of accessors. Your code will need to use the
  //    non-standard get()/set() instead, and will need to add those to
  //    native arrays for interop.
  (function(global) {
    'use strict';
    var undefined = (void 0); // Paranoia
  
    // Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
    // create, and consume so much memory, that the browser appears frozen.
    var MAX_ARRAY_LENGTH = 1e5;
  
    // Approximations of internal ECMAScript conversion functions
    function Type(v) {
      switch(typeof v) {
      case 'undefined': return 'undefined';
      case 'boolean': return 'boolean';
      case 'number': return 'number';
      case 'string': return 'string';
      default: return v === null ? 'null' : 'object';
      }
    }
  
    // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
    function Class(v) { return Object.prototype.toString.call(v).replace(/^\[object *|\]$/g, ''); }
    function IsCallable(o) { return typeof o === 'function'; }
    function ToObject(v) {
      if (v === null || v === undefined) throw TypeError();
      return Object(v);
    }
    function ToInt32(v) { return v >> 0; }
    function ToUint32(v) { return v >>> 0; }
  
    // Snapshot intrinsics
    var LN2 = Math.LN2,
        abs = Math.abs,
        floor = Math.floor,
        log = Math.log,
        max = Math.max,
        min = Math.min,
        pow = Math.pow,
        round = Math.round;
  
    // emulate ES5 getter/setter API using legacy APIs
    // http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
    // (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
    // note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)
  
    (function() {
      var orig = Object.defineProperty;
      var dom_only = !(function(){try{return Object.defineProperty({},'x',{});}catch(_){return false;}}());
  
      if (!orig || dom_only) {
        Object.defineProperty = function (o, prop, desc) {
          // In IE8 try built-in implementation for defining properties on DOM prototypes.
          if (orig)
            try { return orig(o, prop, desc); } catch (_) {}
          if (o !== Object(o))
            throw TypeError('Object.defineProperty called on non-object');
          if (Object.prototype.__defineGetter__ && ('get' in desc))
            Object.prototype.__defineGetter__.call(o, prop, desc.get);
          if (Object.prototype.__defineSetter__ && ('set' in desc))
            Object.prototype.__defineSetter__.call(o, prop, desc.set);
          if ('value' in desc)
            o[prop] = desc.value;
          return o;
        };
      }
    }());
  
    // ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
    // for index in 0 ... obj.length
    function makeArrayAccessors(obj) {
      if ('TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS' in global)
        return;
  
      if (obj.length > MAX_ARRAY_LENGTH) throw RangeError('Array too large for polyfill');
  
      function makeArrayAccessor(index) {
        Object.defineProperty(obj, index, {
          'get': function() { return obj._getter(index); },
          'set': function(v) { obj._setter(index, v); },
          enumerable: true,
          configurable: false
        });
      }
  
      var i;
      for (i = 0; i < obj.length; i += 1) {
        makeArrayAccessor(i);
      }
    }
  
    // Internal conversion functions:
    //    pack<Type>()   - take a number (interpreted as Type), output a byte array
    //    unpack<Type>() - take a byte array, output a Type-like number
  
    function as_signed(value, bits) { var s = 32 - bits; return (value << s) >> s; }
    function as_unsigned(value, bits) { var s = 32 - bits; return (value << s) >>> s; }
  
    function packI8(n) { return [n & 0xff]; }
    function unpackI8(bytes) { return as_signed(bytes[0], 8); }
  
    function packU8(n) { return [n & 0xff]; }
    function unpackU8(bytes) { return as_unsigned(bytes[0], 8); }
  
    function packU8Clamped(n) { n = round(Number(n)); return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff]; }
  
    function packI16(n) { return [n & 0xff, (n >> 8) & 0xff]; }
    function unpackI16(bytes) { return as_signed(bytes[1] << 8 | bytes[0], 16); }
  
    function packU16(n) { return [n & 0xff, (n >> 8) & 0xff]; }
    function unpackU16(bytes) { return as_unsigned(bytes[1] << 8 | bytes[0], 16); }
  
    function packI32(n) { return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]; }
    function unpackI32(bytes) { return as_signed(bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0], 32); }
  
    function packU32(n) { return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff]; }
    function unpackU32(bytes) { return as_unsigned(bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0], 32); }
  
    function packIEEE754(v, ebits, fbits) {
  
      var bias = (1 << (ebits - 1)) - 1;
  
      function roundToEven(n) {
        var w = floor(n), f = n - w;
        if (f < 0.5)
          return w;
        if (f > 0.5)
          return w + 1;
        return w % 2 ? w + 1 : w;
      }
  
      // Compute sign, exponent, fraction
      var s, e, f;
      if (v !== v) {
        // NaN
        // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
        e = (1 << ebits) - 1; f = pow(2, fbits - 1); s = 0;
      } else if (v === Infinity || v === -Infinity) {
        e = (1 << ebits) - 1; f = 0; s = (v < 0) ? 1 : 0;
      } else if (v === 0) {
        e = 0; f = 0; s = (1 / v === -Infinity) ? 1 : 0;
      } else {
        s = v < 0;
        v = abs(v);
  
        if (v >= pow(2, 1 - bias)) {
          // Normalized
          e = min(floor(log(v) / LN2), 1023);
          var significand = v / pow(2, e);
          if (significand < 1) {
            e -= 1;
            significand *= 2;
          }
          if (significand >= 2) {
            e += 1;
            significand /= 2;
          }
          var d = pow(2, fbits);
          f = roundToEven(significand * d) - d;
          e += bias;
          if (f / d >= 1) {
            e += 1;
            f = 0;
          }
          if (e > 2 * bias) {
            // Overflow
            e = (1 << ebits) - 1;
            f = 0;
          }
        } else {
          // Denormalized
          e = 0;
          f = roundToEven(v / pow(2, 1 - bias - fbits));
        }
      }
  
      // Pack sign, exponent, fraction
      var bits = [], i;
      for (i = fbits; i; i -= 1) { bits.push(f % 2 ? 1 : 0); f = floor(f / 2); }
      for (i = ebits; i; i -= 1) { bits.push(e % 2 ? 1 : 0); e = floor(e / 2); }
      bits.push(s ? 1 : 0);
      bits.reverse();
      var str = bits.join('');
  
      // Bits to bytes
      var bytes = [];
      while (str.length) {
        bytes.unshift(parseInt(str.substring(0, 8), 2));
        str = str.substring(8);
      }
      return bytes;
    }
  
    function unpackIEEE754(bytes, ebits, fbits) {
      // Bytes to bits
      var bits = [], i, j, b, str,
          bias, s, e, f;
  
      for (i = 0; i < bytes.length; ++i) {
        b = bytes[i];
        for (j = 8; j; j -= 1) {
          bits.push(b % 2 ? 1 : 0); b = b >> 1;
        }
      }
      bits.reverse();
      str = bits.join('');
  
      // Unpack sign, exponent, fraction
      bias = (1 << (ebits - 1)) - 1;
      s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
      e = parseInt(str.substring(1, 1 + ebits), 2);
      f = parseInt(str.substring(1 + ebits), 2);
  
      // Produce number
      if (e === (1 << ebits) - 1) {
        return f !== 0 ? NaN : s * Infinity;
      } else if (e > 0) {
        // Normalized
        return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
      } else if (f !== 0) {
        // Denormalized
        return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
      } else {
        return s < 0 ? -0 : 0;
      }
    }
  
    function unpackF64(b) { return unpackIEEE754(b, 11, 52); }
    function packF64(v) { return packIEEE754(v, 11, 52); }
    function unpackF32(b) { return unpackIEEE754(b, 8, 23); }
    function packF32(v) { return packIEEE754(v, 8, 23); }
  
    //
    // 3 The ArrayBuffer Type
    //
  
    (function() {
  
      function ArrayBuffer(length) {
        length = ToInt32(length);
        if (length < 0) throw RangeError('ArrayBuffer size is not a small enough positive integer.');
        Object.defineProperty(this, 'byteLength', {value: length});
        Object.defineProperty(this, '_bytes', {value: Array(length)});
  
        for (var i = 0; i < length; i += 1)
          this._bytes[i] = 0;
      }
  
      global.ArrayBuffer = global.ArrayBuffer || ArrayBuffer;
  
      //
      // 5 The Typed Array View Types
      //
  
      function $TypedArray$() {
  
        // %TypedArray% ( length )
        if (!arguments.length || typeof arguments[0] !== 'object') {
          return (function(length) {
            length = ToInt32(length);
            if (length < 0) throw RangeError('length is not a small enough positive integer.');
            Object.defineProperty(this, 'length', {value: length});
            Object.defineProperty(this, 'byteLength', {value: length * this.BYTES_PER_ELEMENT});
            Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(this.byteLength)});
            Object.defineProperty(this, 'byteOffset', {value: 0});
  
           }).apply(this, arguments);
        }
  
        // %TypedArray% ( typedArray )
        if (arguments.length >= 1 &&
            Type(arguments[0]) === 'object' &&
            arguments[0] instanceof $TypedArray$) {
          return (function(typedArray){
            if (this.constructor !== typedArray.constructor) throw TypeError();
  
            var byteLength = typedArray.length * this.BYTES_PER_ELEMENT;
            Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
            Object.defineProperty(this, 'byteLength', {value: byteLength});
            Object.defineProperty(this, 'byteOffset', {value: 0});
            Object.defineProperty(this, 'length', {value: typedArray.length});
  
            for (var i = 0; i < this.length; i += 1)
              this._setter(i, typedArray._getter(i));
  
          }).apply(this, arguments);
        }
  
        // %TypedArray% ( array )
        if (arguments.length >= 1 &&
            Type(arguments[0]) === 'object' &&
            !(arguments[0] instanceof $TypedArray$) &&
            !(arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
          return (function(array) {
  
            var byteLength = array.length * this.BYTES_PER_ELEMENT;
            Object.defineProperty(this, 'buffer', {value: new ArrayBuffer(byteLength)});
            Object.defineProperty(this, 'byteLength', {value: byteLength});
            Object.defineProperty(this, 'byteOffset', {value: 0});
            Object.defineProperty(this, 'length', {value: array.length});
  
            for (var i = 0; i < this.length; i += 1) {
              var s = array[i];
              this._setter(i, Number(s));
            }
          }).apply(this, arguments);
        }
  
        // %TypedArray% ( buffer, byteOffset=0, length=undefined )
        if (arguments.length >= 1 &&
            Type(arguments[0]) === 'object' &&
            (arguments[0] instanceof ArrayBuffer || Class(arguments[0]) === 'ArrayBuffer')) {
          return (function(buffer, byteOffset, length) {
  
            byteOffset = ToUint32(byteOffset);
            if (byteOffset > buffer.byteLength)
              throw RangeError('byteOffset out of range');
  
            // The given byteOffset must be a multiple of the element
            // size of the specific type, otherwise an exception is raised.
            if (byteOffset % this.BYTES_PER_ELEMENT)
              throw RangeError('buffer length minus the byteOffset is not a multiple of the element size.');
  
            if (length === undefined) {
              var byteLength = buffer.byteLength - byteOffset;
              if (byteLength % this.BYTES_PER_ELEMENT)
                throw RangeError('length of buffer minus byteOffset not a multiple of the element size');
              length = byteLength / this.BYTES_PER_ELEMENT;
  
            } else {
              length = ToUint32(length);
              byteLength = length * this.BYTES_PER_ELEMENT;
            }
  
            if ((byteOffset + byteLength) > buffer.byteLength)
              throw RangeError('byteOffset and length reference an area beyond the end of the buffer');
  
            Object.defineProperty(this, 'buffer', {value: buffer});
            Object.defineProperty(this, 'byteLength', {value: byteLength});
            Object.defineProperty(this, 'byteOffset', {value: byteOffset});
            Object.defineProperty(this, 'length', {value: length});
  
          }).apply(this, arguments);
        }
  
        // %TypedArray% ( all other argument combinations )
        throw TypeError();
      }
  
      // Properties of the %TypedArray Instrinsic Object
  
      // %TypedArray%.from ( source , mapfn=undefined, thisArg=undefined )
      Object.defineProperty($TypedArray$, 'from', {value: function(iterable) {
        return new this(iterable);
      }});
  
      // %TypedArray%.of ( ...items )
      Object.defineProperty($TypedArray$, 'of', {value: function(/*...items*/) {
        return new this(arguments);
      }});
  
      // %TypedArray%.prototype
      var $TypedArrayPrototype$ = {};
      $TypedArray$.prototype = $TypedArrayPrototype$;
  
      // WebIDL: getter type (unsigned long index);
      Object.defineProperty($TypedArray$.prototype, '_getter', {value: function(index) {
        if (arguments.length < 1) throw SyntaxError('Not enough arguments');
  
        index = ToUint32(index);
        if (index >= this.length)
          return undefined;
  
        var bytes = [], i, o;
        for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
             i < this.BYTES_PER_ELEMENT;
             i += 1, o += 1) {
          bytes.push(this.buffer._bytes[o]);
        }
        return this._unpack(bytes);
      }});
  
      // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
      Object.defineProperty($TypedArray$.prototype, 'get', {value: $TypedArray$.prototype._getter});
  
      // WebIDL: setter void (unsigned long index, type value);
      Object.defineProperty($TypedArray$.prototype, '_setter', {value: function(index, value) {
        if (arguments.length < 2) throw SyntaxError('Not enough arguments');
  
        index = ToUint32(index);
        if (index >= this.length)
          return;
  
        var bytes = this._pack(value), i, o;
        for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
             i < this.BYTES_PER_ELEMENT;
             i += 1, o += 1) {
          this.buffer._bytes[o] = bytes[i];
        }
      }});
  
      // get %TypedArray%.prototype.buffer
      // get %TypedArray%.prototype.byteLength
      // get %TypedArray%.prototype.byteOffset
      // -- applied directly to the object in the constructor
  
      // %TypedArray%.prototype.constructor
      Object.defineProperty($TypedArray$.prototype, 'constructor', {value: $TypedArray$});
  
      // %TypedArray%.prototype.copyWithin (target, start, end = this.length )
      Object.defineProperty($TypedArray$.prototype, 'copyWithin', {value: function(target, start) {
        var end = arguments[2];
  
        var o = ToObject(this);
        var lenVal = o.length;
        var len = ToUint32(lenVal);
        len = max(len, 0);
        var relativeTarget = ToInt32(target);
        var to;
        if (relativeTarget < 0)
          to = max(len + relativeTarget, 0);
        else
          to = min(relativeTarget, len);
        var relativeStart = ToInt32(start);
        var from;
        if (relativeStart < 0)
          from = max(len + relativeStart, 0);
        else
          from = min(relativeStart, len);
        var relativeEnd;
        if (end === undefined)
          relativeEnd = len;
        else
          relativeEnd = ToInt32(end);
        var final;
        if (relativeEnd < 0)
          final = max(len + relativeEnd, 0);
        else
          final = min(relativeEnd, len);
        var count = min(final - from, len - to);
        var direction;
        if (from < to && to < from + count) {
          direction = -1;
          from = from + count - 1;
          to = to + count - 1;
        } else {
          direction = 1;
        }
        while (count > 0) {
          o._setter(to, o._getter(from));
          from = from + direction;
          to = to + direction;
          count = count - 1;
        }
        return o;
      }});
  
      // %TypedArray%.prototype.entries ( )
      // -- defined in es6.js to shim browsers w/ native TypedArrays
  
      // %TypedArray%.prototype.every ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, 'every', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        var thisArg = arguments[1];
        for (var i = 0; i < len; i++) {
          if (!callbackfn.call(thisArg, t._getter(i), i, t))
            return false;
        }
        return true;
      }});
  
      // %TypedArray%.prototype.fill (value, start = 0, end = this.length )
      Object.defineProperty($TypedArray$.prototype, 'fill', {value: function(value) {
        var start = arguments[1],
            end = arguments[2];
  
        var o = ToObject(this);
        var lenVal = o.length;
        var len = ToUint32(lenVal);
        len = max(len, 0);
        var relativeStart = ToInt32(start);
        var k;
        if (relativeStart < 0)
          k = max((len + relativeStart), 0);
        else
          k = min(relativeStart, len);
        var relativeEnd;
        if (end === undefined)
          relativeEnd = len;
        else
          relativeEnd = ToInt32(end);
        var final;
        if (relativeEnd < 0)
          final = max((len + relativeEnd), 0);
        else
          final = min(relativeEnd, len);
        while (k < final) {
          o._setter(k, value);
          k += 1;
        }
        return o;
      }});
  
      // %TypedArray%.prototype.filter ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, 'filter', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
          var val = t._getter(i); // in case fun mutates this
          if (callbackfn.call(thisp, val, i, t))
            res.push(val);
        }
        return new this.constructor(res);
      }});
  
      // %TypedArray%.prototype.find (predicate, thisArg = undefined)
      Object.defineProperty($TypedArray$.prototype, 'find', {value: function(predicate) {
        var o = ToObject(this);
        var lenValue = o.length;
        var len = ToUint32(lenValue);
        if (!IsCallable(predicate)) throw TypeError();
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var k = 0;
        while (k < len) {
          var kValue = o._getter(k);
          var testResult = predicate.call(t, kValue, k, o);
          if (Boolean(testResult))
            return kValue;
          ++k;
        }
        return undefined;
      }});
  
      // %TypedArray%.prototype.findIndex ( predicate, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, 'findIndex', {value: function(predicate) {
        var o = ToObject(this);
        var lenValue = o.length;
        var len = ToUint32(lenValue);
        if (!IsCallable(predicate)) throw TypeError();
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var k = 0;
        while (k < len) {
          var kValue = o._getter(k);
          var testResult = predicate.call(t, kValue, k, o);
          if (Boolean(testResult))
            return k;
          ++k;
        }
        return -1;
      }});
  
      // %TypedArray%.prototype.forEach ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, 'forEach', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++)
          callbackfn.call(thisp, t._getter(i), i, t);
      }});
  
      // %TypedArray%.prototype.indexOf (searchElement, fromIndex = 0 )
      Object.defineProperty($TypedArray$.prototype, 'indexOf', {value: function(searchElement) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (len === 0) return -1;
        var n = 0;
        if (arguments.length > 0) {
          n = Number(arguments[1]);
          if (n !== n) {
            n = 0;
          } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
            n = (n > 0 || -1) * floor(abs(n));
          }
        }
        if (n >= len) return -1;
        var k = n >= 0 ? n : max(len - abs(n), 0);
        for (; k < len; k++) {
          if (t._getter(k) === searchElement) {
            return k;
          }
        }
        return -1;
      }});
  
      // %TypedArray%.prototype.join ( separator )
      Object.defineProperty($TypedArray$.prototype, 'join', {value: function(separator) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        var tmp = Array(len);
        for (var i = 0; i < len; ++i)
          tmp[i] = t._getter(i);
        return tmp.join(separator === undefined ? ',' : separator); // Hack for IE7
      }});
  
      // %TypedArray%.prototype.keys ( )
      // -- defined in es6.js to shim browsers w/ native TypedArrays
  
      // %TypedArray%.prototype.lastIndexOf ( searchElement, fromIndex = this.length-1 )
      Object.defineProperty($TypedArray$.prototype, 'lastIndexOf', {value: function(searchElement) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (len === 0) return -1;
        var n = len;
        if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n !== n) {
            n = 0;
          } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
            n = (n > 0 || -1) * floor(abs(n));
          }
        }
        var k = n >= 0 ? min(n, len - 1) : len - abs(n);
        for (; k >= 0; k--) {
          if (t._getter(k) === searchElement)
            return k;
        }
        return -1;
      }});
  
      // get %TypedArray%.prototype.length
      // -- applied directly to the object in the constructor
  
      // %TypedArray%.prototype.map ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, 'map', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        var res = []; res.length = len;
        var thisp = arguments[1];
        for (var i = 0; i < len; i++)
          res[i] = callbackfn.call(thisp, t._getter(i), i, t);
        return new this.constructor(res);
      }});
  
      // %TypedArray%.prototype.reduce ( callbackfn [, initialValue] )
      Object.defineProperty($TypedArray$.prototype, 'reduce', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        // no value to return if no initial value and an empty array
        if (len === 0 && arguments.length === 1) throw TypeError();
        var k = 0;
        var accumulator;
        if (arguments.length >= 2) {
          accumulator = arguments[1];
        } else {
          accumulator = t._getter(k++);
        }
        while (k < len) {
          accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
          k++;
        }
        return accumulator;
      }});
  
      // %TypedArray%.prototype.reduceRight ( callbackfn [, initialValue] )
      Object.defineProperty($TypedArray$.prototype, 'reduceRight', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        // no value to return if no initial value, empty array
        if (len === 0 && arguments.length === 1) throw TypeError();
        var k = len - 1;
        var accumulator;
        if (arguments.length >= 2) {
          accumulator = arguments[1];
        } else {
          accumulator = t._getter(k--);
        }
        while (k >= 0) {
          accumulator = callbackfn.call(undefined, accumulator, t._getter(k), k, t);
          k--;
        }
        return accumulator;
      }});
  
      // %TypedArray%.prototype.reverse ( )
      Object.defineProperty($TypedArray$.prototype, 'reverse', {value: function() {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        var half = floor(len / 2);
        for (var i = 0, j = len - 1; i < half; ++i, --j) {
          var tmp = t._getter(i);
          t._setter(i, t._getter(j));
          t._setter(j, tmp);
        }
        return t;
      }});
  
      // %TypedArray%.prototype.set(array, offset = 0 )
      // %TypedArray%.prototype.set(typedArray, offset = 0 )
      // WebIDL: void set(TypedArray array, optional unsigned long offset);
      // WebIDL: void set(sequence<type> array, optional unsigned long offset);
      Object.defineProperty($TypedArray$.prototype, 'set', {value: function(index, value) {
        if (arguments.length < 1) throw SyntaxError('Not enough arguments');
        var array, sequence, offset, len,
            i, s, d,
            byteOffset, byteLength, tmp;
  
        if (typeof arguments[0] === 'object' && arguments[0].constructor === this.constructor) {
          // void set(TypedArray array, optional unsigned long offset);
          array = arguments[0];
          offset = ToUint32(arguments[1]);
  
          if (offset + array.length > this.length) {
            throw RangeError('Offset plus length of array is out of range');
          }
  
          byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
          byteLength = array.length * this.BYTES_PER_ELEMENT;
  
          if (array.buffer === this.buffer) {
            tmp = [];
            for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
              tmp[i] = array.buffer._bytes[s];
            }
            for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
              this.buffer._bytes[d] = tmp[i];
            }
          } else {
            for (i = 0, s = array.byteOffset, d = byteOffset;
                 i < byteLength; i += 1, s += 1, d += 1) {
              this.buffer._bytes[d] = array.buffer._bytes[s];
            }
          }
        } else if (typeof arguments[0] === 'object' && typeof arguments[0].length !== 'undefined') {
          // void set(sequence<type> array, optional unsigned long offset);
          sequence = arguments[0];
          len = ToUint32(sequence.length);
          offset = ToUint32(arguments[1]);
  
          if (offset + len > this.length) {
            throw RangeError('Offset plus length of array is out of range');
          }
  
          for (i = 0; i < len; i += 1) {
            s = sequence[i];
            this._setter(offset + i, Number(s));
          }
        } else {
          throw TypeError('Unexpected argument type(s)');
        }
      }});
  
      // %TypedArray%.prototype.slice ( start, end )
      Object.defineProperty($TypedArray$.prototype, 'slice', {value: function(start, end) {
        var o = ToObject(this);
        var lenVal = o.length;
        var len = ToUint32(lenVal);
        var relativeStart = ToInt32(start);
        var k = (relativeStart < 0) ? max(len + relativeStart, 0) : min(relativeStart, len);
        var relativeEnd = (end === undefined) ? len : ToInt32(end);
        var final = (relativeEnd < 0) ? max(len + relativeEnd, 0) : min(relativeEnd, len);
        var count = final - k;
        var c = o.constructor;
        var a = new c(count);
        var n = 0;
        while (k < final) {
          var kValue = o._getter(k);
          a._setter(n, kValue);
          ++k;
          ++n;
        }
        return a;
      }});
  
      // %TypedArray%.prototype.some ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, 'some', {value: function(callbackfn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        if (!IsCallable(callbackfn)) throw TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
          if (callbackfn.call(thisp, t._getter(i), i, t)) {
            return true;
          }
        }
        return false;
      }});
  
      // %TypedArray%.prototype.sort ( comparefn )
      Object.defineProperty($TypedArray$.prototype, 'sort', {value: function(comparefn) {
        if (this === undefined || this === null) throw TypeError();
        var t = Object(this);
        var len = ToUint32(t.length);
        var tmp = Array(len);
        for (var i = 0; i < len; ++i)
          tmp[i] = t._getter(i);
        function sortCompare(x, y) {
          if (x !== x && y !== y) return +0;
          if (x !== x) return 1;
          if (y !== y) return -1;
          if (comparefn !== undefined) {
            return comparefn(x, y);
          }
          if (x < y) return -1;
          if (x > y) return 1;
          return +0;
        }
        tmp.sort(sortCompare);
        for (i = 0; i < len; ++i)
          t._setter(i, tmp[i]);
        return t;
      }});
  
      // %TypedArray%.prototype.subarray(begin = 0, end = this.length )
      // WebIDL: TypedArray subarray(long begin, optional long end);
      Object.defineProperty($TypedArray$.prototype, 'subarray', {value: function(start, end) {
        function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }
  
        start = ToInt32(start);
        end = ToInt32(end);
  
        if (arguments.length < 1) { start = 0; }
        if (arguments.length < 2) { end = this.length; }
  
        if (start < 0) { start = this.length + start; }
        if (end < 0) { end = this.length + end; }
  
        start = clamp(start, 0, this.length);
        end = clamp(end, 0, this.length);
  
        var len = end - start;
        if (len < 0) {
          len = 0;
        }
  
        return new this.constructor(
          this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
      }});
  
      // %TypedArray%.prototype.toLocaleString ( )
      // %TypedArray%.prototype.toString ( )
      // %TypedArray%.prototype.values ( )
      // %TypedArray%.prototype [ @@iterator ] ( )
      // get %TypedArray%.prototype [ @@toStringTag ]
      // -- defined in es6.js to shim browsers w/ native TypedArrays
  
      function makeTypedArray(elementSize, pack, unpack) {
        // Each TypedArray type requires a distinct constructor instance with
        // identical logic, which this produces.
        var TypedArray = function() {
          Object.defineProperty(this, 'constructor', {value: TypedArray});
          $TypedArray$.apply(this, arguments);
          makeArrayAccessors(this);
        };
        if ('__proto__' in TypedArray) {
          TypedArray.__proto__ = $TypedArray$;
        } else {
          TypedArray.from = $TypedArray$.from;
          TypedArray.of = $TypedArray$.of;
        }
  
        TypedArray.BYTES_PER_ELEMENT = elementSize;
  
        var TypedArrayPrototype = function() {};
        TypedArrayPrototype.prototype = $TypedArrayPrototype$;
  
        TypedArray.prototype = new TypedArrayPrototype();
  
        Object.defineProperty(TypedArray.prototype, 'BYTES_PER_ELEMENT', {value: elementSize});
        Object.defineProperty(TypedArray.prototype, '_pack', {value: pack});
        Object.defineProperty(TypedArray.prototype, '_unpack', {value: unpack});
  
        return TypedArray;
      }
  
      var Int8Array = makeTypedArray(1, packI8, unpackI8);
      var Uint8Array = makeTypedArray(1, packU8, unpackU8);
      var Uint8ClampedArray = makeTypedArray(1, packU8Clamped, unpackU8);
      var Int16Array = makeTypedArray(2, packI16, unpackI16);
      var Uint16Array = makeTypedArray(2, packU16, unpackU16);
      var Int32Array = makeTypedArray(4, packI32, unpackI32);
      var Uint32Array = makeTypedArray(4, packU32, unpackU32);
      var Float32Array = makeTypedArray(4, packF32, unpackF32);
      var Float64Array = makeTypedArray(8, packF64, unpackF64);
  
      global.Int8Array = global.Int8Array || Int8Array;
      global.Uint8Array = global.Uint8Array || Uint8Array;
      global.Uint8ClampedArray = global.Uint8ClampedArray || Uint8ClampedArray;
      global.Int16Array = global.Int16Array || Int16Array;
      global.Uint16Array = global.Uint16Array || Uint16Array;
      global.Int32Array = global.Int32Array || Int32Array;
      global.Uint32Array = global.Uint32Array || Uint32Array;
      global.Float32Array = global.Float32Array || Float32Array;
      global.Float64Array = global.Float64Array || Float64Array;
    }());
  
    //
    // 6 The DataView View Type
    //
  
    (function() {
      function r(array, index) {
        return IsCallable(array.get) ? array.get(index) : array[index];
      }
  
      var IS_BIG_ENDIAN = (function() {
        var u16array = new Uint16Array([0x1234]),
            u8array = new Uint8Array(u16array.buffer);
        return r(u8array, 0) === 0x12;
      }());
  
      // DataView(buffer, byteOffset=0, byteLength=undefined)
      // WebIDL: Constructor(ArrayBuffer buffer,
      //                     optional unsigned long byteOffset,
      //                     optional unsigned long byteLength)
      function DataView(buffer, byteOffset, byteLength) {
        if (!(buffer instanceof ArrayBuffer || Class(buffer) === 'ArrayBuffer')) throw TypeError();
  
        byteOffset = ToUint32(byteOffset);
        if (byteOffset > buffer.byteLength)
          throw RangeError('byteOffset out of range');
  
        if (byteLength === undefined)
          byteLength = buffer.byteLength - byteOffset;
        else
          byteLength = ToUint32(byteLength);
  
        if ((byteOffset + byteLength) > buffer.byteLength)
          throw RangeError('byteOffset and length reference an area beyond the end of the buffer');
  
        Object.defineProperty(this, 'buffer', {value: buffer});
        Object.defineProperty(this, 'byteLength', {value: byteLength});
        Object.defineProperty(this, 'byteOffset', {value: byteOffset});
      };
  
      // get DataView.prototype.buffer
      // get DataView.prototype.byteLength
      // get DataView.prototype.byteOffset
      // -- applied directly to instances by the constructor
  
      function makeGetter(arrayType) {
        return function GetViewValue(byteOffset, littleEndian) {
          byteOffset = ToUint32(byteOffset);
  
          if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
            throw RangeError('Array index out of range');
  
          byteOffset += this.byteOffset;
  
          var uint8Array = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
              bytes = [];
          for (var i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
            bytes.push(r(uint8Array, i));
  
          if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
            bytes.reverse();
  
          return r(new arrayType(new Uint8Array(bytes).buffer), 0);
        };
      }
  
      Object.defineProperty(DataView.prototype, 'getUint8', {value: makeGetter(Uint8Array)});
      Object.defineProperty(DataView.prototype, 'getInt8', {value: makeGetter(Int8Array)});
      Object.defineProperty(DataView.prototype, 'getUint16', {value: makeGetter(Uint16Array)});
      Object.defineProperty(DataView.prototype, 'getInt16', {value: makeGetter(Int16Array)});
      Object.defineProperty(DataView.prototype, 'getUint32', {value: makeGetter(Uint32Array)});
      Object.defineProperty(DataView.prototype, 'getInt32', {value: makeGetter(Int32Array)});
      Object.defineProperty(DataView.prototype, 'getFloat32', {value: makeGetter(Float32Array)});
      Object.defineProperty(DataView.prototype, 'getFloat64', {value: makeGetter(Float64Array)});
  
      function makeSetter(arrayType) {
        return function SetViewValue(byteOffset, value, littleEndian) {
          byteOffset = ToUint32(byteOffset);
          if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
            throw RangeError('Array index out of range');
  
          // Get bytes
          var typeArray = new arrayType([value]),
              byteArray = new Uint8Array(typeArray.buffer),
              bytes = [], i, byteView;
  
          for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
            bytes.push(r(byteArray, i));
  
          // Flip if necessary
          if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
            bytes.reverse();
  
          // Write them
          byteView = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
          byteView.set(bytes);
        };
      }
  
      Object.defineProperty(DataView.prototype, 'setUint8', {value: makeSetter(Uint8Array)});
      Object.defineProperty(DataView.prototype, 'setInt8', {value: makeSetter(Int8Array)});
      Object.defineProperty(DataView.prototype, 'setUint16', {value: makeSetter(Uint16Array)});
      Object.defineProperty(DataView.prototype, 'setInt16', {value: makeSetter(Int16Array)});
      Object.defineProperty(DataView.prototype, 'setUint32', {value: makeSetter(Uint32Array)});
      Object.defineProperty(DataView.prototype, 'setInt32', {value: makeSetter(Int32Array)});
      Object.defineProperty(DataView.prototype, 'setFloat32', {value: makeSetter(Float32Array)});
      Object.defineProperty(DataView.prototype, 'setFloat64', {value: makeSetter(Float64Array)});
  
      global.DataView = global.DataView || DataView;
  
    }());
  
  }(self));
  
  // Element.prototype.inert
  /* global Set, Map */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    // eslint-disable-next-line no-undef
    typeof define === 'function' && define.amd ? define('inert', factory) :
    (factory());
  }(this, (function () { 'use strict';
  
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
    /**
     * This work is licensed under the W3C Software and Document License
     * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
     */
  
    // Convenience function for converting NodeLists.
    /** @type {typeof Array.prototype.slice} */
    var slice = Array.prototype.slice;
  
    /**
     * IE has a non-standard name for "matches".
     * @type {typeof Element.prototype.matches}
     */
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
  
    /** @type {string} */
    var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
  
    /**
     * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
     * attribute.
     *
     * Its main functions are:
     *
     * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
     *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
     *   each focusable node in the subtree with the singleton `InertManager` which manages all known
     *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
     *   instance exists for each focusable node which has at least one inert root as an ancestor.
     *
     * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
     *   attribute is removed from the root node). This is handled in the destructor, which calls the
     *   `deregister` method on `InertManager` for each managed inert node.
     */
  
    var InertRoot = function () {
      /**
       * @param {!Element} rootElement The Element at the root of the inert subtree.
       * @param {!InertManager} inertManager The global singleton InertManager object.
       */
      function InertRoot(rootElement, inertManager) {
        _classCallCheck(this, InertRoot);
  
        /** @type {!InertManager} */
        this._inertManager = inertManager;
  
        /** @type {!Element} */
        this._rootElement = rootElement;
  
        /**
         * @type {!Set<!InertNode>}
         * All managed focusable nodes in this InertRoot's subtree.
         */
        this._managedNodes = new Set();
  
        // Make the subtree hidden from assistive technology
        if (this._rootElement.hasAttribute('aria-hidden')) {
          /** @type {?string} */
          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute('aria-hidden', 'true');
  
        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
        this._makeSubtreeUnfocusable(this._rootElement);
  
        // Watch for:
        // - any additions in the subtree: make them unfocusable too
        // - any removals from the subtree: remove them from this inert root's managed nodes
        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
        //   element, make that node a managed node.
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
      }
  
      /**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */
  
  
      _createClass(InertRoot, [{
        key: 'destructor',
        value: function destructor() {
          this._observer.disconnect();
  
          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute('aria-hidden');
            }
          }
  
          this._managedNodes.forEach(function (inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);
  
          // Note we cast the nulls to the ANY type here because:
          // 1) We want the class properties to be declared as non-null, or else we
          //    need even more casts throughout this code. All bets are off if an
          //    instance has been destroyed and a method is called.
          // 2) We don't want to cast "this", because we want type-aware optimizations
          //    to know which properties we're setting.
          this._observer = /** @type {?} */null;
          this._rootElement = /** @type {?} */null;
          this._managedNodes = /** @type {?} */null;
          this._inertManager = /** @type {?} */null;
        }
  
        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
  
      }, {
        key: '_makeSubtreeUnfocusable',
  
  
        /**
         * @param {!Node} startNode
         */
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;
  
          composedTreeWalk(startNode, function (node) {
            return _this2._visitNode(node);
          });
  
          var activeElement = document.activeElement;
  
          if (!document.body.contains(startNode)) {
            // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
            var node = startNode;
            /** @type {!ShadowRoot|undefined} */
            var root = undefined;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root = /** @type {!ShadowRoot} */node;
                break;
              }
              node = node.parentNode;
            }
            if (root) {
              activeElement = root.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            // In IE11, if an element is already focused, and then set to tabindex=-1
            // calling blur() will not actually move the focus.
            // To work around this we call focus() on the body instead.
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }
  
        /**
         * @param {!Node} node
         */
  
      }, {
        key: '_visitNode',
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!Element} */node;
  
          // If a descendant inert root becomes un-inert, its descendants will still be inert because of
          // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
          if (element !== this._rootElement && element.hasAttribute('inert')) {
            this._adoptInertRoot(element);
          }
  
          if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
            this._manageNode(element);
          }
        }
  
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
  
      }, {
        key: '_manageNode',
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }
  
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
  
      }, {
        key: '_unmanageNode',
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes['delete'](inertNode);
          }
        }
  
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
  
      }, {
        key: '_unmanageSubtree',
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;
  
          composedTreeWalk(startNode, function (node) {
            return _this3._unmanageNode(node);
          });
        }
  
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!Element} node
         */
  
      }, {
        key: '_adoptInertRoot',
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);
  
          // During initialisation this inert root may not have been registered yet,
          // so register it now if need be.
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }
  
          inertSubroot.managedNodes.forEach(function (savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }
  
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
  
      }, {
        key: '_onMutation',
        value: function _onMutation(records, _self) {
          records.forEach(function (record) {
            var target = /** @type {!Element} */record.target;
            if (record.type === 'childList') {
              // Manage added nodes
              slice.call(record.addedNodes).forEach(function (node) {
                this._makeSubtreeUnfocusable(node);
              }, this);
  
              // Un-manage removed nodes
              slice.call(record.removedNodes).forEach(function (node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === 'attributes') {
              if (record.attributeName === 'tabindex') {
                // Re-initialise inert node if tabindex changes
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                // already managed nodes from this inert subroot.
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function (managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: 'managedNodes',
        get: function get() {
          return new Set(this._managedNodes);
        }
  
        /** @return {boolean} */
  
      }, {
        key: 'hasSavedAriaHidden',
        get: function get() {
          return this._savedAriaHidden !== null;
        }
  
        /** @param {?string} ariaHidden */
  
      }, {
        key: 'savedAriaHidden',
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        }
  
        /** @return {?string} */
        ,
        get: function get() {
          return this._savedAriaHidden;
        }
      }]);
  
      return InertRoot;
    }();
  
    /**
     * `InertNode` initialises and manages a single inert node.
     * A node is inert if it is a descendant of one or more inert root elements.
     *
     * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
     * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
     * is intrinsically focusable or not.
     *
     * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
     * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
     * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
     * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
     * or removes the `tabindex` attribute if the element is intrinsically focusable.
     */
  
  
    var InertNode = function () {
      /**
       * @param {!Node} node A focusable element to be made inert.
       * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
       */
      function InertNode(node, inertRoot) {
        _classCallCheck(this, InertNode);
  
        /** @type {!Node} */
        this._node = node;
  
        /** @type {boolean} */
        this._overrodeFocusMethod = false;
  
        /**
         * @type {!Set<!InertRoot>} The set of descendant inert roots.
         *    If and only if this set becomes empty, this node is no longer inert.
         */
        this._inertRoots = new Set([inertRoot]);
  
        /** @type {?number} */
        this._savedTabIndex = null;
  
        /** @type {boolean} */
        this._destroyed = false;
  
        // Save any prior tabindex info and make this node untabbable
        this.ensureUntabbable();
      }
  
      /**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */
  
  
      _createClass(InertNode, [{
        key: 'destructor',
        value: function destructor() {
          this._throwIfDestroyed();
  
          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = /** @type {!Element} */this._node;
            if (this._savedTabIndex !== null) {
              element.setAttribute('tabindex', this._savedTabIndex);
            } else {
              element.removeAttribute('tabindex');
            }
  
            // Use `delete` to restore native focus method.
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }
  
          // See note in InertRoot.destructor for why we cast these nulls to ANY.
          this._node = /** @type {?} */null;
          this._inertRoots = /** @type {?} */null;
          this._destroyed = true;
        }
  
        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
  
      }, {
        key: '_throwIfDestroyed',
  
  
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error('Trying to access destroyed InertNode');
          }
        }
  
        /** @return {boolean} */
  
      }, {
        key: 'ensureUntabbable',
  
  
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = /** @type {!Element} */this.node;
          if (matches.call(element, _focusableElementsString)) {
            if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
              return;
            }
  
            if (element.hasAttribute('tabindex')) {
              this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            }
            element.setAttribute('tabindex', '-1');
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function () {};
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
            element.removeAttribute('tabindex');
          }
        }
  
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
  
      }, {
        key: 'addInertRoot',
        value: function addInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots.add(inertRoot);
        }
  
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
  
      }, {
        key: 'removeInertRoot',
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots['delete'](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: 'destroyed',
        get: function get() {
          return (/** @type {!InertNode} */this._destroyed
          );
        }
      }, {
        key: 'hasSavedTabIndex',
        get: function get() {
          return this._savedTabIndex !== null;
        }
  
        /** @return {!Node} */
  
      }, {
        key: 'node',
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }
  
        /** @param {?number} tabIndex */
  
      }, {
        key: 'savedTabIndex',
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        }
  
        /** @return {?number} */
        ,
        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);
  
      return InertNode;
    }();
  
    /**
     * InertManager is a per-document singleton object which manages all inert roots and nodes.
     *
     * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
     * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
     * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
     * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
     * is created for each such node, via the `_managedNodes` map.
     */
  
  
    var InertManager = function () {
      /**
       * @param {!Document} document
       */
      function InertManager(document) {
        _classCallCheck(this, InertManager);
  
        if (!document) {
          throw new Error('Missing required argument; InertManager needs to wrap a document.');
        }
  
        /** @type {!Document} */
        this._document = document;
  
        /**
         * All managed nodes known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertNode>}
         */
        this._managedNodes = new Map();
  
        /**
         * All inert roots known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertRoot>}
         */
        this._inertRoots = new Map();
  
        /**
         * Observer for mutations on `document.body`.
         * @type {!MutationObserver}
         */
        this._observer = new MutationObserver(this._watchForInert.bind(this));
  
        // Add inert style.
        addInertStyle(document.head || document.body || document.documentElement);
  
        // Wait for document to be loaded.
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }
  
      /**
       * Set whether the given element should be an inert root or not.
       * @param {!Element} root
       * @param {boolean} inert
       */
  
  
      _createClass(InertManager, [{
        key: 'setInert',
        value: function setInert(root, inert) {
          if (inert) {
            if (this._inertRoots.has(root)) {
              // element is already inert
              return;
            }
  
            var inertRoot = new InertRoot(root, this);
            root.setAttribute('inert', '');
            this._inertRoots.set(root, inertRoot);
            // If not contained in the document, it must be in a shadowRoot.
            // Ensure inert styles are added there.
            if (!this._document.body.contains(root)) {
              var parent = root.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root)) {
              // element is already non-inert
              return;
            }
  
            var _inertRoot = this._inertRoots.get(root);
            _inertRoot.destructor();
            this._inertRoots['delete'](root);
            root.removeAttribute('inert');
          }
        }
  
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
  
      }, {
        key: 'getInertRoot',
        value: function getInertRoot(element) {
          return this._inertRoots.get(element);
        }
  
        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */
  
      }, {
        key: 'register',
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== undefined) {
            // node was already in an inert subtree
            inertNode.addInertRoot(inertRoot);
          } else {
            inertNode = new InertNode(node, inertRoot);
          }
  
          this._managedNodes.set(node, inertNode);
  
          return inertNode;
        }
  
        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */
  
      }, {
        key: 'deregister',
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }
  
          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes['delete'](node);
          }
  
          return inertNode;
        }
  
        /**
         * Callback used when document has finished loading.
         */
  
      }, {
        key: '_onDocumentLoaded',
        value: function _onDocumentLoaded() {
          // Find all inert roots in document and make them actually inert.
          var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
          inertElements.forEach(function (inertElement) {
            this.setInert(inertElement, true);
          }, this);
  
          // Comment this out to use programmatic API only.
          this._observer.observe(this._document.body || this._document.documentElement, {attributes: true, subtree: true, childList: true});
        }
  
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
  
      }, {
        key: '_watchForInert',
        value: function _watchForInert(records, _self) {
          var _this = this;
          records.forEach(function (record) {
            switch (record.type) {
              case 'childList':
                slice.call(record.addedNodes).forEach(function (node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll('[inert]'));
                  if (matches.call(node, '[inert]')) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function (inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case 'attributes':
                if (record.attributeName !== 'inert') {
                  return;
                }
                var target = /** @type {!Element} */record.target;
                var inert = target.hasAttribute('inert');
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);
  
      return InertManager;
    }();
  
    /**
     * Recursively walk the composed tree from |node|.
     * @param {!Node} node
     * @param {(function (!Element))=} callback Callback to be called for each element traversed,
     *     before descending into child nodes.
     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
     */
  
  
    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = /** @type {!Element} */node;
        if (callback) {
          callback(element);
        }
  
        // Descend into node:
        // If it has a ShadowRoot, ignore all child elements - these will be picked
        // up by the <content> or <shadow> elements. Descend straight into the
        // ShadowRoot.
        var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback, shadowRoot);
          return;
        }
  
        // If it is a <content> element, descend into distributed elements - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'content') {
          var content = /** @type {!HTMLContentElement} */element;
          // Verifies if ShadowDom v0 is supported.
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
          }
          return;
        }
  
        // If it is a <slot> element, descend into assigned nodes - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'slot') {
          var slot = /** @type {!HTMLSlotElement} */element;
          // Verify if ShadowDom v1 is supported.
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback, shadowRootAncestor);
          }
          return;
        }
      }
  
      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
      // element, nor a <shadow> element recurse normally.
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback, shadowRootAncestor);
        child = child.nextSibling;
      }
    }
  
    /**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */
    function addInertStyle(node) {
      if (node.querySelector('style#inert-style')) {
        return;
      }
      var style = document.createElement('style');
      style.setAttribute('id', 'inert-style');
      style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  user-select: none;\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '}\n';
      node.appendChild(style);
    }
  
    /** @type {!InertManager} */
    var inertManager = new InertManager(document);
  
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      Object.defineProperty(Element.prototype, 'inert', {
        enumerable: true,
        /** @this {!Element} */
        get: function get() {
          return this.hasAttribute('inert');
        },
        /** @this {!Element} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  
  })));
  })
  ('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});