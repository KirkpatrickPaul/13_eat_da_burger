const orm = require("../config/orm.js");

const burger = {
  getAll() {
    return orm.readAll("burgers");
  },
  createOne(burgerName) {
    return orm.create("burgers", "name", burgerName);
  },
  updateOne(valsObj, idNum) {
    return orm.updateOne("burgers", valsObj, "id", idNum);
  },
  deleteOne(idNum) {
    return orm.deleteOne("burgers", "id", idNum);
  },
};
module.exports = burger;
