const ejs = require("ejs");
const path = require("path");

async function loadEmail(template, data) {
    const emailPath = path.join(__dirname, "..", "views", `${template}.ejs`);
    try {
        console.log("dang trong");

        const html = await ejs.renderFile(emailPath, data);
        console.log(html);

        return html;
    } catch (error) {
        console.log(error);
    }
}

module.exports = loadEmail;
