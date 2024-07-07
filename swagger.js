// all the swagger options
// also yaml can be used
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My Sample Api Swagger",
            version: "0.1",
            description: "This is a sample swagger for getting started with.",
            contact: {
                name: "Mohsin"
            }
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ],
        components: {
             schema: {
                Book: {
                    type: "object",
                    require: ['title', 'author'],
                    properties: {
                        author: {
                            type: 'string',
                            description: 'Author of the book'
                        },
                        title: {
                            type: 'string',
                            description: 'Title of the book'
                        }
                    }
                }
             },
             responses: {
                400: {
                    description: "Missing API key",
                    contents: 'application/json'
                },
                404: {
                    description: "Not Found",
                    contents: 'application/json'
                },
    
            }
        },
        
    },
    apis: ["./routes/*.js"]
}

module.exports = swaggerOptions