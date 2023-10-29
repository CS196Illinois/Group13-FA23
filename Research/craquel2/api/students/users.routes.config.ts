import { CommonRoutesConfig } from '../common/common.routes.config';
import UsersController from './users.controller';
import UsersMiddleware from './middleware/users.middleware';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/students`)
            .get(UsersController.listUsers)
            .post(
                UsersMiddleware.validateRequiredUserBodyFields,
                UsersMiddleware.validateSameNetIDDoesntExist,
                UsersController.createUser
            );

        this.app.param(`id`, UsersMiddleware.extractUserId);
        this.app
            .route(`/students/:id`)
            .all(UsersMiddleware.validateUserExists)
            .get(UsersController.getUserById)
            .delete(UsersController.removeUser);

        this.app.put(`/students/:id`, [
            UsersMiddleware.validateRequiredUserBodyFields,
            UsersMiddleware.validateSameNetIDBelongToSameUser,
            UsersController.put,
        ]);

        this.app.patch(`/students/:id`, [
            UsersMiddleware.validatePatchEmail,
            UsersController.patch,
        ]);

        return this.app;
    }
}
