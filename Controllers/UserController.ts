import {JsonController, Req, Res, Param, Body, Get, Post, Put, Delete, QueryParam, UseBefore, UseAfter, Authorized} from 'routing-controllers';
import { UserMiddleware } from '../Middleware/UserMiddleware';

@Authorized()
@JsonController()
export class UserController {
    @Get("/")
    getUrl() {
        return "Localhost Url23"
    }

    @Post("/data/:id")
    postData(
        @QueryParam("limit") limit: number, 
        @Param("id") id: number,
        @Body() body: any,
        @Req() req: any,
        @Res() res: any
    ){
        console.log(`Query `, limit);
        console.log(`Param id `, id);
        console.log('Body ', body);
        // console.log(`Req is `, req); // it will print whole request

        return res.json({
            message: "Data posted Success !"
        })
    }

    @Post("/middleware")
    @UseBefore(UserMiddleware)
    validateMiddleware() {
        console.log("Controller");
        return "OK"
    }
}