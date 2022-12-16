const updateRemoteStudents = require("../index");

describe("updateRemoteStudents", () => {
  test("returns empty array when passed empty array", () => {
    expect(updateRemoteStudents([])).toEqual([]);
  });
  test("returns a new array", function () {
    const students = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const copyStudents = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    expect(updateRemoteStudents(students)).not.toBe(copyStudents);
  });
  test("does not mutate the input array", function () {
    const students = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const copyStudents = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    updateRemoteStudents(students);
    expect(students).toEqual(copyStudents);
  });
  test("inserts 'remote' for each element that do not have a location property", function () {
    const inputStudents = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const outputStudents = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    expect(updateRemoteStudents(inputStudents)).toEqual(outputStudents);
  });
});
