// 需求: 验证用户名、邮箱、密码
// 1
function checkName () {
  // 验证姓名
};
function checkEmail () {
  // 验证邮箱
};
function checkPassword () {
  // 验证密码
};
/**
 * 上面的做法需要声明很多的全局变量
 */

// 2
var checkName = function () {
  // 验证姓名
};
var checkEmail = function () {
  // 验证邮箱
};
var checkPassword = function () {
  // 验证密码
};
/**
 * 上面的做法需要声明至少需要声明3个全局变量
 */

//  3
var checkObject = {
  checkName: function () {
    // 验证姓名
  },
  checkEmail: function () {
    // 验证邮箱
  },
  checkPassword: function () {
    // 验证密码
  }
};
/**
 * 上面的做法,在我们之前的基础上多了一个函数对象，我们调用的时候通过.语法即可，checkObject.checkName()
 */

//  4
var checkObject = function () {};
checkObject.checkName = function () {
  // 验证姓名
};
checkObject.checkEmail = function () {
  // 验证邮箱
};
checkObject.checkPassword = function () {
  // 验证密码
}
/**
 * 上面是对象的另外一种形式
 */

// 5
var chenkObject = function () {
  return {
    checkName: function () {
      // 验证姓名
    },
    checkEmail: function () {
      // 验证姓名
    },
    checkPassword: function () {
      // 验证密码
    }
  }
};
var a = chenkObject();
a.checkName();
/**
 * 每一次调用的时候，将之前的对象返回回来，当我们每次调用的时候都返回一个新对象，每个人使用的时候互不干扰
 */

// 6
var checkObject = function () {
  this.checkName = function () {
    // 验证姓名
  },
  this.checkEmail = function () {
    // 验证邮箱
  },
  this.checkPassword = function () {
    // 验证密码
  }
};
var a = new checkObject();
a.checkName();
/**
 * 类实例化(用类创建对象)
 */

// 7
var checkObject = function () {};
checkObject.prototype.checkName = function () {
  // 验证姓名
};
checkObject.prototype.checkEmail = function () {
  // 验证邮箱
};
checkObject.prototype.checkPassword = function () {
  // 验证密码
};

// 8
var checkObject = function () {};
checkObject.prototype = {
  checkName = function () {
    // 验证姓名
  },
  checkEmail = function () {
    // 验证邮箱
  },
  checkPassword = function () {
    // 验证密码
  }
};
var a = new checkObject();
a.checkName();

// 9
var checkObject = {
  checkName: function () {
    return this;
  },
  checkEmail: function () {
    return this;
  },
  checkPassword: function () {
    return this;
  }
};
checkObject.checkName().checkEmail().checkPassword();
/**
 * 链式调用
 */

// 10
var checkObject = function () {};
checkObject.prototype = {
  checkName: function () {
    return this;
  },
  checkEmail: function () {
    return this;
  },
  checkPassword: function () {
    return this;
  }
};
var a = new chenkObject();
a.checkName().checkEmail().checkPassword();

// 11
Function.prototype.checkEmail = function () {
  // 验证邮箱
};
var a = new Function();
a.checkEmail();

// 12
Function.prototype.addMethods = function (name, fn) {
  this[name] = fn;
};
var methods = new Function();
methods.addMethods('checkName', function () {
  // 
});
methods.addMethods('checkEmail', function () {
  // 
});
methods.addMethods('checkPassword', function () {
  // 
});
methods.checkName();
methods.checkEmail();
methods.checkPassword();

// 13
Function.prototype.addMethods = function (name, fn) {
  this[name] = fn;
  return this;
};
var methods = new Function();
methods.addMethods('checkName', function () {
  return this;
}).addMethods('checkEmail', function () {
  return this;
}).addMethods('checkPassword', function () {
  return this;
})
methods.checkName().checkEmail().checkPassword();

// 14
Function.prototype.addMethods = function () {
  this.prototype[name] = fn;
  return this;
}
var Methods = function () {};
Methods.addMethods('checkName', function () {

}).addMethods('checkEmail', function () {

}).addMethods('checkPassword', function () {

})
var M = new Methods();
M.checkEmail();
