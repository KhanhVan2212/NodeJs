const Joi = require('joi');

const categoryValidator = Joi.object({
    title:Joi.string(),
    slug: Joi.string(),
    description: Joi.string(),
})

module.exports = categoryValidator