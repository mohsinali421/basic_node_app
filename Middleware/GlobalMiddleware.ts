import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({
    type: 'before'
})
export class GlobalMiddleware implements ExpressMiddlewareInterface {
    use( req: any, res: any, next: any): any {
        console.log("Global Middleware");
        next()
    }
}