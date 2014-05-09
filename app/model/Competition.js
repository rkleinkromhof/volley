Ext.define('Volley.model.Competition', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'firebase-rest',
        url: 'https://voetvolley.firebaseio.com/competitions',
        format: 'json',
        reader: {
            type: 'firebase-json'
        }
    },

    fields: [
        { name: 'start', dateFormat: 'Y-m-d' },
        {
            name: 'year',
            calculate: function (data) {
                return data.start.split('-')[0];
            }
        }
    ]
});