/**
 * Initialize your data structure here.
 */
var Logger = function () {
  this.msgTimeMap = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  const lastTime = this.msgTimeMap[message];
  if (lastTime!==undefined) {
    if (timestamp - 10 >= lastTime) {
      this.msgTimeMap[message] = timestamp;
      return true;
    } else {
      return false;
    }
  }
  this.msgTimeMap[message] = timestamp;
  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

const logger = new Logger();
logger.shouldPrintMessage(1, "foo"); // 返回 true ，下一次 "foo" 可以打印的时间戳是 1 + 10 = 11
logger.shouldPrintMessage(2, "bar"); // 返回 true ，下一次 "bar" 可以打印的时间戳是 2 + 10 = 12
logger.shouldPrintMessage(3, "foo"); // 3 < 11 ，返回 false
logger.shouldPrintMessage(8, "bar"); // 8 < 12 ，返回 false
logger.shouldPrintMessage(10, "foo"); // 10 < 11 ，返回 false
logger.shouldPrintMessage(11, "foo"); // 11 >= 11 ，返回 true ，下一次 "foo" 可以打印的时间戳是 11 + 10
