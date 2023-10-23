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
class StudentsController {
    listStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield students_service_1.default.list(100, 0);
            res.status(200).send(students);
        });
    }
    getStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield students_service_1.default.get(req.body.netid);
            res.status(200).send(student);
        });
    }
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const netid = yield students_service_1.default.create(req.body);
            res.status(201).send({ netid: netid });
        });
    }
    patchStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield students_service_1.default.patch(req.body.netid, req.body));
            res.status(204).send();
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield students_service_1.default.delete(req.body.netid));
            res.status(204).send();
        });
    }
}
exports.default = new StudentsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0dWRlbnRzL3N0dWRlbnRzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRUFBaUQ7QUFDakQsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQzlELE1BQU0sa0JBQWtCO0lBQ2hCLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLDBCQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBTSxPQUFPLEdBQUcsTUFBTSwwQkFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM3RCxNQUFNLEtBQUssR0FBRyxNQUFNLDBCQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxHQUFHLENBQUMsTUFBTSwwQkFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM3RCxHQUFHLENBQUMsTUFBTSwwQkFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQyJ9