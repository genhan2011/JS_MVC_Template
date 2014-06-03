require.config({
    baseUrl: '.',
    paths: {
        lib: 'lib',
        app: 'app',
        async : 'lib/async'
    }
});

require(['lib/jquery', 'app/config'], function($, config) {
    function callback(resp) {
        if (resp && !resp.error) {
            var token = resp.access_token;
            console.log("OAuth token:", token);
        } else {
            console.log(resp);
            alert('Authorization failed!');
        }
    }

    config.checkAuth(callback);
});