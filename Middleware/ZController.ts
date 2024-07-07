import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({
    type: 'before'
})
export class ZMiddleware implements ExpressMiddlewareInterface {
    use( req: any, res: any, next: any): any {
        console.log("Z Middleware");
        next()
    }
}