import {createExpressServer} from 'routing-controllers';
import {UserController} from '../Controllers/UserController';
import 'reflect-metadata';
import { GlobalMiddleware } from '../Middleware/GlobalMiddleware';
import { ZMiddleware } from '../Middleware/ZController';
import {checkAuth} from '../auth/auth';
import { ErrorHandler } from '../error/ErrorHandler';

const app = createExpressServer({
    controllers: [UserController],
    middlewares: [ErrorHandler,GlobalMiddleware, ZMiddleware],
    authorizationChecker: checkAuth,
    defaultErrorHandler: false
})

app.listen(3000, () =>{
    console.log('Server running at 3000...');
})