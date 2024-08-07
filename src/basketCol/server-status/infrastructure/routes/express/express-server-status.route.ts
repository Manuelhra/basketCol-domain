import { Router } from 'express';
import { serverStatusGetController } from '../../dependency-injection';

const register = (router: Router) => {
  router.get('/server-status', serverStatusGetController.run.bind(serverStatusGetController));
};

export default register;
