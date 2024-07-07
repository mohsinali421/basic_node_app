import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({
    type: 'before'
})
export class UserMiddleware implements ExpressMiddlewareInterface{
    use(req: any, res: any, next: any): any {
        console.log('user middleware....');
        next();
    }
}