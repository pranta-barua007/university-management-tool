import departmentSchema from "./department.schema.js";
import errorMessage from "../../error/error-message.js";

//This file is data access layer for department model

async function findAllDepartment() {
  //SELECT * FROM department
  return departmentSchema.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function findDepartment(filterQueryObject) {
  //SELECT * FROM department WHERE col = condition
  return departmentSchema.findOne(filterQueryObject, {
    _id: 0,
    __v: 0,
  });
}

async function createDepartment({ name, code, createdAt }) {
  try {
    //do stuff
    const departmentExists = await findDepartment({ code });

    if (departmentExists) {
      throw new Error(`Department ${errorMessage.alreadyExist}`);
    }

    //INSERT INTO department(name, code, createdAt) VALUES(name, code, createdAt)
    const result = await departmentSchema.create({ name, code, createdAt });

    return {
      ok: 1,
      department: result,
    };
  } catch (err) {
    // if error throw the error to controller
    throw new Error(err.message);
  }
}

async function updateDepartment(filterQueryObject, updatedDataObject) {
  try {
    const departmentExists = await findDepartment(filterQueryObject);

    if (!departmentExists) {
      throw new Error(`Department ${errorMessage.notFound}`);
    }

    //UPDATE department SET col = updatedData WHERE col = condition
    const result = await departmentSchema.updateOne(
      filterQueryObject,
      updatedDataObject
    );

    return {
      ok: 1,
      department: result,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteDepartment(filterQueryObject) {
  try {
    const departmentExists = await findDepartment(filterQueryObject);

    if (!departmentExists) {
      throw new Error(`Department ${errorMessage.notFound}`);
    }

    //DELETE FROM department WHERE col = condition
    const result = await departmentSchema.deleteOne(filterQueryObject);

    return {
      ok: 1,
      department: result,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

export {
  findAllDepartment,
  findDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
