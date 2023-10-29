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
const TEMPdao_1 = __importDefault(require("./TEMPdao"));
class StudentsService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return TEMPdao_1.default.addStudent(resource);
        });
    }
    delete(netid) {
        return __awaiter(this, void 0, void 0, function* () {
            return TEMPdao_1.default.removeStudentById(netid);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return TEMPdao_1.default.getStudents();
        });
    }
    patch(netid, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return TEMPdao_1.default.patchStudentById(netid, resource);
        });
    }
    get(netid) {
        return __awaiter(this, void 0, void 0, function* () {
            return TEMPdao_1.default.getStudentByNetId(netid);
        });
    }
}
exports.default = new StudentsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0dWRlbnRzL3N0dWRlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBZ0M7QUFHaEMsTUFBTSxlQUFlO0lBQ2IsTUFBTSxDQUFDLFFBQXVCOztZQUNsQyxPQUFPLGlCQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxLQUFhOztZQUN4QixPQUFPLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLGlCQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDOUIsQ0FBQztLQUFBO0lBRUssS0FBSyxDQUFDLEtBQWEsRUFBRSxRQUFzQjs7WUFDL0MsT0FBTyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFSyxHQUFHLENBQUMsS0FBYTs7WUFDckIsT0FBTyxpQkFBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9