import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM profile ORDER BY id ASC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('DB query error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
