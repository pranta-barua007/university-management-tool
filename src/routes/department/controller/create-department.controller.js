import { createDepartment } from "../../../models/department/department.dal.js";
import errorMessage from "../../../error/error-message.js";

async function httpCreateDepartment(req, res) {
  const { name, code } = req.body; //user input

  if (!name || !code) {
    return res
      .status(400)
      .json({ error: `Department ${errorMessage.emptyField}` });
  }

  try {
    const createdAt = new Date();
    const resultObject = {
      name,
      code,
      createdAt,
    };
    const result = await createDepartment(resultObject);

    if (result.ok === 1) {
      return res.status(200).json({
        data: result.department,
        message: "Success creating department",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: `Department ${errorMessage.createError}`,
      message: err.message,
    });
  }
}

export { httpCreateDepartment };
