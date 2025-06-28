const pool = require('../db')

exports.getTeachers = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT name, subject, email, contact_number FROM teachers`
    )

    res.status(200).json({ data: result.rows })
  } catch (err) {
    console.error('Error getting teacher:', err)
    res.status(500).json({ error: "Internal server error." })
  }
}

exports.createTeacher = async (req, res) => {
  let { name, subject, email, contactNumber } = req.body

  name = name?.trim()
  subject = subject?.trim()
  email = email?.trim()
  contactNumber = contactNumber?.trim()

  if (!name) {
    return res.status(400).json({ error: "Name is required." })
  }

  if (!subject) {
    return res.status(400).json({ error: "Subject is required." })
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required." })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email format is invalid." })
  }

  if (!contactNumber) {
    return res.status(400).json({ error: "Contact number is required." })
  } else if (!/^\d{5,15}$/.test(contactNumber)) {
    return res.status(400).json({ error: "Contact number must contain only digits (5-15 numbers)." })
  }

  if (!name || !subject || !email || !contactNumber) {
    return res.status(400).json({
      error: 'All fields are required.'
    })
  }

  try {
    const result = await pool.query(
      `INSERT INTO teachers (name, subject, email, contact_number)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [name, subject, email, contactNumber]
    )

    return res.status(201).json(result.rows[0])
  } catch (err) {
    console.error('Error inserting teacher:', err)
    if (err.code === '23505') {
      res.status(400).json({ error: "A teacher with this email already exists." })
    } else {
      console.log(err)
      res.status(500).json({ error: "Internal server error." })
    }
  }
}