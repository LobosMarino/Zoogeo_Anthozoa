ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-98.856223, -58.256486, 10.087776, -3.317070]);
var wms_layers = [];

var format_Chile_0 = new ol.format.GeoJSON();
var features_Chile_0 = format_Chile_0.readFeatures(json_Chile_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Chile_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chile_0.addFeatures(features_Chile_0);
var lyr_Chile_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chile_0, 
                style: style_Chile_0,
                popuplayertitle: 'Chile',
                interactive: false,
                title: '<img src="styles/legend/Chile_0.png" /> Chile'
            });
var format_anthozoawebmapclusters_1 = new ol.format.GeoJSON();
var features_anthozoawebmapclusters_1 = format_anthozoawebmapclusters_1.readFeatures(json_anthozoawebmapclusters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_anthozoawebmapclusters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_anthozoawebmapclusters_1.addFeatures(features_anthozoawebmapclusters_1);
var lyr_anthozoawebmapclusters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_anthozoawebmapclusters_1, 
                style: style_anthozoawebmapclusters_1,
                popuplayertitle: 'anthozoa webmap clusters',
                interactive: true,
    title: 'anthozoa webmap clusters<br />\
    <img src="styles/legend/anthozoawebmapclusters_1_0.png" /> 1<br />\
    <img src="styles/legend/anthozoawebmapclusters_1_1.png" /> 2<br />\
    <img src="styles/legend/anthozoawebmapclusters_1_2.png" /> 3<br />\
    <img src="styles/legend/anthozoawebmapclusters_1_3.png" /> 4<br />\
    <img src="styles/legend/anthozoawebmapclusters_1_4.png" /> 5<br />\
    <img src="styles/legend/anthozoawebmapclusters_1_5.png" /> 6<br />'
        });
var format_Latitude_2 = new ol.format.GeoJSON();
var features_Latitude_2 = format_Latitude_2.readFeatures(json_Latitude_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Latitude_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latitude_2.addFeatures(features_Latitude_2);
var lyr_Latitude_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latitude_2, 
                style: style_Latitude_2,
                popuplayertitle: 'Latitude',
                interactive: true,
                title: '<img src="styles/legend/Latitude_2.png" /> Latitude'
            });
var group_Bivalvia_Gastropoda = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Bivalvia_Gastropoda'});
var group_Decapoda = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Decapoda'});
var group_OceanLayers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'OceanLayers'});
var group_Anthozoa = new ol.layer.Group({
                                layers: [lyr_anthozoawebmapclusters_1,],
                                fold: "open",
                                title: 'Anthozoa'});

lyr_Chile_0.setVisible(true);lyr_anthozoawebmapclusters_1.setVisible(true);lyr_Latitude_2.setVisible(true);
var layersList = [lyr_Chile_0,group_Anthozoa,lyr_Latitude_2];
lyr_Chile_0.set('fieldAliases', {'GADMID': 'GADMID', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'AndyID': 'AndyID', 'POP2014': 'POP2014', 'SQKM': 'SQKM', 'POPSQKM': 'POPSQKM', 'UNREGION1': 'UNREGION1', 'UNREGION2': 'UNREGION2', 'DEVELOPING': 'DEVELOPING', 'CIS': 'CIS', 'Transition': 'Transition', 'OECD': 'OECD', 'WBREGION': 'WBREGION', 'WBINCOME': 'WBINCOME', 'WBDEBT': 'WBDEBT', 'WBOTHER': 'WBOTHER', 'CEEAC': 'CEEAC', 'CEMAC': 'CEMAC', 'CEPLG': 'CEPLG', 'COMESA': 'COMESA', 'EAC': 'EAC', 'ECOWAS': 'ECOWAS', 'IGAD': 'IGAD', 'IOC': 'IOC', 'MRU': 'MRU', 'SACU': 'SACU', 'UEMOA': 'UEMOA', 'UMA': 'UMA', 'PALOP': 'PALOP', 'PARTA': 'PARTA', 'CACM': 'CACM', 'EurAsEC': 'EurAsEC', 'Agadir': 'Agadir', 'SAARC': 'SAARC', 'ASEAN': 'ASEAN', 'NAFTA': 'NAFTA', 'GCC': 'GCC', 'CSN': 'CSN', 'CARICOM': 'CARICOM', 'EU': 'EU', 'CAN': 'CAN', 'ACP': 'ACP', 'Landlocked': 'Landlocked', 'AOSIS': 'AOSIS', 'SIDS': 'SIDS', 'Islands': 'Islands', 'LDC': 'LDC', 'Perimeter': 'Perimeter', 'Area': 'Area', });
lyr_anthozoawebmapclusters_1.set('fieldAliases', {'site': 'site', 'species': 'species', 'species2': 'species2', 'species3': 'species3', 'cluster': 'cluster', });
lyr_Latitude_2.set('fieldAliases', {'path': 'path', 'begin': 'begin', 'end': 'end', 'Label': 'Label', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', });
lyr_Chile_0.set('fieldImages', {'GADMID': 'Range', 'ISO': 'TextEdit', 'NAME_ENGLI': 'TextEdit', 'NAME_ISO': 'TextEdit', 'NAME_FAO': 'TextEdit', 'NAME_LOCAL': 'TextEdit', 'NAME_OBSOL': 'TextEdit', 'NAME_VARIA': 'TextEdit', 'NAME_NONLA': 'TextEdit', 'NAME_FRENC': 'TextEdit', 'NAME_SPANI': 'TextEdit', 'NAME_RUSSI': 'TextEdit', 'NAME_ARABI': 'TextEdit', 'NAME_CHINE': 'TextEdit', 'WASPARTOF': 'TextEdit', 'CONTAINS': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'ISO2': 'TextEdit', 'WWW': 'TextEdit', 'FIPS': 'TextEdit', 'ISON': 'TextEdit', 'VALIDFR': 'TextEdit', 'VALIDTO': 'TextEdit', 'AndyID': 'TextEdit', 'POP2014': 'TextEdit', 'SQKM': 'TextEdit', 'POPSQKM': 'TextEdit', 'UNREGION1': 'TextEdit', 'UNREGION2': 'TextEdit', 'DEVELOPING': 'TextEdit', 'CIS': 'TextEdit', 'Transition': 'TextEdit', 'OECD': 'TextEdit', 'WBREGION': 'TextEdit', 'WBINCOME': 'TextEdit', 'WBDEBT': 'TextEdit', 'WBOTHER': 'TextEdit', 'CEEAC': 'TextEdit', 'CEMAC': 'TextEdit', 'CEPLG': 'TextEdit', 'COMESA': 'TextEdit', 'EAC': 'TextEdit', 'ECOWAS': 'TextEdit', 'IGAD': 'TextEdit', 'IOC': 'TextEdit', 'MRU': 'TextEdit', 'SACU': 'TextEdit', 'UEMOA': 'TextEdit', 'UMA': 'TextEdit', 'PALOP': 'TextEdit', 'PARTA': 'TextEdit', 'CACM': 'TextEdit', 'EurAsEC': 'TextEdit', 'Agadir': 'TextEdit', 'SAARC': 'TextEdit', 'ASEAN': 'TextEdit', 'NAFTA': 'TextEdit', 'GCC': 'TextEdit', 'CSN': 'TextEdit', 'CARICOM': 'TextEdit', 'EU': 'TextEdit', 'CAN': 'TextEdit', 'ACP': 'TextEdit', 'Landlocked': 'TextEdit', 'AOSIS': 'TextEdit', 'SIDS': 'TextEdit', 'Islands': 'TextEdit', 'LDC': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', });
lyr_anthozoawebmapclusters_1.set('fieldImages', {'site': 'TextEdit', 'species': 'TextEdit', 'species2': 'TextEdit', 'species3': 'TextEdit', 'cluster': 'TextEdit', });
lyr_Latitude_2.set('fieldImages', {'path': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Label': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', });
lyr_Chile_0.set('fieldLabels', {'GADMID': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'AndyID': 'no label', 'POP2014': 'no label', 'SQKM': 'no label', 'POPSQKM': 'no label', 'UNREGION1': 'no label', 'UNREGION2': 'no label', 'DEVELOPING': 'no label', 'CIS': 'no label', 'Transition': 'no label', 'OECD': 'no label', 'WBREGION': 'no label', 'WBINCOME': 'no label', 'WBDEBT': 'no label', 'WBOTHER': 'no label', 'CEEAC': 'no label', 'CEMAC': 'no label', 'CEPLG': 'no label', 'COMESA': 'no label', 'EAC': 'no label', 'ECOWAS': 'no label', 'IGAD': 'no label', 'IOC': 'no label', 'MRU': 'no label', 'SACU': 'no label', 'UEMOA': 'no label', 'UMA': 'no label', 'PALOP': 'no label', 'PARTA': 'no label', 'CACM': 'no label', 'EurAsEC': 'no label', 'Agadir': 'no label', 'SAARC': 'no label', 'ASEAN': 'no label', 'NAFTA': 'no label', 'GCC': 'no label', 'CSN': 'no label', 'CARICOM': 'no label', 'EU': 'no label', 'CAN': 'no label', 'ACP': 'no label', 'Landlocked': 'no label', 'AOSIS': 'no label', 'SIDS': 'no label', 'Islands': 'no label', 'LDC': 'no label', 'Perimeter': 'no label', 'Area': 'no label', });
lyr_anthozoawebmapclusters_1.set('fieldLabels', {'site': 'header label - visible with data', 'species': 'header label - visible with data', 'species2': 'no label', 'species3': 'no label', 'cluster': 'header label - visible with data', });
lyr_Latitude_2.set('fieldLabels', {'path': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Label': 'header label - visible with data', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Latitude_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});