import {CommonRoutesConfig} from '../common/common.routes.config';
import StudentsController from './students.controller';
import StudentsMiddleware from './students.middleware';
import express from 'express';

export class StudentsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'StudentsRoutes')
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/students`)
      .get(StudentsController.listStudents)
      .post(
        StudentsMiddleware.validateRequiredStudentBodyFields,
        StudentsMiddleware.validateNoDuplicateNetId,
        StudentsController.createStudent
      );

    this.app
      .route(`/students/:netid`)
      .all(StudentsMiddleware.validateStudentExists)
      .get(StudentsController.getStudent)
      .delete(StudentsController.deleteStudent);

    this.app.patch(`/students/:netid`, [
      StudentsMiddleware.validateStudentExists,
      StudentsController.patchStudent
    ]);

    return this.app;
  }
}
