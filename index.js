function myNew(constructor, ...args) {
  const newInstance = Object.create(constructor.prototype);
  const ret = constructor.call(newInstance, ...args);
  return typeof ret === 'object' ? ret : newInstance;
}

function A(name, age) {
  this.name = name;
  this.age = age;
}

const a = myNew(A, '小明', 18);
console.log(a);
