const { ServiceProvider } = require('@adonisjs/fold');
const SalesforceService =  use('App/Service/SalesforceService');

class SalesforceProvider extends ServiceProvider {

    register () {
        this.app.bind('Adonis/Services/Salesforce', (app) => {
            const Config = app.use('Adonis/Src/Config');
            return new SalesforceService(Config.get('salesforce'));
        })
    }
  
    boot () {
        this.app.use('Env');
    }
}

module.exports = SalesforceProvider;