import db from "../models";

export const register = () =>
  new Promise((resolve, reject) => {
    try {
      resolve({
        status: 200,
        message: "Registered successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
