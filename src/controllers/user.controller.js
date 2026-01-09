import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({   // we send the json file in response
        message:"ok"
    })
})

export {registerUser}