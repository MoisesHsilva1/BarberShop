const UserModel = require("../models/User.model");

const createUser = async (name, email, telephone) => {
  const user = new UserModel({
    name,
    email,
    telephone,
  });

  await user.save();
  return user;
};

module.exports = { createUser };
