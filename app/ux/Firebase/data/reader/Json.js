/**
 * @author rkleinkromhof
 * Firebase Json response reader
 */
Ext.define('Firebase.data.reader.Json', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.firebase-json',

    config: {
        idMatcher: /^-/,

        /*useSimpleAccessors: false,*/ // Do i want to set this to true?

        /**
         * @cfg {Boolean} preserveRawData
         * The reader will keep a copy of the most recent request in the {@link #rawData} property. For performance reasons,
         * the data object for each record is used directly as the model data. This means that these objects may be modified and
         * thus modify the raw data. To ensure the objects are copied, set this option to `true`. NB: This only applies to items
         * that are read as part of the data array, any other metadata will not be modified:
         *
         *     {
         *         "someOtherData": 1, // Won't be modified
         *         "root": [{}, {}, {}] // The objects here will be modified
         *     }
         */
        preserveRawData: false
    },

    getResponseData: function (response) {
        var me = this,
            data = me.callParent(arguments);

        return me.convertResponseData(data);
    },

    privates: {
        convertResponseData: function (data) {
            var me = this,
                matcher = me.getIdMatcher(),
                converted = [];

            Ext.Object.each(data, function (key, value) {
                if (matcher.test(key)) {
                    Ext.clone(value);
                    value._id = key; // TODO pick up the idParam config from the Proxy to make this configurable
                    converted.push(value);
                }
            });

            return converted.length > 0 ? converted : data;
        }
    }
});