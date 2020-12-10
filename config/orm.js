const connection = require("./connection.js");

// alright, I finally saw the sense in this. Taken from activity 17 from week 13
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("? ");
  }

  return arr.toString();
}

const orm = {
  create(table, columns, ...newVals) {
    const tableStr = table.toString();
    const [vals] = newVals;
    if (!tableStr || !columns || !vals) {
      throw "All variables are required for orm.create and must not be null or undefined";
    }
    const queryString = `INSERT INTO ? (?) VALUES (${printQuestionMarks(
      newVals.length
    )})`;
    connection.query(queryString, [tableStr, columns, ...newVals]);
  },
};
module.exports = orm;
