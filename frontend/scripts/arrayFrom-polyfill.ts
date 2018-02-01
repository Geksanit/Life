interface ArrayConstructor {
  from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}

// Шаги алгоритма ECMA-262, 6-е издание, 22.1.2.1
// Ссылка: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
const toStr = Object.prototype.toString;
const isCallable = (fn: any) => typeof fn === 'function' || toStr.call(fn) === '[object Function]';
const toInteger = function (value) {
  const num = Number(value);
  if (isNaN(num)) { return 0; }
  if (num === 0 || !isFinite(num)) { return num; }
  return (num > 0 ? 1 : -1) * Math.floor(Math.abs(num));
};
const maxSafeInteger = Math.pow(2, 53) - 1;
const toLength = function (value) {
  const len = toInteger(value);
  return Math.min(Math.max(len, 0), maxSafeInteger);
};

Array.from = function(arrayLike: any, mapFn?, thisArg?): Array<any> {
  // place code from MDN here
  // 1. Положим C равным значению this.
  const C: any = this;

  // 2. Положим items равным ToObject(arrayLike).
  const items: any = Object(arrayLike);

  // 3. ReturnIfAbrupt(items).
  if (arrayLike == null) {
    throw new TypeError('Array.from requires an array-like object - not null or undefined');
  }

  // 4. Если mapfn равен undefined, положим mapping равным false.
  // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;
  let T;
  if (typeof mapFn !== 'undefined') {
    // 5. иначе
    // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
    if (!isCallable(mapFn)) {
      throw new TypeError('Array.from: when provided, the second argument must be a function');
    }

    // 5. b. Если thisArg присутствует, положим T равным thisArg;
    // иначе положим T равным undefined.
    if (arguments.length > 2) {
      T = arguments[2];
    }
  }

  // 10. Положим lenValue равным Get(items, "length").
  // 11. Положим len равным ToLength(lenValue).
  const len = toLength(items.length);

  // 13. Если IsConstructor(C) равен true, то
  // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
  //     объекта C со списком аргументов, содержащим единственный элемент len.
  // 14. a. Иначе, положим A равным ArrayCreate(len).
  const A : any = isCallable(C) ? Object(new C(len)) : new Array(len);

  // 16. Положим k равным 0.
  let k = 0;
  // 17. Пока k < len, будем повторять... (шаги с a по h)
  let kValue;
  while (k < len) {
    kValue = items[k];
    if (mapFn) {
      A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
    } else {
      A[k] = kValue;
    }
    k += 1;
  }
  // 18. Положим putStatus равным Put(A, "length", len, true).
  A.length = len;
  // 20. Вернём A.
  return A;
};

