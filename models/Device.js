const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  address: String,
  hub: String,
  groups: [String],
  status: String,
  deviceType: String
}, { timestamps: true });
