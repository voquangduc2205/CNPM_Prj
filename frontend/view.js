const path = require('path');

const createViewApi = app => {
    app.get('/home', async (request, response) => {
        if (request.session.userId) {
            return response.sendFile(path.join(__dirname, 'site.html'));
        } else {
            return response.sendFile(path.join(__dirname, 'login.html'));
        }
    });
};

module.exports = {
    createViewApi
};