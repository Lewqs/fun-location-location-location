const updateRemoteStudents = require("../index");

describe("updateRemoteStudents", () => {
  test("returns empty array when not passed array", () => {
    expect(updateRemoteStudents()).toEqual([]);
  });
  test("returns a new array", function () {
    let inputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    expect(updateRemoteStudents(inputArray)).not.toBe(inputArray);
  });
  test("does not mutate the input array", function () {
    let inputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    let copyInputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    updateRemoteStudents(inputArray);
    expect(inputArray).not.toBe(copyInputArray);
  });
  test("inserts 'remote' for each element that do not have a location property", function () {
    let inputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    let output = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    updateRemoteStudents(inputArray);
    expect(updateRemoteStudents(inputArray)).toEqual(output);
  });
});
