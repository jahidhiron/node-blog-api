const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (error, salt) => {
      if (error) {
        return reject(error);
      }

      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          return reject(error);
        }

        resolve(hash);
      });
    });
  });
};

module.exports = hashPassword;
