ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:54035").setExtent([7295855.072059, -4130313.405922, 17225077.507455, 3964857.027685]);
var wms_layers = [];

var format_coastline_indo_0 = new ol.format.GeoJSON();
var features_coastline_indo_0 = format_coastline_indo_0.readFeatures(json_coastline_indo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54035'});
var jsonSource_coastline_indo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coastline_indo_0.addFeatures(features_coastline_indo_0);
var lyr_coastline_indo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coastline_indo_0, 
                style: style_coastline_indo_0,
                interactive: false,
                title: '<img src="styles/legend/coastline_indo_0.png" /> coastline_indo'
            });
var format_cyclone_indo_econ_loss_1 = new ol.format.GeoJSON();
var features_cyclone_indo_econ_loss_1 = format_cyclone_indo_econ_loss_1.readFeatures(json_cyclone_indo_econ_loss_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54035'});
var jsonSource_cyclone_indo_econ_loss_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclone_indo_econ_loss_1.addFeatures(features_cyclone_indo_econ_loss_1);
var lyr_cyclone_indo_econ_loss_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cyclone_indo_econ_loss_1, 
                style: style_cyclone_indo_econ_loss_1,
                interactive: true,
    title: 'cyclone_indo_econ_loss<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_0.png" /> 1<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_1.png" /> 2<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_2.png" /> 3<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_3.png" /> 4<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_4.png" /> 5<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_5.png" /> 6<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_6.png" /> 7<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_7.png" /> 8<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_8.png" /> 9<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_9.png" /> 10<br />\
    <img src="styles/legend/cyclone_indo_econ_loss_1_10.png" /> <br />'
        });
var format_100km_coast_buff_indo_2 = new ol.format.GeoJSON();
var features_100km_coast_buff_indo_2 = format_100km_coast_buff_indo_2.readFeatures(json_100km_coast_buff_indo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54035'});
var jsonSource_100km_coast_buff_indo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100km_coast_buff_indo_2.addFeatures(features_100km_coast_buff_indo_2);
var lyr_100km_coast_buff_indo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100km_coast_buff_indo_2, 
                style: style_100km_coast_buff_indo_2,
                interactive: false,
                title: '<img src="styles/legend/100km_coast_buff_indo_2.png" /> 100km_coast_buff_indo'
            });

lyr_coastline_indo_0.setVisible(true);lyr_cyclone_indo_econ_loss_1.setVisible(true);lyr_100km_coast_buff_indo_2.setVisible(true);
var layersList = [lyr_coastline_indo_0,lyr_cyclone_indo_econ_loss_1,lyr_100km_coast_buff_indo_2];
lyr_coastline_indo_0.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_cyclone_indo_econ_loss_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'fid': 'fid', 'value': 'value', });
lyr_100km_coast_buff_indo_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid1': 'ogc_fid1', 'ogc_fid0': 'ogc_fid0', 'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_coastline_indo_0.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'featurecla': 'TextEdit', 'scalerank': 'TextEdit', 'min_zoom': 'TextEdit', });
lyr_cyclone_indo_econ_loss_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'fid': 'TextEdit', 'value': 'TextEdit', });
lyr_100km_coast_buff_indo_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid1': '', 'ogc_fid0': 'TextEdit', 'featurecla': 'TextEdit', 'scalerank': 'TextEdit', 'min_zoom': 'TextEdit', });
lyr_coastline_indo_0.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_cyclone_indo_econ_loss_1.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'fid': 'no label', 'value': 'header label', });
lyr_100km_coast_buff_indo_2.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid1': 'no label', 'ogc_fid0': 'no label', 'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_100km_coast_buff_indo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});