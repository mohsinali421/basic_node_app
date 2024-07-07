import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({
    type: 'after'
})
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
    error(err: any, res: any, next: any): any {
        console.log("Error Handler middleware");
        next()
    }
}