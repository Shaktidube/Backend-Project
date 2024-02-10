const asyncHandler = (requestHandler) =>{
    (req,res,next)=>{
        prompt.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}