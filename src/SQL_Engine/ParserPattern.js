/**
 * Created by andriigordiichuk on 2/25/15.
 */
define('SQL_Engine/ParserPattern', [], function () {

  var Pattern = function(execFn) {
    this.exec = execFn;
  };

  Pattern.prototype = {
    constructor: Pattern,
    then: function(transformFn) {
      var exec = this.exec;

      return new Pattern(function(str, pos) {
        var result;

        result = exec(str, pos || 0);

        return result && {
            res: transformFn(result.res),
            end: result.end
          }
      });
    }
  };

  return Pattern;
  
});