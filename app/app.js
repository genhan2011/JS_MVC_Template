require.config({
    baseUrl: '.',
    paths: {
        lib: 'lib',
        app: 'app',
        async : 'lib/async'
    }
});

require(['lib/jquery', 'app/config',
    'app/controller/map'], function($, config, mapCtrl) {

    function callback(resp) {
        if (resp && !resp.error) {
            var token = resp.access_token;
            mapCtrl.initMap(token);
        } else {
            console.log(resp);
            alert('Authorization failed!');
        }
    }

    config.checkAuth(callback);
});