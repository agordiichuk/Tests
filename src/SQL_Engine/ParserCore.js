define('SQL_Engine/ParserCore', [
  'SQL_Engine/ParserPattern'
], function (Pattern) {

  return {
    txt: function(text) {
      var exec = this.exec;

      return new Pattern ( function (str, pos) {
        if (str.substr(pos, text.length) === text) {
          return {
            res: text,
            end: pos + text.length
          }
        }
      })
    },

    //Reg expextaton
    rgx: function () {

    }
  }
});