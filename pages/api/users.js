import db from '../../lib/db';
import { createClient } from 'redis';

const redisClient = createClient();

redisClient.on('error', (err) => console.error('Redis Client Error', err));

// Connect Redis client once
(async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
})();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const cacheKey = 'all_users';

  try {
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      console.log('✅ Redis cache hit');
      return res.status(200).json({
        source: 'redis',
        data: JSON.parse(cachedData),
      });
    }

    console.log('⛔ Redis miss - Fetching from MySQL');
    const [rows] = await db.query('SELECT * FROM users.profile');

    await redisClient.set(cacheKey, JSON.stringify(rows), {
      EX: 3600, // Cache for 1 hour
    });

    res.status(200).json({
      source: 'mysql',
      data: rows,
    });
  } catch (error) {
    console.error('DB/Redis error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
