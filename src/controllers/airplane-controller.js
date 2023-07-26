const {StatusCodes}=require('http-status-codes');

const{AirplaneService}=require('../services');

const{SuccessResponse,ErrorResponse}=require('../utils/common/index');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

async function createAirplane(req,res){
     try{
        const airplane=await AirplaneService.createAirplane({
            ModelNumber: req.body.ModelNumber,
            Capacity: req.body.Capacity
        })
        SuccessResponse.data= airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
     }catch(error){
        ErrorResponse.error=error;
        return res
                 .status(error.statuscode)
                 .json(ErrorResponse);
     }
}

module.exports={
    createAirplane
}