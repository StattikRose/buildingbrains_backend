const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')
const mongoose = require('mongoose')

const automationSchema = new mongoose.Schema({
  name: String,
  hub: String,
  automations: [{
    device: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
    setting: String
  }]
}, { timestamps: true })

const Automation = mongoose.model('Automation', automationSchema)
module.exports = Automation
