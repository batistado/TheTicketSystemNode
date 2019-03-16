const loginData = require("../../models/loginData");

module.exports = {
  login(req, res) {
    const index = loginData.findIndex(o => o.id === req.username);

    if (index === -1 || loginData[index] !== req.password){
        return res.status(404).send({
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
