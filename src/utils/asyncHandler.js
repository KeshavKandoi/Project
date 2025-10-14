const asyncHandler =(requestHandler) => {
  return (req,res,next) =>{
     
  }
}


export {asyncHandler}
  



//SECOND APPROACH
//const asynHandler=()=>{}
//const asynHandler=(func) => { () => {}}
//const asynHandler= (func) =>  async () => {}
//niche vale uppar vala h in 3 steps 


//const asynHandler = (fn) => async (req,res,next) => {
 // try{

   // await fn(req,res,next)
  //}
 // catch(error){
 //  res.status(err.code || 500).json({
     // success:false,
    //  message:err.message 
    //}) 
  //}
//}