const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

function adminAuthentication(req, res, next) {
  const { username, password } = req.headers; 
  const admin = ADMINS.find(a => a.username === username && a.password === password);

  if (admin) {
    next();
  } else {
    res.status(403).json({message: 'Admin authentication failed'});
    return;
  }
}

// Admin routes
app.post('/admin/signup', (req, res) => {
  const admin = req.body;
  const existingAdmin = ADMINS.find(a => a.username === admin.username);
  console.log(existingAdmin);
  if (existingAdmin) {
    res.status(403).json({message: 'Admin already exists'});
    return;
}
  else {
    ADMINS.push(admin);
    res.status(200).json({message:'Admin created successfully'});
  }
});

app.post('/admin/login', adminAuthentication, (req, res) => {
  // logic to log in admin
  res.json({message: 'Logged in successfully'});
});

app.post('/admin/courses', adminAuthentication, (req, res) => {
  const course = req.body;

  course.id = Date.now();
  const existingCourse = COURSES.find(c => c.title === course.title);
  if (existingCourse) {
    res.status(403).json({ message: 'Course with same title exists' });
    return;
  } 
  COURSES.push(course)

  res.status(201).json({message: 'Course created successfully', courseId: course.id});
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
