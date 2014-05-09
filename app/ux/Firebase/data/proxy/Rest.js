/**
 * @author rkleinkromhof
 * Proxy for use with Firebase REST api
 * TODO check if this is necessary. Maybe the regular REST proxy is enoughs
 */
Ext.define('Firebase.data.proxy.Rest', {
    extend: 'Ext.data.proxy.Rest',
    alias : 'proxy.firebase-rest',

    config: {
        /**
         * @cfg {Object/String/Ext.data.reader.Reader} reader
         */
        reader: {
            type: 'firebase-json'
        }
    },

    /**
     * Specialized version of buildUrl that incorporates the {@link #appendId} and {@link #format} options into the
     * generated url. Override this to provide further customizations, but remember to call the superclass buildUrl so
     * that additional parameters like the cache buster string are appended.
     * @param {Object} request
     */
    buildUrl: function(request) {
        return this.callParent(arguments);
    }/*,

    isValidId: function(id) {
        return id || id === 0;
    }*/
});