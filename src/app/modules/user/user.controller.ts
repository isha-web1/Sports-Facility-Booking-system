import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";



const signUp = catchAsync(async (req, res) => {
    const result = await userService.signUpIntoDB(req.body);
  
    const { _id, name, email: userEmail, role, phone, address } = result;
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Registered successfully',
      data: {
        _id,
        name,
        email: userEmail,
        role,
        phone,
        address,
      },
    });
  });


  export const userController = {
    signUp
  }