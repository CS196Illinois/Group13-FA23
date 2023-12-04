import express from 'express';
import debug from 'debug';
import {DOMParser} from 'xmldom'

const log: debug.IDebugger = debug('app:courses-controller');
const parser = new DOMParser();
class CourseController {
  private static async nav(url: string|null, tag: string, match: string) {
    if (url === null) {
      return null;
    }
    const response = await fetch(url, { method: 'GET' }).then(response => response.text());
    const xmldoc = parser.parseFromString(response, 'application/xml');
    const elements = xmldoc.getElementsByTagName(tag);
    for (let i = 0; i < elements.length; i++) {
      const temp = elements[i].getAttribute('id');
      if (temp == match) {
        return elements[i].getAttribute('href');
      }
    }
    return null;
  }

  async getCourse(req: express.Request, res: express.Response) {
    const year = await CourseController.nav('http://courses.illinois.edu/cisapp/explorer/schedule.xml', 'calendarYear', '2023');
    const term = await CourseController.nav(year, 'term', '120238');
    const subject = await CourseController.nav(term, 'subject', req.params.subject);
    const course = await CourseController.nav(subject, 'course', req.params.number);
    if (course == null) {
      res.status(404).send("Error: Course does not exist");
      return;
    }
    
    const response = await fetch(course, { method: 'GET' }).then(response => response.text());
    const xmldoc = parser.parseFromString(response, 'application/xml');
    const element = xmldoc.getElementsByTagName('label')[0];
    const text = element.textContent;
    res.status(200).send(text);
  }

}

export default new CourseController();
