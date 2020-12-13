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
    return new Promise((resolve, reject) => {
      const [vals] = newVals;
      if (!table || !columns || !vals) {
        return reject(
          "All variables are required for orm.create and must not be null or undefined"
        );
      }
      const queryString = `INSERT INTO ?? (??) 
      VALUES (${printQuestionMarks(newVals.length)})`;
      connection.query(
        queryString,
        [table, columns, ...newVals],
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        }
      );
    });
  },
  // taken from Byron's example in class and later posted on Slack
  readAll(table, conditionCol, valOfCol) {
    return new Promise((resolve, reject) => {
      if (!table || !columns || !valOfCol) {
        return reject(
          "All variables are required for orm.read and must not be null or undefined"
        );
      }
      const queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(
        queryString,
        [table, conditionCol, valOfCol],
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        }
      );
    });
  },
  updateOne(table, valsObj, conditionCol, condition) {
    return new Promise((resolve, reject) => {
      const objType = typeof valsObj;
      if (!table || !valsObj || !conditionCol || !condition) {
        return reject(
          "All variables are required for orm.update and must not be null or undefined"
        );
      }
      if (objType !== "object") return reject("valsObj must be an object");
      const queryString = `UPDATE ?? SET ?? WHERE ?? = ?`;
      connection.query(
        queryString,
        [table, valsObj, conditionCol, condition],
        (err,
        (data) => {
          if (err) return reject(err);
          resolve(data);
        })
      );
    });
  },
  deleteOne(table, conditionCol, condition) {
    return new Promise((resolve, reject) => {
      if (!table || !columns || !condition) {
        return reject(
          "All variables are required for orm.delete and must not be null or undefined"
        );
      }
      const queryString = "DELETE FROM ?? WHERE ?? = ?";
      connection.query(
        queryString,
        [table, conditionCol, condition],
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        }
      );
    });
  },
};
module.exports = orm;
