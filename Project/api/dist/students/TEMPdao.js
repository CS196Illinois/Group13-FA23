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
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class TEMPdao {
    constructor() {
        this.students = [];
        log('Created new instance of TEMPdao');
    }
    addStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            this.students.push(student);
            return student.netid;
        });
    }
    getStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.students;
        });
    }
    getStudentByNetId(netid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.students.find((student) => student.netid === netid);
        });
    }
    patchStudentById(netid, student) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.students.findIndex((obj) => obj.netid === netid);
            let currentstudent = this.students[objIndex];
            const allowedPatchFields = [
                'name',
                'pronouns',
                'coed',
                'major',
                'minor',
            ];
            for (let field of allowedPatchFields) {
                if (field in student) {
                    // @ts-ignore
                    currentstudent[field] = student[field];
                }
            }
            this.students.splice(objIndex, 1, currentstudent);
            return `${student.netid} patched`;
        });
    }
    removeStudentById(netid) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.students.findIndex((obj) => obj.netid === netid);
            this.students.splice(objIndex, 1);
            return `${netid} removed`;
        });
    }
}
exports.default = new TEMPdao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVEVNUGRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0dWRlbnRzL1RFTVBkYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxPQUFPO0lBR1Q7UUFGQSxhQUFRLEdBQXlCLEVBQUUsQ0FBQztRQUdoQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUssVUFBVSxDQUFDLE9BQXNCOztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQztLQUFBO0lBRUssV0FBVzs7WUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsS0FBYTs7WUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQTBCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDdkYsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsS0FBYSxFQUFFLE9BQXFCOztZQUN2RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDcEMsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FDbEQsQ0FBQztZQUNGLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsTUFBTSxrQkFBa0IsR0FBRztnQkFDekIsTUFBTTtnQkFDTixVQUFVO2dCQUNWLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxPQUFPO2FBQ1IsQ0FBQztZQUNGLEtBQUssSUFBSSxLQUFLLElBQUksa0JBQWtCLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtvQkFDbEIsYUFBYTtvQkFDYixjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQzthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNsRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLGlCQUFpQixDQUFDLEtBQWE7O1lBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNwQyxDQUFDLEdBQXNCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUNsRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksT0FBTyxFQUFFLENBQUMifQ==