import {CommonRoutesConfig} from '../common/common.routes.config';
import CoursesController from './courses.controller';
import express from 'express';

export class CoursesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CoursesRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/courses/:subject/:number`)
      .get(CoursesController.getCourse);
    
    //this.app
    //  .route(`/courses/:crn`)
    //  .get(CoursesController.getCourse);

    return this.app;
  }
}
