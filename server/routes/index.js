const controllers = require('../controllers');
const loginController = controllers.login;
const ticketController = controllers.ticket;

module.exports = (app) => {
    app.post('/login', loginController.login);
    app.post('/fetchData', ticketController.getData);
}