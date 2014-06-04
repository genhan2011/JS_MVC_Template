define(['app/config', 'app/model/layer'], function(config, Layer){
    var token = null,
        map = null;

    function setExtraMapProps(mapMeta) {
        map.name = mapMeta.name;
        map.description = mapMeta.description;
        map.gmeLayers = {}; /// layerID / DynamicMapsEngineLayer pairs

        parseMapItems(mapMeta.contents || []);
    }

    function parseMapItems(mapItems) {
        var i, item, layerRecs = {};
        for (i=0; i<mapItems.length; i++) {
            item = mapItems[i];
            if (item.type === 'layer') {
                map.gmeLayers[item.id] = null;
                layerRecs[item.id] = createLayerRecord(item);
            }
        }
        /// save partial layer metadata records in the web storage
        sessionStorage.setItem('Layers', JSON.stringify(layerRecs));
    }

    function createLayerRecord(mapItem) {
        var layerObj = new Layer();
        layerObj.key = mapItem.key;
        layerObj.id = mapItem.id;
        layerObj.name = mapItem.name;

        if (mapItem.visibility === 'defaultOn') {
            layerObj.defaultVisibility = true;
        } else {
            layerObj.defaultVisibility = false;
        }
        return layerObj;
    }

    function initMap(_token) {
        token = _token;

        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(37.34, -121.87),
            panControl: false,
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
                style: google.maps.ZoomControlStyle.SMALL
            }
        };

        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        loadMapStore(function(resp) {
            console.log('Map Metadata: ', resp);
        });
    }

    function loadMapStore(callback) {
        var mapId = config.mapId,
            url = 'https://www.googleapis.com/mapsengine/v1/maps/' + mapId;
        $.ajax({
            url: url,
            dataType: 'json',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function(resp) {
                setExtraMapProps(resp);
                if ($.isFunction(callback)) {
                    callback(resp);
                }
            },
            error: function(err) {
                console.log("Error: ", err);
            }
        });
    }

    return {
        initMap: initMap
    };
});