import { TUser } from "./user.interface";
import { User } from "./user.model";

const signUpIntoDB = async (payload: TUser) => {
    return await User.create(payload);
  };


  export const userService = {
    signUpIntoDB
  }