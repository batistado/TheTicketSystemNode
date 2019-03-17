const controllers = require('../controllers');
const loginController = controllers.login;
const ticketController = controllers.ticket;

module.exports = (app) => {
    app.post('/login', loginController.login);
    app.post('/fetchAllTickets', ticketController.getAllTickets);
    app.get('/fetchTicketDetails', ticketController.getTicketDetails);
    app.get('/fetchChartData', ticketController.getChartData);
}