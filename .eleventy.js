const axios = require("axios");
const fs = require("fs");

module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "ejs",
        "jpg",
    ]);
};
