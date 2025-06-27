const pool = require('./index')

  (async () => {
    try {
      const res = await pool.query('SELECT NOW()')
      console.log('Database time:', res.rows[0])
      process.exit(0)
    } catch (err) {
      console.error('Connection error:', err)
      process.exit(1)
    }
  })()