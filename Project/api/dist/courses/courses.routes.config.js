"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const courses_controller_1 = __importDefault(require("./courses.controller"));
class CoursesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CoursesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/courses/:subject/:number`)
            .get(courses_controller_1.default.getCourse);
        //this.app
        //  .route(`/courses/:crn`)
        //  .get(CoursesController.getCourse);
        return this.app;
    }
}
exports.CoursesRoutes = CoursesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlcy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY291cnNlcy9jb3Vyc2VzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLDhFQUFxRDtBQUdyRCxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDbkQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsMkJBQTJCLENBQUM7YUFDbEMsR0FBRyxDQUFDLDRCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBDLFVBQVU7UUFDViwyQkFBMkI7UUFDM0Isc0NBQXNDO1FBRXRDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFoQkQsc0NBZ0JDIn0=