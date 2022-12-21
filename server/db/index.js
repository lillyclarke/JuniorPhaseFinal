const db = require('./db');
const Student = require('./Student');
const Campus = require('./Campus');

//Associations
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};
