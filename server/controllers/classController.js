const pool = require('../db')

exports.getClasses = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        classes.id,
        classes.level,
        classes.name AS class_name,
        teachers.name AS teacher_name
      FROM classes
      JOIN teachers ON classes.teacher_id = teachers.id`
    )

    const classes = result.rows.map(record => ({
      level: record.level,
      name: record.class_name,
      formTeacher: {
        name: record.teacher_name
      }
    }))

    res.status(200).json({ data: classes })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error." })
  }
}

exports.createClass = async (req, res) => {
  let { level, name, teacherEmail } = req.body

  level = level?.trim()
  name = name?.trim()
  teacherEmail = teacherEmail?.trim()

  if (!level) {
    return res.status(400).json({ error: "Level is required." })
  }

  if (!name) {
    return res.status(400).json({ error: "Class name is required." })
  }

  if (!teacherEmail) {
    return res.status(400).json({ error: "Teacher email is required." })
  }

  try {
    const teacherResult = await pool.query(
      `SELECT * FROM teachers WHERE email = $1`,
      [teacherEmail]
    )

    if (teacherResult.rows.length === 0) {
      console.log("No teacher found for email:", teacherEmail)
      return res.status(400).json({ error: "Teacher is required." })
    }

    const teacherId = teacherResult.rows[0].id

    const classResult = await pool.query(
      `SELECT * FROM classes WHERE teacher_id = $1`,
      [teacherId]
    )

    if (classResult.rows.length > 0) {
      return res.status(400).json({ error: "Teacher is already assigned as form teacher to a class. Please select another teacher." })
    }

    const insertClass = await pool.query(
      `INSERT INTO classes (level, name, teacher_id)
       VALUES ($1, $2, $3)
       RETURNING id, level, name`,
      [level, name, teacherId]
    )

    res.status(201).json(insertClass.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error." })
  }
}