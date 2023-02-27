import axios from "axios";

export const doHttpCall = async (options) => {
  try {
    return await axios(options);
  } catch (error) {
    return error;
  }
};
