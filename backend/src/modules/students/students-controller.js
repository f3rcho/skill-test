const asyncHandler = require('express-async-handler');
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require('./students-service');

const handleGetAllStudents = asyncHandler(async (req, res) => {
  //write your code
  const { name, className, section, roll } = req.query;
  const students = await getAllStudents({ name, className, section, roll });
  res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  //write your code
  const paylaod = req.body;
  const student = await addNewStudent(paylaod);
  res.json(student);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  //write your code
  const { id: studentId } = req.body;
  const payload = req.body;
  const student = await updateStudent({ ...payload, studentId });
  res.json(student);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  //write your code
  const { id } = req.params;
  const student = await getStudentDetail(id);
  res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  //write your code
  const { userId, reviewerId, status } = req.body;
  const studentStatus = await setStudentStatus({ userId, reviewerId, status });
  res.json(studentStatus);
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
