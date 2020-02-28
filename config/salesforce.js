'use strict'

const Env = use('Env')

module.exports = {

    clientId:Env.get('SFDXclientId'),
    clientSecret: Env.get('SFDXclientSecret'),
    redirectUri: Env.get('SFDXredirectUri'),
    securityToken:  Env.get('SFDXsecurityToken'),
    username:  Env.get('SFDXusername'), 
    password:  Env.get('SFDXpassword'), 
    securityToken:  Env.get('SFDXsecurityToken'),
    mode:  Env.get('SFDXmode') // optional, 'single' or 'multi' user mode, multi default

}