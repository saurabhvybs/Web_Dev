const zod = require("zod");    // importing zod
const express = require("express"); // importing express

const app = express();     
app.use(express.json());    // parsing the input we get into a json

function validateInput(obj){     // zod validation schema
    const schema = zod.object({   // input must be an object
        email:zod.string().email(),    // input object must be a string and in email format
        password:zod.string().min(8)   // input object password must be a string and min 8 digit
})
return schema.safeParse(obj);     // safe parse of obj after authentication
}
app.post("/login",function(req,res){     // route for a post
    const response = validateInput(req.body);    // the input we get is passed into zod validator function
    if(!response.success){     // message if authentication is sucess or not.
        res.json({
            msg: " Wrong Login credentials"
        })
    }
    else{
        res.json({
            msg: "Login Success"
        })
    }
})
app.listen(3001);        // listen on port 3001 u can keep it 3000 as in my case it was not free.

// example of a valid input
//  { "email": "saurabh@gmail.com",
//   "password": "12345678" }
