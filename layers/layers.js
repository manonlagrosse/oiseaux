var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_20220310_1637tracks_1 = new ol.format.GeoJSON();
var features_20220310_1637tracks_1 = format_20220310_1637tracks_1.readFeatures(json_20220310_1637tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20220310_1637tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20220310_1637tracks_1.addFeatures(features_20220310_1637tracks_1);
var lyr_20220310_1637tracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20220310_1637tracks_1, 
                style: style_20220310_1637tracks_1,
                interactive: true,
                title: '<img src="styles/legend/20220310_1637tracks_1.png" /> 2022-03-10_16-37 — tracks'
            });
var format_nom_oiseaux_fraysinhes_viens_2 = new ol.format.GeoJSON();
var features_nom_oiseaux_fraysinhes_viens_2 = format_nom_oiseaux_fraysinhes_viens_2.readFeatures(json_nom_oiseaux_fraysinhes_viens_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_fraysinhes_viens_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_fraysinhes_viens_2.addFeatures(features_nom_oiseaux_fraysinhes_viens_2);
var lyr_nom_oiseaux_fraysinhes_viens_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_fraysinhes_viens_2, 
                style: style_nom_oiseaux_fraysinhes_viens_2,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_fraysinhes_viens_2.png" /> nom_oiseaux_fraysinhes_viens'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_20220310_1637tracks_1.setVisible(true);lyr_nom_oiseaux_fraysinhes_viens_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_20220310_1637tracks_1,lyr_nom_oiseaux_fraysinhes_viens_2];
lyr_20220310_1637tracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_nom_oiseaux_fraysinhes_viens_2.set('fieldAliases', {'fid': 'fid', 'nom_oiseau': 'nom_oiseau', 'nombre': 'nombre', 'typcontact': 'typcontact', 'certitude': 'certitude', });
lyr_20220310_1637tracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_nom_oiseaux_fraysinhes_viens_2.set('fieldImages', {'fid': 'TextEdit', 'nom_oiseau': 'TextEdit', 'nombre': 'Range', 'typcontact': 'TextEdit', 'certitude': 'Range', });
lyr_20220310_1637tracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_nom_oiseaux_fraysinhes_viens_2.set('fieldLabels', {'fid': 'inline label', 'nom_oiseau': 'inline label', 'nombre': 'inline label', 'typcontact': 'inline label', 'certitude': 'inline label', });
lyr_nom_oiseaux_fraysinhes_viens_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});