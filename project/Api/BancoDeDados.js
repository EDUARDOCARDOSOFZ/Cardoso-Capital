import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: 'https://willing-labrador-44682.upstash.io',
  token: 'Aa6KAAIjcDE5MWUyZWM4YzM4YzE0OGE2YjU5NmNjMzJjMjRmNDgyOXAxMA',
});

export default redis;
