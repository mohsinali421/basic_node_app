// all  the  routes
 /** GET Methods */
    /**
     * @openapi
     * '/':
     *  get:
     *     tags:
     *     - Local Host Controller
     *     summary: Get localhost
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
const {Router} = require("express")
const router = Router()

router.get("/", (req,res) => {
    res.json("Router")
})

 /** GET Methods */
    /**
     * @openapi
     * '/api/user/{username}/1':
     *  get:
     *     tags:
     *     - User Controller
     *     summary: Get a user by username
     *     parameters:
     *      - name: username
     *        in: path
     *        description: The username of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */

module.exports = router