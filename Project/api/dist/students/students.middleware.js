"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const students_service_1 = __importDefault(require("./students.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:students-controller');
class StudentsMiddleware {
    validateRequiredStudentBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.netid) {
                next();
            }
            else {
                res.status(400).send({
                    error: 'Missing netid'
                });
            }
        });
    }
    validateNoDuplicateNetId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield students_service_1.default.get(req.body.netid);
            if (student) {
                res.status(400).send({
                    error: 'netID already exists'
                });
            }
            else {
                next();
            }
        });
    }
    validateStudentExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield students_service_1.default.get(req.body.netid);
            if (student) {
                next();
            }
            else {
                res.status(400).send({
                    error: `${req.body.netid} not found`
                });
            }
        });
    }
}
exports.default = new StudentsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0dWRlbnRzL3N0dWRlbnRzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRUFBZ0Q7QUFDaEQsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQzlELE1BQU0sa0JBQWtCO0lBQ2hCLGlDQUFpQyxDQUNyQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUM5QixJQUFJLEVBQUUsQ0FBQTthQUNQO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUsZUFBZTtpQkFDdkIsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO0tBQUE7SUFFSyx3QkFBd0IsQ0FDNUIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sMEJBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbkIsS0FBSyxFQUFFLHNCQUFzQjtpQkFDOUIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxFQUFFLENBQUM7YUFDUjtRQUNILENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUN6QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSwwQkFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELElBQUcsT0FBTyxFQUFFO2dCQUNWLElBQUksRUFBRSxDQUFBO2FBQ1A7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxZQUFZO2lCQUNyQyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIn0=