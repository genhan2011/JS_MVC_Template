define(['async!https://apis.google.com/js/client.js!onload'], function() {
    // The Client ID for your application, as configured on the Google APIs console.
    var clientId = '{YOUR GOOGLE OAUTH CLIENT ID}';

    // The oauth scope for displaying Maps Engine data.
    var scopes = 'https://www.googleapis.com/auth/mapsengine.readonly';

    function authorize(callback) {
        var options = {
            client_id: clientId,
            scope: scopes,

            // Setting immediate to 'true' will avoid prompting the user for
            // authorization if they have already granted it in the past.
            immediate: true
        };

        gapi.auth.authorize(options, callback);
    }

    return {
        checkAuth: authorize

        /// PUT OTHER CONFIG PARAMS HERE
    };
});