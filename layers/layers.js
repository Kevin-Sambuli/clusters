var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Towns_1 = new ol.format.GeoJSON();
var features_Towns_1 = format_Towns_1.readFeatures(json_Towns_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towns_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_1.addFeatures(features_Towns_1);
var lyr_Towns_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towns_1, 
                style: style_Towns_1,
                popuplayertitle: "Towns",
                interactive: true,
                title: '<img src="styles/legend/Towns_1.png" /> Towns'
            });
var format_SubCounty_2 = new ol.format.GeoJSON();
var features_SubCounty_2 = format_SubCounty_2.readFeatures(json_SubCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubCounty_2.addFeatures(features_SubCounty_2);
var lyr_SubCounty_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubCounty_2, 
                style: style_SubCounty_2,
                popuplayertitle: "Sub County",
                interactive: true,
                title: '<img src="styles/legend/SubCounty_2.png" /> Sub County'
            });
var format_County_3 = new ol.format.GeoJSON();
var features_County_3 = format_County_3.readFeatures(json_County_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_3.addFeatures(features_County_3);
var lyr_County_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_3, 
                style: style_County_3,
                popuplayertitle: "County",
                interactive: true,
                title: '<img src="styles/legend/County_3.png" /> County'
            });
var format_County_4 = new ol.format.GeoJSON();
var features_County_4 = format_County_4.readFeatures(json_County_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_4.addFeatures(features_County_4);
var lyr_County_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_County_4, 
                style: style_County_4,
                popuplayertitle: "County",
                interactive: true,
                title: '<img src="styles/legend/County_4.png" /> County'
            });
var format_Country_5 = new ol.format.GeoJSON();
var features_Country_5 = format_Country_5.readFeatures(json_Country_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Country_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_5.addFeatures(features_Country_5);
var lyr_Country_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Country_5, 
                style: style_Country_5,
                popuplayertitle: "Country",
                interactive: true,
                title: '<img src="styles/legend/Country_5.png" /> Country'
            });
var format_Households_6 = new ol.format.GeoJSON();
var features_Households_6 = format_Households_6.readFeatures(json_Households_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Households_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Households_6.addFeatures(features_Households_6);cluster_Households_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Households_6
});
var lyr_Households_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Households_6, 
                style: style_Households_6,
                popuplayertitle: "Households",
                interactive: true,
                title: '<img src="styles/legend/Households_6.png" /> Households'
            });
var format_Clusters_7 = new ol.format.GeoJSON();
var features_Clusters_7 = format_Clusters_7.readFeatures(json_Clusters_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusters_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusters_7.addFeatures(features_Clusters_7);
var lyr_Clusters_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clusters_7, 
                style: style_Clusters_7,
                popuplayertitle: "Clusters",
                interactive: true,
                title: '<img src="styles/legend/Clusters_7.png" /> Clusters'
            });
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_SubCounty_2,lyr_County_3,lyr_County_4,lyr_Country_5,],
                                fold: "open",
                                title: "Boundaries"});
var group_Resources = new ol.layer.Group({
                                layers: [lyr_Towns_1,],
                                fold: "open",
                                title: "Resources"});
var group_AOI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "AOI"});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,],
                                fold: "open",
                                title: "Base Maps"});

lyr_ESRISatellite_0.setVisible(true);lyr_Towns_1.setVisible(false);lyr_SubCounty_2.setVisible(true);lyr_County_3.setVisible(true);lyr_County_4.setVisible(true);lyr_Country_5.setVisible(true);lyr_Households_6.setVisible(true);lyr_Clusters_7.setVisible(true);
var layersList = [group_BaseMaps,group_Resources,group_Boundaries,lyr_Households_6,lyr_Clusters_7];
lyr_Towns_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_SubCounty_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin2Name_en': 'admin2Name_en', 'admin2Pcode': 'admin2Pcode', 'admin2RefName': 'admin2RefName', 'admin2AltName1_en': 'admin2AltName1_en', 'admin2AltName2_en': 'admin2AltName2_en', 'admin1Name_en': 'admin1Name_en', 'admin1Pcode': 'admin1Pcode', 'admin0Name_en': 'admin0Name_en', 'admin0Pcode': 'admin0Pcode', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_County_3.set('fieldAliases', {'gid': 'gid', 'feature': 'feature', 'county_id': 'county_id', 'countyname': 'countyname', 'display': 'display', 'prev_f_gid': 'prev_f_gid', 'stage': 'stage', 'version': 'version', });
lyr_County_4.set('fieldAliases', {'gid': 'gid', 'feature': 'feature', 'county_id': 'county_id', 'countyname': 'countyname', 'display': 'display', 'prev_f_gid': 'prev_f_gid', 'stage': 'stage', 'version': 'version', });
lyr_Country_5.set('fieldAliases', {'gid': 'gid', 'feature': 'feature', 'name': 'name', 'display': 'display', 'prev_f_gid': 'prev_f_gid', 'stage': 'stage', 'version': 'version', });
lyr_Households_6.set('fieldAliases', {'COUNTY': 'COUNTY', 'Subcounty_name': 'Subcounty_name', 'Division_name': 'Division_name', 'Location_name': 'Location_name', 'Sublocation_name': 'Sublocation_name', 'Enumeration_Area_name': 'Enumeration_Area_name', 'CLUSTER_NUMBER': 'CLUSTER_NUMBER', 'Residence': 'Residence', 'HOMESTEAD_STRUCTURE_NAME': 'HOMESTEAD_STRUCTURE_NAME', 'STRUCTURE_NUMBER': 'STRUCTURE_NUMBER', 'SERIAL_NUM_HU': 'SERIAL_NUM_HU', 'NAME_HH_HEAD': 'NAME_HH_HEAD', 'latitude': 'latitude', 'longitude': 'longitude', 'Team': 'Team', });
lyr_Clusters_7.set('fieldAliases', {'COUNTY': 'COUNTY', 'Subcounty_name': 'Subcounty_name', 'Division_name': 'Division_name', 'Location_name': 'Location_name', 'Sublocation_name': 'Sublocation_name', 'Enumeration_Area_name': 'Enumeration_Area_name', 'CLUSTER_NUMBER': 'CLUSTER_NUMBER', 'Residence': 'Residence', 'HOMESTEAD_STRUCTURE_NAME': 'HOMESTEAD_STRUCTURE_NAME', 'STRUCTURE_NUMBER': 'STRUCTURE_NUMBER', 'SERIAL_NUM_HU': 'SERIAL_NUM_HU', 'NAME_HH_HEAD': 'NAME_HH_HEAD', 'latitude': 'latitude', 'longitude': 'longitude', 'Team': 'Team', });
lyr_Towns_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_SubCounty_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'admin2Name_en': 'TextEdit', 'admin2Pcode': 'TextEdit', 'admin2RefName': 'TextEdit', 'admin2AltName1_en': 'TextEdit', 'admin2AltName2_en': 'TextEdit', 'admin1Name_en': 'TextEdit', 'admin1Pcode': 'TextEdit', 'admin0Name_en': 'TextEdit', 'admin0Pcode': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_County_3.set('fieldImages', {'gid': 'Range', 'feature': 'TextEdit', 'county_id': 'TextEdit', 'countyname': 'TextEdit', 'display': 'TextEdit', 'prev_f_gid': 'TextEdit', 'stage': 'TextEdit', 'version': 'TextEdit', });
lyr_County_4.set('fieldImages', {'gid': 'Range', 'feature': 'TextEdit', 'county_id': 'TextEdit', 'countyname': 'TextEdit', 'display': 'TextEdit', 'prev_f_gid': 'TextEdit', 'stage': 'TextEdit', 'version': 'TextEdit', });
lyr_Country_5.set('fieldImages', {'gid': 'Range', 'feature': 'TextEdit', 'name': 'TextEdit', 'display': 'TextEdit', 'prev_f_gid': 'TextEdit', 'stage': 'TextEdit', 'version': 'TextEdit', });
lyr_Households_6.set('fieldImages', {'COUNTY': 'TextEdit', 'Subcounty_name': 'TextEdit', 'Division_name': 'TextEdit', 'Location_name': 'TextEdit', 'Sublocation_name': 'TextEdit', 'Enumeration_Area_name': 'TextEdit', 'CLUSTER_NUMBER': 'Range', 'Residence': 'Range', 'HOMESTEAD_STRUCTURE_NAME': 'TextEdit', 'STRUCTURE_NUMBER': 'Range', 'SERIAL_NUM_HU': 'Range', 'NAME_HH_HEAD': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Team': 'Range', });
lyr_Clusters_7.set('fieldImages', {'COUNTY': 'TextEdit', 'Subcounty_name': 'TextEdit', 'Division_name': 'TextEdit', 'Location_name': 'TextEdit', 'Sublocation_name': 'TextEdit', 'Enumeration_Area_name': 'TextEdit', 'CLUSTER_NUMBER': 'Range', 'Residence': 'Range', 'HOMESTEAD_STRUCTURE_NAME': 'TextEdit', 'STRUCTURE_NUMBER': 'Range', 'SERIAL_NUM_HU': 'Range', 'NAME_HH_HEAD': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Team': 'Range', });
lyr_Towns_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr_SubCounty_2.set('fieldLabels', {'OBJECTID': 'no label', 'admin2Name_en': 'no label', 'admin2Pcode': 'no label', 'admin2RefName': 'no label', 'admin2AltName1_en': 'no label', 'admin2AltName2_en': 'no label', 'admin1Name_en': 'no label', 'admin1Pcode': 'no label', 'admin0Name_en': 'no label', 'admin0Pcode': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_County_3.set('fieldLabels', {'gid': 'no label', 'feature': 'no label', 'county_id': 'no label', 'countyname': 'no label', 'display': 'no label', 'prev_f_gid': 'no label', 'stage': 'no label', 'version': 'no label', });
lyr_County_4.set('fieldLabels', {'gid': 'no label', 'feature': 'no label', 'county_id': 'no label', 'countyname': 'no label', 'display': 'no label', 'prev_f_gid': 'no label', 'stage': 'no label', 'version': 'no label', });
lyr_Country_5.set('fieldLabels', {'gid': 'no label', 'feature': 'no label', 'name': 'no label', 'display': 'no label', 'prev_f_gid': 'no label', 'stage': 'no label', 'version': 'no label', });
lyr_Households_6.set('fieldLabels', {'COUNTY': 'hidden field', 'Subcounty_name': 'hidden field', 'Division_name': 'hidden field', 'Location_name': 'hidden field', 'Sublocation_name': 'hidden field', 'Enumeration_Area_name': 'hidden field', 'CLUSTER_NUMBER': 'hidden field', 'Residence': 'hidden field', 'HOMESTEAD_STRUCTURE_NAME': 'no label', 'STRUCTURE_NUMBER': 'hidden field', 'SERIAL_NUM_HU': 'hidden field', 'NAME_HH_HEAD': 'no label', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Team': 'hidden field', });
lyr_Clusters_7.set('fieldLabels', {'COUNTY': 'no label', 'Subcounty_name': 'no label', 'Division_name': 'no label', 'Location_name': 'no label', 'Sublocation_name': 'no label', 'Enumeration_Area_name': 'no label', 'CLUSTER_NUMBER': 'no label', 'Residence': 'no label', 'HOMESTEAD_STRUCTURE_NAME': 'no label', 'STRUCTURE_NUMBER': 'no label', 'SERIAL_NUM_HU': 'no label', 'NAME_HH_HEAD': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Team': 'no label', });
lyr_Clusters_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});