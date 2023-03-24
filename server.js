const express = require('express')
const app = express()
const port = 4567;

app.get('/', index);
app.get('/adminlogin', adminLogin);
app.get('/facultylogin', facultyLogin);
app.get('/studentlogin', studentLogin);
app.get('/admin', admin);
app.get('/faculty', faculty);
app.get('/student', student);

app.get('/admin/fregistration', facultyRegistration);
app.get('/admin/fview', viewFaculty);
app.get('/admin/sregistration', studentRegistration);
app.get('/admin/sview', viewStudent);
app.get('/admin/ttadd', addTimeTable);
app.get('/admin/ttview', viewTimeTable);
app.get('/admin/viewmarks', viewMarks);
app.get('/admin/changepwd', adminchangepwd);

app.get('/faculty/profile', fviewProfile);
app.get('/faculty/sview', fviewStudent);
app.get('/faculty/ttview', fviewTimeTable);
app.get('/faculty/addmarks', addMarks);
app.get('/faculty/viewmarks', fviewMarks);
app.get('/faculty/changepwd', facultychangepwd);

app.get('/student/profile', sviewProfile);
app.get('/student/ttview', sviewTimeTable);
app.get('/student/viewmarks', sviewMarks);
app.get('/student/changepwd', studentchangepwd);

function index(req, res) {
	res.sendFile("./index.html", {root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./admin.html", {root:__dirname});
}

function facultyLogin(req, res) {
	res.sendFile("./faculty.html", {root:__dirname});
}

function studentLogin(req, res) {
	res.sendFile("./student.html", {root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/home.html", {root:__dirname});
}

function facultyRegistration(req, res) {
	res.sendFile("Admin/facultyRegistration.html", {root:__dirname});
}

function viewFaculty(req, res) {
	res.sendFile("Admin/viewFaculty.html", {root:__dirname});
}

function studentRegistration(req, res) {
	res.sendFile("Admin/studentRegistration.html", {root:__dirname});
}

function viewStudent(req, res) {
	res.sendFile("Admin/viewStudents.html", {root:__dirname});
}

function addTimeTable(req, res) {
	res.sendFile("Admin/addTimeTable.html", {root:__dirname});
}

function viewTimeTable(req, res) {
	res.sendFile("Admin/viewTimeTable.html", {root:__dirname});
}

function viewMarks(req, res) {
	res.sendFile("Admin/viewMarks.html", {root:__dirname});
}

function adminchangepwd(req, res) {
	res.sendFile("Admin/changePassword.html", {root:__dirname});
}

function faculty(req, res) {
	res.sendFile("Faculty/home.html", {root:__dirname});
}

function fviewProfile(req, res) {
	res.sendFile("Faculty/profile.html", {root:__dirname});
}

function fviewStudent(req, res) {
	res.sendFile("Faculty/viewStudents.html", {root:__dirname});
}

function fviewTimeTable(req, res) {
	res.sendFile("Faculty/viewTimeTable.html", {root:__dirname});
}

function addMarks(req, res) {
	res.sendFile("Faculty/addMarks.html", {root:__dirname});
}

function fviewMarks(req, res) {
	res.sendFile("Faculty/viewMarks.html", {root:__dirname});
}

function facultychangepwd(req, res) {
	res.sendFile("Faculty/changePassword.html", {root:__dirname});
}

function student(req, res) {
	res.sendFile("Student/home.html", {root:__dirname});
}

function sviewProfile(req, res) {
	res.sendFile("Student/profile.html", {root:__dirname});
}

function sviewMarks(req, res) {
	res.sendFile("Student/viewMarks.html", {root:__dirname});
}

function sviewTimeTable(req, res) {
	res.sendFile("Student/viewTimeTable.html", {root:__dirname});
}

function studentchangepwd(req, res) {
	res.sendFile("Student/changePassword.html", {root:__dirname});
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
