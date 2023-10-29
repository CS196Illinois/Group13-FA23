import { CreateStudent, PatchStudent } from './student.dto';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class TEMPdao {
    students: Array<CreateStudent> = [];

    constructor() {
        log('Created new instance of TEMPdao');
    }

    async addStudent(student: CreateStudent) {
        this.students.push(student);
        return student.netid;
    }

    async getStudents() {
        return this.students;
    }

    async getStudentByNetId(netid: string) {
        return this.students.find((student: { netid: string }) => student.netid === netid);
    }

    async patchStudentById(netid: string, student: PatchStudent) {
        const objIndex = this.students.findIndex(
            (obj: { netid: string }) => obj.netid === netid
        );
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
    }

    async removeStudentById(netid: string) {
        const objIndex = this.students.findIndex(
            (obj: { netid: string }) => obj.netid === netid 
        );
        this.students.splice(objIndex, 1);
        return `${netid} removed`;
    }
}

export default new TEMPdao();
