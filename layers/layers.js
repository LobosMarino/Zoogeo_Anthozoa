var wms_layers = [];

var format_CHL_adm0X_0 = new ol.format.GeoJSON();
var features_CHL_adm0X_0 = format_CHL_adm0X_0.readFeatures(json_CHL_adm0X_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHL_adm0X_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHL_adm0X_0.addFeatures(features_CHL_adm0X_0);
var lyr_CHL_adm0X_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHL_adm0X_0, 
                style: style_CHL_adm0X_0,
                popuplayertitle: "CHL_adm0X",
                interactive: false,
                title: '<img src="styles/legend/CHL_adm0X_0.png" /> CHL_adm0X'
            });
var lyr_benthicMeanTemp_bioOracle_v20_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "benthicMeanTemp_bioOracle_v2.0",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/benthicMeanTemp_bioOracle_v20_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8905559.263462, -15538711.096309, -6679169.447596, -1689200.139608]
                            })
                        });
var format_AnthozoaClusters_2 = new ol.format.GeoJSON();
var features_AnthozoaClusters_2 = format_AnthozoaClusters_2.readFeatures(json_AnthozoaClusters_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnthozoaClusters_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnthozoaClusters_2.addFeatures(features_AnthozoaClusters_2);
var lyr_AnthozoaClusters_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnthozoaClusters_2, 
                style: style_AnthozoaClusters_2,
                popuplayertitle: "AnthozoaClusters",
                interactive: true,
    title: 'AnthozoaClusters<br />\
    <img src="styles/legend/AnthozoaClusters_2_0.png" /> 1<br />\
    <img src="styles/legend/AnthozoaClusters_2_1.png" /> 2<br />\
    <img src="styles/legend/AnthozoaClusters_2_2.png" /> 3<br />\
    <img src="styles/legend/AnthozoaClusters_2_3.png" /> 4<br />\
    <img src="styles/legend/AnthozoaClusters_2_4.png" /> 5<br />\
    <img src="styles/legend/AnthozoaClusters_2_5.png" /> 6<br />'
        });

lyr_CHL_adm0X_0.setVisible(true);lyr_benthicMeanTemp_bioOracle_v20_1.setVisible(true);lyr_AnthozoaClusters_2.setVisible(true);
var layersList = [lyr_CHL_adm0X_0,lyr_benthicMeanTemp_bioOracle_v20_1,lyr_AnthozoaClusters_2];
lyr_CHL_adm0X_0.set('fieldAliases', {'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2014': 'POP2014', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Perimeter': 'Perimeter', 'Area': 'Area', });
lyr_AnthozoaClusters_2.set('fieldAliases', {'sitename': 'sitename', 'cluster': 'cluster', 'species na': 'species na', });
lyr_CHL_adm0X_0.set('fieldImages', {'GADMID': 'Range', 'ISO': 'TextEdit', 'NAME_ENGLI': 'TextEdit', 'NAME_ISO': 'TextEdit', 'NAME_FAO': 'TextEdit', 'NAME_LOCAL': 'TextEdit', 'NAME_OBSOL': 'TextEdit', 'NAME_VARIA': 'TextEdit', 'NAME_NONLA': 'TextEdit', 'NAME_FRENC': 'TextEdit', 'NAME_SPANI': 'TextEdit', 'NAME_RUSSI': 'TextEdit', 'NAME_ARABI': 'TextEdit', 'NAME_CHINE': 'TextEdit', 'WASPARTOF': 'TextEdit', 'CONTAINS': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'ISO2': 'TextEdit', 'WWW': 'TextEdit', 'FIPS': 'TextEdit', 'ISON': 'TextEdit', 'VALIDFR': 'TextEdit', 'VALIDTO': 'TextEdit', 'AndyID': 'TextEdit', 'POP2014': 'TextEdit', 'SQKM': 'TextEdit', 'POPSQKM': 'TextEdit', 'UNREGION1': 'TextEdit', 'UNREGION2': 'TextEdit', 'DEVELOPING': 'TextEdit', 'CIS': 'TextEdit', 'Transition': 'TextEdit', 'OECD': 'TextEdit', 'WBREGION': 'TextEdit', 'WBINCOME': 'TextEdit', 'WBDEBT': 'TextEdit', 'WBOTHER': 'TextEdit', 'CEEAC': 'TextEdit', 'CEMAC': 'TextEdit', 'CEPLG': 'TextEdit', 'COMESA': 'TextEdit', 'EAC': 'TextEdit', 'ECOWAS': 'TextEdit', 'IGAD': 'TextEdit', 'IOC': 'TextEdit', 'MRU': 'TextEdit', 'SACU': 'TextEdit', 'UEMOA': 'TextEdit', 'UMA': 'TextEdit', 'PALOP': 'TextEdit', 'PARTA': 'TextEdit', 'CACM': 'TextEdit', 'EurAsEC': 'TextEdit', 'Agadir': 'TextEdit', 'SAARC': 'TextEdit', 'ASEAN': 'TextEdit', 'NAFTA': 'TextEdit', 'GCC': 'TextEdit', 'CSN': 'TextEdit', 'CARICOM': 'TextEdit', 'EU': 'TextEdit', 'CAN': 'TextEdit', 'ACP': 'TextEdit', 'Landlocked': 'TextEdit', 'AOSIS': 'TextEdit', 'SIDS': 'TextEdit', 'Islands': 'TextEdit', 'LDC': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', });
lyr_AnthozoaClusters_2.set('fieldImages', {'sitename': 'TextEdit', 'cluster': 'Range', 'species na': 'TextEdit', });
lyr_CHL_adm0X_0.set('fieldLabels', {'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2014': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Perimeter': 'no label', 'Area': 'no label', });
lyr_AnthozoaClusters_2.set('fieldLabels', {'sitename': 'header label - visible with data', 'cluster': 'header label - visible with data', 'species na': 'header label - visible with data', });
lyr_AnthozoaClusters_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});