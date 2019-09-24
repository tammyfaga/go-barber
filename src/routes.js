import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Tammy Fagá',
    email: 'tammy@gmail.com',
    password_hash: '65465465',
  });

  return res.json(user);
});

export default routes;
