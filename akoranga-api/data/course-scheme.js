const Joi = require('joi')

const schema = Joi.object().keys({
  title: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required(),
  teacher: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required(),
  description: Joi.string()
    .alphanum()
    .min(3)
    .max(2000)
    .required(),
  modules: Joi.array(),
  createdOn: Joi.date().required(),
  updatedOn: Joi.date().required(),
  deletedOn: Joi.date()
})
