"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const students_controller_1 = __importDefault(require("./students.controller"));
const students_middleware_1 = __importDefault(require("./students.middleware"));
class StudentsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'StudentsRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/students`)
            .get(students_controller_1.default.listStudents)
            .post(students_middleware_1.default.validateRequiredStudentBodyFields, students_middleware_1.default.validateNoDuplicateNetId, students_controller_1.default.createStudent);
        this.app
            .route(`/students/:netid`)
            .all(students_middleware_1.default.validateStudentExists)
            .get(students_controller_1.default.getStudent)
            .delete(students_controller_1.default.deleteStudent);
        this.app.patch(`/students/:netid`, [
            students_middleware_1.default.validateStudentExists,
            students_controller_1.default.patchStudent
        ]);
        return this.app;
    }
}
exports.StudentsRoutes = StudentsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0dWRlbnRzL3N0dWRlbnRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLGdGQUF1RDtBQUN2RCxnRkFBdUQ7QUFHdkQsTUFBYSxjQUFlLFNBQVEseUNBQWtCO0lBQ3BELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyw2QkFBa0IsQ0FBQyxZQUFZLENBQUM7YUFDcEMsSUFBSSxDQUNILDZCQUFrQixDQUFDLGlDQUFpQyxFQUNwRCw2QkFBa0IsQ0FBQyx3QkFBd0IsRUFDM0MsNkJBQWtCLENBQUMsYUFBYSxDQUNqQyxDQUFDO1FBRUosSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDekIsR0FBRyxDQUFDLDZCQUFrQixDQUFDLHFCQUFxQixDQUFDO2FBQzdDLEdBQUcsQ0FBQyw2QkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFDbEMsTUFBTSxDQUFDLDZCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1lBQ2pDLDZCQUFrQixDQUFDLHFCQUFxQjtZQUN4Qyw2QkFBa0IsQ0FBQyxZQUFZO1NBQ2hDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUE1QkQsd0NBNEJDIn0=