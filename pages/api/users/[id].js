import db from '../../../lib/db';
import { createClient } from 'redis';
import bcrypt from 'bcrypt';

// Setup Redis client
const redisClient = createClient();

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
})();

export default async function handler(req, res) {
  const userId = req.query.id;
  const cacheKey = 'all_users';

  // ✅ UPDATE USER
  if (req.method === 'PUT') {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res.status(400).json({
        error: 'At least one of name, email, or password must be provided',
      });
    }

    try {
      const fields = [];
      const values = [];

      if (name) {
        fields.push('name = ?');
        values.push(name);
      }

      if (email) {
        fields.push('email = ?');
        values.push(email);
      }

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        fields.push('password = ?');
        values.push(hashedPassword);
      }

      values.push(userId); // WHERE id = ?

      const query = `UPDATE profile SET ${fields.join(', ')} WHERE id = ?`;
      const [result] = await db.query(query, values);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      await redisClient.del(cacheKey); // Clear cache after update

      return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Update error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // ✅ DELETE USER
  if (req.method === 'DELETE') {
    try {
      const [result] = await db.query('DELETE FROM profile WHERE id = ?', [userId]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      await redisClient.del(cacheKey); // Clear cache after deletion

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // ❌ Unsupported method
  return res.status(405).json({ error: 'Method Not Allowed' });
}