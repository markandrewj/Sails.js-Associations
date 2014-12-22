/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection :'associationConnection',
 
  attributes: {
  	name : 'STRING',

  	use:{
            collection: 'brand',
            via: 'users'
        },

    cars:{
            collection: 'car',
            via: 'owner'
        },
        
    ssn:{
    	model: 'SSN'
    }
  }
};

