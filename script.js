function Helper() {
  this.isObject = function (obj) {
    return obj instanceof Object;
  };

  this.isEmpty = function (obj) {
    if (!this.isObject(obj)) {
      return "TypeError";
    }
    return Object.keys(obj).length === 0;
  };

  this.isEqual = function (obj1, obj2) {
    if (!this.isObject(obj1) || !this.isObject(obj2)) {
      return "TypeError";
    }
    let properties1 = Object.getOwnPropertyNames(obj1);
    let properties2 = Object.getOwnPropertyNames(obj2);
    if (properties1.length !== properties2.length) {
      return false;
    }
    for (let i = 0; i < properties1.length; i++) {
      let property = properties1[i];
      let isObject =
        this.isObject(obj1[property]) && this.isObject(obj2[property]);
      if (
        (!isObject && obj1[property] !== obj2[property]) ||
        (isObject && !this.isEqual(obj1[property], obj2[property]))
      ) {
        return false;
      }
    }
    return true;
  };

  this.deepClone = function (obj) {
    if (!this.isObject(obj)) {
      return "TypeError";
    }
    let clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (this.isObject(obj[key])) {
          clonedObj[key] = this.deepClone(obj[key]);
        }
        clonedObj[key] = obj[key];
      }
    }
    return clonedObj;
  };

  this.findValue = function (obj, key) {
    if (!this.isObject(obj)) {
      return "TypeError";
    }
    let findKey;
    for (property in obj) {
      if (obj.hasOwnProperty(key)) {
        findKey = obj[key];
      } else if (this.isObject(obj[property])) {
        findKey = this.findValue(obj[property], key);
      }
    }
    return findKey;
  };

  this.hasKey = function (obj, key) {
    if (!this.isObject(obj)) {
      return "TypeError";
    }
    let hasKey = false;
    for (property in obj) {
      if (obj.hasOwnProperty(key)) {
        hasKey = true;
      } else if (this.isObject(obj[property])) {
        hasKey = this.hasKey(obj[property], key);
      }
    }
    return hasKey;
  };

  Object.defineProperties(this, {
    isObject: { writable: false, configurable: false },
    isEmpty: { writable: false, configurable: false },
    isEqual: { writable: false, configurable: false },
    deepClone: { writable: false, configurable: false },
    findValue: { writable: false, configurable: false },
    hasKey: { writable: false, configurable: false },
  });
}

let helper = new Helper();

let obj1 = { property: "value" };

let obj2 = {
  property: "value",
  nextLevel: {
    secondProperty: "secondValue",
    thirdLevel: { thirdProperty: "thirdValue" },
  },
};
console.log(Object.getOwnPropertyDescriptors(helper));

console.log(helper.isObject(obj1));
console.log(helper.isEmpty(obj1));
console.log(helper.deepClone(obj2));
console.log(helper.isEqual(obj1, obj2));
console.log(helper.findValue(obj2, "thirdProperty"));
console.log(helper.hasKey(obj2, "thirdProperty"));
