'use strict'
//const Config = use('Config')
let nforce = require('nforce');

class SalesforceService {
    
    constructor(config){
        
        const org = nforce.createConnection(config);
        const {securityToken,username,password} = config;
        org.authenticate({username,password}, function(err, resp){
        if(!err) {
            console.log('Access Token: ' + resp.access_token);
            } else {
            console.log('Error: chek' + err);
            }
        });
        return {org,nforce};
    }

    // getInstance(){
    //     return this.instance;
    // }
}

module.exports = SalesforceService;