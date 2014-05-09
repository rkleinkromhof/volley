/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Volley.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    session: {},
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',

    items: [
        {
            region: 'west',
            xtype: 'grid',
            reference: 'competitionsGrid',
            title: 'Toernooien',
            hideHeaders: true,
            width: 250,
            split: true,
            collapsible: true,
            selModel: {
                listeners: {
                    selectionchange: 'onCompetitionChange'
                }
            },
            bind: {
                store: '{competitions}'/*,
                // Bind the project for the current user as the default selection (single).
                selection: {
                    bindTo: '{currentCompetition}',
                    single: true
                }*/
            },
            columns: [
                {
                    flex: 1,
                    sortable: true,
                    dataIndex: 'year'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            flex: 1,
            items: [
                {
                    xtype: 'component',
                    title: 'Dashboard',
                    bind: 'Max teams: {competitionsGrid.selection.teams.max}'
                }
            ]
        }
    ]
});
