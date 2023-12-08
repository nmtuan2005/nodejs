import * as services from "../services";

export const register = async (req, res) => {
  try {
    const response = await services.register();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message || "Server Error",
    });
  }
};
