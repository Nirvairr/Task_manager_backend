var jwt = require("jsonwebtoken");

const JWT_SECRET = "NIKHILIS@G@@DB@Y";

const fetchUser = (req , res , next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "ACCESS DENIED" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "ACCESS DENIED" });
    }
}
module.exports = fetchUser;