import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class StudentsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CoursesRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/courses/:subjectCode/:courseNumber`)
      //.get(CoursesController.get23)
      //.post(
        // StudentsMiddleware.validateRequiredStudentBodyFields,
        // StudentsMiddleware.validateNoDuplicateNetId,
        // StudentsController.crea;windowteStudent
      //);

    /*
    this.app
      .route(`/students/:netid`)
      .all(StudentsMiddleware.validateStudentExists)
      .get(StudentsController.getStudent)
      .delete(StudentsController.deleteStudent);

    this.app.patch(`/students/:netid`, [
      StudentsMiddleware.validateStudentExists,
      StudentsController.patchStudent
    ]);
    */

    return this.app;
  }
}
