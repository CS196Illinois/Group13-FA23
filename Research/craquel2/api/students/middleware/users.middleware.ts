import express from 'express';
import userService from '../services/users.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class UsersMiddleware {
    async validateRequiredUserBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.netid) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required field netID`,
            });
        }
    }

    async validateSameNetIDDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.getUserByNetID(req.body.netid);
        if (user) {
            res.status(400).send({ error: `User netID already exists` });
        } else {
            next();
        }
    }

    async validateSameNetIDBelongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.getUserByNetID(req.body.netID);
        if (user && user.id === req.params.id) {
            next();
        } else {
            res.status(400).send({ error: `Invalid netID` });
        }
    }

    // Here we need to use an arrow function to bind `this` correctly
    validatePatchEmail = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if (req.body.email) {
            log('Validating email', req.body.email);

            this.validateSameNetIDBelongToSameUser(req, res, next);
        } else {
            next();
        }
    };

    async validateUserExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.readById(req.params.id);
        if (user) {
            next();
        } else {
            res.status(404).send({
                error: `User ${req.params.id} not found`,
            });
        }
    }

    async extractUserId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.id;
        next();
    }
}

export default new UsersMiddleware();
