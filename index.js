function updateRemoteStudents(arr) {
  if (!arr || arr.length < 1) return [];
  const newArr = arr.map((arr) => {
    if (!arr.location) {
      arr.location = "remote";
    }
    return arr;
  });
  return newArr;
}

module.exports = updateRemoteStudents;
