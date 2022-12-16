function updateRemoteStudents(arr) {
  return arr.map(({ ...student }) => {
    if (!student.location) student.location = "remote";
    return student;
  });
}

module.exports = updateRemoteStudents;
