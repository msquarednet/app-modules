System.registerDynamic("npm:lodash@4.13.1/_baseSum.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;
    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }
  module.exports = baseSum;
  return module.exports;
});

System.registerDynamic("npm:lodash@4.13.1/identity.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function identity(value) {
    return value;
  }
  module.exports = identity;
  return module.exports;
});

System.registerDynamic("npm:lodash@4.13.1/sum.js", ["npm:lodash@4.13.1/_baseSum.js", "npm:lodash@4.13.1/identity.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseSum = $__require('npm:lodash@4.13.1/_baseSum.js'),
      identity = $__require('npm:lodash@4.13.1/identity.js');
  function sum(array) {
    return (array && array.length) ? baseSum(array, identity) : 0;
  }
  module.exports = sum;
  return module.exports;
});

System.registerDynamic("src/lib.js", ["npm:lodash@4.13.1/sum.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var sum = $__require('npm:lodash@4.13.1/sum.js');
  var timesTwo = function(number) {
    return number * 2;
  };
  var addFive = function(number) {
    return sum([number, 5]);
  };
  module.exports = {
    timesTwo: timesTwo,
    addFive: addFive
  };
  return module.exports;
});

System.registerDynamic("src/entry.js", ["src/lib.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lib = $__require('src/lib.js');
  var a = lib.timesTwo(2);
  var b = lib.addFive(2);
  document.querySelector('#a').textContent = a;
  document.querySelector('#b').textContent = b;
  console.log(a);
  console.log(b);
  return module.exports;
});

//# sourceMappingURL=bundle.js.map