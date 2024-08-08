import { Router } from 'express';

const register = (router: Router) => {
  router.post('users/host');
};

export default register;
