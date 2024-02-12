const db = require('../config/connection');
const collection = require('../config/collections');
const bcrypt = require('bcrypt');
module.exports = {
  doSignup: (userData) => {
    return new Promise(async (resolve, reject) => {
      if (!userData.password || userData.password.trim() === '') {
        reject(new Error('Password field is required'));
        return;
      }

      try {
        userData.password = await bcrypt.hash(userData.password, 10);
        const data = await db.get().collection(collection.USER_COLLECTION).insertOne(userData);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
};