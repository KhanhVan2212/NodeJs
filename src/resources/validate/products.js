const Joi = require('joi');

const productValidator = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number(),
    slug: Joi.string(),
})

module.exports = productValidator