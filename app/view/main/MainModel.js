/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Volley.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Volley.model.Competition'
    ],

    alias: 'viewmodel.main',

    stores: {
        competitions: {
            model: 'Competition',
            autoLoad: true,
            sorters: [{
                property: 'start',
                direction: 'DESC'
            }]
        }
    }/*,

    formulas: {
        currentCompetition: {
            single: true,
            get: function (data) {
                debugger;
                return data.competitions.first(); // TODO dun werk, fix pl0x
            }
        }
    }*/
});