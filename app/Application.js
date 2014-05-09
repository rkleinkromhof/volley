/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Volley.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'Firebase.*'
    ],

    name: 'Volley',

    views: [

    ],

    controllers: [
        'Root'
    ],

    stores: [

    ],

    launch: function () {

    }
});
