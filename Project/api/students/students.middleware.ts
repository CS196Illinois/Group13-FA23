import express from 'express';
import StudentsService from './students.service'
import debug from 'debug';

const log: debug.IDebugger = debug('app:students-controller');
class StudentsMiddleware {
  async validateRequiredStudentBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.netid) {
      next()
    } else {
      res.status(400).send({
        error: 'Missing netid'
      })
    }
  }
  
  async validateNoDuplicateNetId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const student = await StudentsService.get(req.body.netid);
    if (student) {
      res.status(400).send({
        error: 'netID already exists'
      });
    } else {
      next();
    }
  }

  async validateStudentExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const student = await StudentsService.get(req.body.netid);
    if(student) {
      next()
    } else {
      res.status(400).send({
        error: `${req.body.netid} not found`
      })
    }
  }
}

export default new StudentsMiddleware();
