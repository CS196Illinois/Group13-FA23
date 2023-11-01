"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class StudentsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CoursesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/courses/:subjectCode/:courseNumber`);
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
exports.StudentsRoutes = StudentsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlcy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY291cnNlcy9jb3Vyc2VzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQWtFO0FBR2xFLE1BQWEsY0FBZSxTQUFRLHlDQUFrQjtJQUNwRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1FBQzdDLCtCQUErQjtRQUMvQixRQUFRO1FBQ04sd0RBQXdEO1FBQ3hELCtDQUErQztRQUMvQywwQ0FBMEM7UUFDNUMsSUFBSTtRQUVOOzs7Ozs7Ozs7OztVQVdFO1FBRUYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQTlCRCx3Q0E4QkMifQ==