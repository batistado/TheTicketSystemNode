const loginData = require("../../models/loginData");

module.exports = {
  login(req, res) {
    const index = loginData.findIndex(o => o.id === req.body.username);

    if (index === -1 || loginData[index].password !== req.body.password){
        return res.status(401).send({
            success: false,
            message: 'Invalid username or password!',
        });
    }

    return res.status(200).send({
        success: true,
        message: 'Login successful!',
    });
  }
};
