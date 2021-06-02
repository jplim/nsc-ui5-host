module.exports = ({ resources, middlewareUtil, options }) => {
    return (req, res, next) => {
        const regex = new RegExp(options.configuration.path);

        if (regex.test(req.url) && options.configuration.src) {      
            const config = require(`../../webapp/${options.configuration.src}`);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(config));
        } else {
            next();
        }
    }
}