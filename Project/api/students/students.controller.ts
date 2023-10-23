import express from 'express';
import StudentsService from './students.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:students-controller');
class StudentsController {
  async listStudents(req: express.Request, res: express.Response) {
    const students = await StudentsService.list(100, 0);
    res.status(200).send(students);
  }

  async getStudent(req: express.Request, res: express.Response) {
    const student = await StudentsService.get(req.body.netid);
    res.status(200).send(student);
  }

  async createStudent(req: express.Request, res: express.Response) {
    const netid = await StudentsService.create(req.body);
    res.status(201).send({ netid: netid });
  }

  async patchStudent(req: express.Request, res: express.Response) {
    log(await StudentsService.patch(req.body.netid, req.body));
    res.status(204).send();
  }

  async deleteStudent(req: express.Request, res: express.Response) {
    log(await StudentsService.delete(req.body.netid));
    res.status(204).send();
  }
}

export default new StudentsController();
