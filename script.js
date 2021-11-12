// 1 ЧАСТЬ
function unique() {
  let uniqueArr = [];
  if (this[0] instanceof Object) {
    uniqueObject.apply(this);
  } else {
    uniquePrimitive.apply(this);
  }

  function uniqueObject() {
    let isExist = false;
    for (let i = 0; i < this.length; i++) {
      isExist = uniqueArr.some((element) => element.id === this[i].id);
      if (!isExist) {
        uniqueArr.push(this[i]);
      }
    }
  }

  function uniquePrimitive() {
    for (let i = 0; i < this.length; i++) {
      if (uniqueArr.indexOf(this[i]) === -1) {
        uniqueArr.push(this[i]);
      }
    }
  }
  return uniqueArr;
}
Array.prototype.unique = unique;

let arr = [1, 2, 2, 4];
let obj = [
  { id: 1, value: 5 },
  { id: 1, value: 10 },
  { id: 2, value: 15 },
  { id: 3, value: 20 },
];

console.group("1");
console.log(arr.unique());
console.log(obj.unique());
console.groupEnd();

// 2 ЧАСТЬ
function inherit(ParentClass) {
  function ChildClass() {}
  ChildClass.prototype = Object.create(ParentClass.prototype);
  ChildClass.prototype.constructor = ChildClass;
  ChildClass.prototype._super = ParentClass.prototype;

  return ChildClass;
}

function Car() {
  Car.prototype.info = function (info) {
    this.info = info;
  };
  Car.prototype.showInfo = function () {
    console.log(this.info);
  };
}
let car = new Car();

let Brand = inherit(Car);
Brand.prototype.infoBrand = function (info) {
  info = `Car Brand ${info}`;
  this._super.info.call(this, info);
};
let toyota = new Brand();
toyota.infoBrand("Toyota");

let Model = inherit(Brand);
Model.prototype.infoModel = function (info) {
  info = `Car Model ${info}`;
  this._super.info.call(this, info);
};
let mark = new Model();
mark.infoModel("Mark II");

console.group("2");
toyota.showInfo();
mark.showInfo();
console.groupEnd();
