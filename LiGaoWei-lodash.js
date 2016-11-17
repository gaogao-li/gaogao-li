var LiGaoWei = {
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

}
