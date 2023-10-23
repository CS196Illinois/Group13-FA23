import TEMPdao from './TEMPdao';
import { CreateStudent, PatchStudent } from './student.dto'

class StudentsService {
  async create(resource: CreateStudent) {
    return TEMPdao.addStudent(resource);
  }

  async delete(netid: string) {
    return TEMPdao.removeStudentById(netid);
  }

  async list(limit: number, page: number) {
    return TEMPdao.getStudents()
  }

  async patch(netid: string, resource: PatchStudent) {
    return TEMPdao.patchStudentById(netid, resource);
  }

  async get(netid: string) {
    return TEMPdao.getStudentByNetId(netid);
  }
}

export default new StudentsService();
