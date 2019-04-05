// import {Vue, Component, Prop, Emit, Provide, Watch} from "vue-property-decorator";
// import 'ol/ol.css'
// import {toLonLat , transform} from 'ol/proj'
// import Map from 'ol/Map'
// import View from 'ol/View'
// import TitleLayer from 'ol/layer/Tile'
// import OSM from 'ol/source/OSM'

// @Component
// export default class MapViewComponent extends Vue { 
//     @Provide() mapView = null
//     @Emit('init')
//     private initialize() {
//         this.createMap()
//         this.mapView.on("click", ev => {
//             var lonlat = transform(ev.coordinate, 'EPSG:3857', 'EPSG:4326')
//             this.selectLatLong = lonlat
//             this.$parent.selectLonLat = lonlat
//             this.$emit('panretMessage')
//         })
//     }
//     @Emit('create')
//     private createMap() {
//         this.mapView = new Map ({
//             target: 'OSMCanvas',
//             layers: [
//                 new TitleLayer({
//                     source: new OSM()
//                 })
//             ],
//             view: new View({
//                 center:[0,0],
//                 zoom:0
//             })
//         })
//     }
// }

// export default {
//     name: 'mapview',
//     components: {},
//     data: function () {
//         return {
//             mapview: null
//         }
//     },
//     methods: {
//         initialize () {
//             this.createMap()
//             this.mapview.on("click", ev => {
//                 var lonlat = transform(ev.coordinate, 'EPSG:3857', 'EPSG:4326')
//                 this.selectLatLong = lonlat
//                 this.$parent.selectLonLat = lonlat
//                 this.$emit('panretMessage')
//             })
//         },
//         createMap () {
//             this.mapview = new Map ({
//                 target: 'OSMCanvas',
//                 layers: [
//                     new TitleLayer({
//                         source: new OSM()
//                     })
//                 ],
//                 view: new View({
//                     center:[0,0],
//                     zoom:0
//                 })
//             })
//         }
//     }
// }