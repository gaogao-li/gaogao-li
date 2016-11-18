var LiGaoWei = {
  /**
   * 作用:
      -创建一个数组是迭代函数遍历fn（集合）中的每个元素后返回的结果.
   * 参数:
      -array:用来迭代的集合;
      -fn:迭代是调用的函数.
   * 返回值
      -返回新的映射后数组.
   * 例子:
      - function square(n) {
          return n * n;
        }
      - .map([4, 8], square);
        => [16, 64]
      - .map({ 'a': 4, 'b': 8 }, square);
        => [16, 64] (iteration order is not guaranteed)
      - var users = [
          { 'user': 'barney' },
          { 'user': 'fred' }
        ];
      - The `_.property` iteratee shorthand.
        .map(users, 'user');
        => ['barney', 'fred']
   **/
  map: function(array, fn) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      newArray.push(fn(array[i], i, array))
    }
    return newArray
  },

  /**
   * 作用:
      -创建一个数组是迭代函数遍历fn（集合）返回正确的值.
   * 参数:
      -array:用来迭代的集合;
      -fn:迭代是调用的函数.
   * 返回值
      -返回新的映射后数组.
   * 例子:
      - var users = [
          { 'user': 'barney', 'age': 36, 'active': true },
          { 'user': 'fred',   'age': 40, 'active': false }
        ];         
      - .filter(users, function(o) { return !o.active; });
      - => objects for ['fred']         
      - The `_.matches` iteratee shorthand.
      - .filter(users, { 'age': 36, 'active': true });
      - => objects for ['barney']         
      - The `_.matchesProperty` iteratee shorthand.
      - .filter(users, ['active', false]);
      - => objects for ['fred']         
      - The `_.property` iteratee shorthand.
      - .filter(users, 'active');
      - => objects for ['barney']
   **/
  filter: function(array, fn) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      if (fn(array[i], i, array)) {
        newArray.push(array[i])
      }
    }
    return newArray
  },

  /**
   * 作用:
      -创建一个分成两组的元素数组，第一组包含断言函数返回为 true（真值）的元素，
       第二组包含predicate（断言函数）返回为 false（假值）的元素.
   * 参数:
      -array:用来迭代的集合;
      -fn:迭代是调用的函数.
   * 返回值
      -返回新的映射后数组.
   * 例子:
      - var users = [
          { 'user': 'barney',  'age': 36, 'active': false },
          { 'user': 'fred',    'age': 40, 'active': true },
          { 'user': 'pebbles', 'age': 1,  'active': false }
        ]; 
      - .partition(users, function(o) { return o.active; });
      - => objects for [['fred'], ['barney', 'pebbles']]         
      - The `_.matches` iteratee shorthand.
      - .partition(users, { 'age': 1, 'active': false });
      - => objects for [['pebbles'], ['barney', 'fred']]         
      - The `_.matchesProperty` iteratee shorthand.
      - .partition(users, ['active', false]);
      - => objects for [['barney', 'pebbles'], ['fred']]         
      - The `_.property` iteratee shorthand.
      - .partition(users, 'active');
      - => objects for [['fred'], ['barney', 'pebbles']]
   **/
  partition: function(array, fn) {
    var newArray = [
      [],
      []
    ]
    for (var i = 0; i < array.length; i++) {
      if (fn(array[i], i, array)) {
        newArray[0].push(array[i])
      } else {
        newArray[1].push(array[i])
      }
    }
    return newArray
  },


  /**
   * 作用:
      -将数组(arr)拆分成多个n长度的区块后组成新数组.
   * 参数:
      -arr:需要处理的数组;
      -n:拆分的每个数组长度.
   * 返回值
      -result:返回一个包含拆分区块的新数组.
   * 例子:
      - .chunk(['a', 'b', 'c', 'd'], 2);
      - => [['a', 'b'], ['c', 'd']]
   **/
  chunk: function(arr, n) {
    var x = Math.ceil(arr.length / n)
    var result = new Array(x);
    for (var i = 0; i < x; i++) {
      result[i] = []
    }
    for (var j = 0; j < arr.length; j++) {
      result[parseInt(j / n)][j % n] = arr[j]
    }
    return result
  },

  /**
   * 作用:
      -创建一个新的数组,包含原数组所有非假数组.
   * 参数:
      -array:需要处理的数组.
   * 返回值
      -result:返回一个过滤掉假值的新数组.
   * 例子:
      - .compact([0, 1, false, 2, '', 3]);
      - => [1, 2, 3]
   **/
  compact: function(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  /**
   * 作用:
      -取出一个数组里的所有数组的值(以及非数组)组成新数组.
   * 参数:
      -other:需要处理的数组;
      -array:other数组里的数组.
   * 返回值
      -newArray:返回一个包含原子数组值已经非数组的新数组.
   * 例子:
      - var array = [1];
      - var other = _.concat(array, 2, [3], [[4]]);
      - console.log(other);
      - => [1, 2, 3, [4]]
      - console.log(array);
      - => [1]
   **/
  concat: function(array, other) {
    var newArray = []
    for (i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        for (j = 0; j < arguments[i].length; j++) {
          newArray.push(arguments[i][j])
        }
      } else {
        newArray.push(arguments[i])
      }
    }
    return newArray
  },

  /**
   * 作用:
      -创建一个array数组，数组内每个值不包含在其他给定的数组中.
   * 参数:
      -array:唯一数组;
      -values:与array比较的数组.
   * 返回值
      -newArray:返回一个剔除values数组有的值的新数组.
   * 例子:
      - .difference([3, 2, 1], [4, 2]);
      - => [3, 1]
   **/
  difference: function(array, values) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (array[i] == values[j]) {
          array[i] = false
        }
      }
      if (array[i] != false) {
        newArray.push(array[i])
      }
    }
    return newArray
  },

  /**
   * 作用:
      -创建一个array数组，删除数组中前n项并把剩余值输出到新的数组.
   * 参数:
      -array:需要处理的数组;
      -n:删除数量.
   * 返回值
      -newArray:返回一个剔除前n项的新数组.
   * 例子:
      - .drop([1, 2, 3]);
      - => [2, 3] 
      - .drop([1, 2, 3], 2);
      - => [3] 
      - .drop([1, 2, 3], 5);
      - => [] 
      - .drop([1, 2, 3], 0);
      - => [1, 2, 3]
   **/
  drop: function(array, n) {
    var newArray = []
    var x = newArray.length
    if (n == 1 || n == undefined) {
      array.splice(0, 1)
      newArray = array.slice()
    } else {
      for (var i = n;; i--) {
        if (i > 0) {
          array.splice(0, 1)
          newArray = array.slice()
        } else {
          break;
        }
      }
    }
    return newArray
  },

  /**
   * 作用:
      -创建一个array数组，删除数组中后n项并把剩余值输出到新的数组.
   * 参数:
      -array:需要处理的数组;
      -n:删除数量.
   * 返回值
      -newArray:返回一个剔除后n项的新数组.
   * 例子:
      - .dropRight([1, 2, 3]);
      - => [1, 2]
      - .dropRight([1, 2, 3], 2);
      - => [1]
      - .dropRight([1, 2, 3], 5);
      - => []
      - .dropRight([1, 2, 3], 0);
      - => [1, 2, 3]
   **/
  dropRight: function(array, n) {
    var newArray = []
    if (n == undefined) {
      n = 1
    }
    for (var i = 0; i < array.length - n; i++) {
      newArray.push(array[i])
    }
    return newArray
  },

  /**
   * 作用:
      -创建一个array数组，使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）.
   * 参数:
      -array:需要处理的数组;
      -value:填充给array的值.
   * 返回值
      -array
   * 例子:
      - var array = [1, 2, 3];
      - .fill(array, 'a');
      - console.log(array);
      - => ['a', 'a', 'a']
      - .fill(Array(3), 2);
      - => [2, 2, 2] 
      - .fill([4, 6, 8, 10], '*', 1, 3);
      - => [4, '*', '*', 10]
   **/
  fill: function(array, value, start, end) {
    if (start == undefined) {
      var start = 0
    }
    if (end == undefined) {
      var end = array.length
    }
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  /**
   * 作用:
      -减少一级数组嵌套深度.
   * 参数:
      -array:需要处理的数组;
   * 返回值
      -newArray:返回一个减少后的新数组.
   * 例子:
      - .flatten([1, [2, [3, [4]], 5]]);
      - => [1, 2, [3, [4]], 5]
   **/
  flatten: function(array) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] == "object") {
        for (var j = 0; j < array[i].length; j++) {
          newArray.push(array[i][j])
        }
      } else {
        newArray.push(array[i])
      }
    }
    return newArray
  },

  /**
   * 作用:
      -递归为一维数组.
   * 参数:
      -array:需要处理的数组;
   * 返回值
      -newArray:返回一个新数组.
   * 例子:
      - .flattenDeep([1, [2, [3, [4]], 5]]);
      - => [1, 2, 3, 4, 5]
   **/
  flattenDeep: function(array) {
    debugger;
    var newArray = []
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "object" && typeof array[i] !== undefined) {
        mArray.push(array[i])
      } else if (typeof array[i] == "object") {
        LiGaoWei.flattenDeep(nArray)
      }
    }
    return newArray
  },


  /**
   * 作用:
      -返回一个由键值对pairs构成的对象.
   * 参数:
      -pairs:键值对;
   * 返回值
      -返回一个新对象.
   * 例子:
      - .fromPairs([['fred', 30], ['barney', 40]]);
      - => { 'fred': 30, 'barney': 40 }
   **/
  fromPairs: function(pairs) {

  },


}
