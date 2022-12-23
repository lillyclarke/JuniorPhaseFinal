const { db, Student, Campus } = require("../server/db/index");

const seed = async () => {
  await db.sync({ force: true });

  const campus1 = await Campus.create({
    name: "Campus 1",
    imageUrl: "https://www.fillmurray.com/300/300",
    description: "This is campus 1",
    address: "1234 Main St",
  });
  const campus2 = await Campus.create({
    name: "Campus 2",
    imageUrl: "https://www.fillmurray.com/300/300",
    description: "This is campus 2",
    address: "1134 Cool St",
  });
  const campus3 = await Campus.create({
    name: "Campus 3",
    imageUrl: "https://www.fillmurray.com/300/300",
    description: "This is campus 3",
    address: "1034 Yakima St",
  });
  const campus4 = await Campus.create({
    name: "Campus 4",
    imageUrl: "https://www.fillmurray.com/300/300",
    description: "This is campus 4",
    address: "1334 Division St",
  });
  const campus5 = await Campus.create({
    name: "Campus 5",
    imageUrl: "https://www.fillmurray.com/300/300",
    description: "This is campus 5",
    address: "1234 Cooper St",
  });

  const student1 = await Student.create({
    firstName: "Cody",
    lastName: "Pug",
    email: "codyPug@yaho.com",
    gpa: 3.5,
    campusId: campus1.id,
  });
  const student2 = await Student.create({
    firstName: "Murphy",
    lastName: "Pug",
    email: "murphyPug",
    gpa: 3.5,
    campusId: campus2.id,
  });
  const student3 = await Student.create({
    firstName: "Luna",
    lastName: "Pug",
    email: "lunaPug",
    gpa: 3.5,
    campusId: campus3.id,
  });
  const student4 = await Student.create({
    firstName: "Lola",
    lastName: "Pug",
    email: "lolaPug",
    gpa: 3.5,
    campusId: campus4.id,
  });
  const student5 = await Student.create({
    firstName: "Lucy",
    lastName: "Pug",
    email: "lucyPug",
    gpa: 3.5,
    campusId: campus5.id,
  });

  let campuses = await Campus.findAll();
  console.log("campuses", campuses[0]);
  console.log("campuses", campuses[0].name);

  let students = await Student.findAll();
  console.log("students", students[0]);
  console.log("students", students[0].firstName);
};

module.exports = seed;
