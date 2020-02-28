'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const {nforce,org} = use('Adonis/Services/Salesforce');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/medicine', async ({request,response}) => {
  var q = 'SELECT Id, Name, medicinceName__c FROM Medicine__c LIMIT 10';
  try{
    const result = await org.query({ query: q });
    response.status(200).json({result})
  }catch(error){
    response.status(400).json({error})
  }
})

Route.post('/medicine', async ({request,response}) => {
  var medicine = nforce.createSObject('Medicine__c');
  const {medicineName} = request.only(['medicineName']);
  console.log('medicineName',medicineName)
  medicine.set('medicinceName__c', medicineName);
  console.log(medicine);
  try{
    const result = await org.insert({ sobject: medicine});
    response.status(200).json({result})
  }catch(error){
    response.status(400).json({error})
  }
})

