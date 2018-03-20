import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import DomainCtrl from './controllers/domain';

import Cat from './models/cat';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const domainCtrl = new DomainCtrl();

  router.route('/cats').post(catCtrl.getAll);
  router.route('/cats/count').post(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);
  router.route('/cat/insert').post(catCtrl.insert);

  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  
  router.route('/domains').post(domainCtrl.getAll);
  router.route('/domains/count').post(domainCtrl.count);
  router.route('/domains/insert').post(domainCtrl.insert);
  router.route('/domains/get/:id').get(domainCtrl.get);
  router.route('/domains/delete/:id').delete(domainCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}