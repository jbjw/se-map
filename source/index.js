//

"use strict"

import { Label } from "./Label.js"
import { Body } from "./Body.js"
import { Station } from "./Station.js"
import { Ship } from "./Ship.js"

var myImage = document.querySelector('img')



var entities
fetch( "data/bodies.json" ).then( response => {
	return response.json()
} ).then( json => {
	entities = json
	start()
} )

fetch( "data/asteroids.json" ).then( response => {
	return response.json()
} ).then( json => {
	entities = json
	start()
} )

fetch( "data/stations.json" ).then( response => {
	return response.json()
} ).then( json => {
	entities = json
	start()
} )

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 100000 )
// const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, -10, 1000 )
scene.add( camera )
camera.position.set( 5, 3, 5 )

// const renderer = new THREE.WebGLRenderer( { alpha: true } )
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// document.addEventListener("click", function () {
// 	document.documentElement.webkitRequestFullscreen()
// })

// document.addEventListener("webkitfullscreenchange", function () {
// 	console.log("webkitfullscreenchange")
// })
// document.addEventListener("mozfullscreenchange", function () {
// 	console.log("mozfullscreenchange")
// })
// document.addEventListener("fullscreenchange", function () {
// 	console.log("fullscreenchange")
// })
//
// document.addEventListener("webkitfullscreenchange", function () {
// 	if (!document.webkitFullscreenElement) {
// 		fullscreenButton.style.display = "block"
// 	} else {
// 		fullscreenButton.style.display = "none"
// 	}
// })

// function toggleFullScreen() {
// 	if (!document.webkitFullscreenElement) {
// 		document.documentElement.webkitRequestFullscreen()
// 	} else {
// 		document.webkitExitFullscreen()
// 	}
// }
//
// var fullscreenButton = document.querySelector("#fullscreen-button")
// fullscreenButton.addEventListener("click", function () {
// 	toggleFullScreen()
// })

const controls = new THREE.OrbitControls(camera)

const colors = [
	"#FFFFFF",
	// "#FFFFFF",
	// "#FFFFFF",
	"#FFCCCC",
	"#CCFFFF",
	"#CCCCFF",
]

var loader = new THREE.CubeTextureLoader()
loader.setPath( '/assets/cube_textures/space/' )

var textureCube = loader.load( [
	"r.png", "l.png", // 'px.png', 'nx.png',
	"t.png", "b.png", // 'py.png', 'ny.png',
	"c.png", "rr.png", // 'pz.png', 'nz.png',
] )

var material = new THREE.MeshBasicMaterial( { color: 0xffff00, envMap: textureCube } )
scene.background = textureCube
// scene.background = new THREE.Color( 0x0000ff )

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
scene.add( directionalLight );

let objects = []

function parseCoords( coords ) {
	var result = coords.split( ":" )
	var name = result[ 1 ]
	return new THREE.Vector3( result[2], result[3], result[4] )
}

var originVec

// @todo
function setOrigin( coords ) {
	if ( typeof vec === "string" ) {
		originVec = parseCoords( coords )
	} else {
		originVec = coords
	}
	// reposition things
}

setOrigin( new THREE.Vector3( 0, 0, 0 ) )

var scale = 1/1000000

function convertCoords(vec) {
	return vec.clone().sub( originVec ).multiplyScalar( scale )
}

// var geometry = new THREE.BoxGeometry( 1, 1, 1 )
//
// var material = new THREE.LineDashedMaterial({
// 	color: utils.randomColor(),
// 	linewidth: 1,
// 	scale: 1,
// 	dashSize: 0.1,
// 	gapSize: 0.05,
// })
// geometry.computeLineDistances();
// var line = new THREE.Line(geometry, material)
// scene.add(line)

function start() {
	// console.log( entities )
	for ( let entity of entities ) {
		// console.log( entity )
		switch ( entity.category ) {
			case "asteroid":
				var tmp = new Body( {
					// color: utils.chooseColor(),
					color: new THREE.Color( "brown" ),
					// radius: entity.radius * scale,
					radius: 10000 * scale,
					coords: convertCoords( parseCoords( entity.coords ) ),
					name: entity.tag,
				} )
				objects.push( tmp )
				scene.add( tmp.mesh )
				break
			case "station":

				var tmp = new Body( {
					// color: utils.chooseColor(),
					color: new THREE.Color( "gray" ),
					// radius: entity.radius * scale,
					radius: 100000 * scale,
					coords: convertCoords( parseCoords( entity.coords ) ),
					name: entity.tag,
				} )
				objects.push( tmp )
				scene.add( tmp.mesh )
				break
			case "planet":
				var tmp = new Body( {
					color: new THREE.Color( entity.color ),
					radius: entity.radius * scale,
					coords: convertCoords( parseCoords( entity.coords ) ),
					name: entity.name,
				} )
				console.log( entity.name )
				if ( entity.name === "SUN" ) {
					console.log("the sun")
					tmp.mesh.material.emissive = new THREE.Color( "yellow" )
				}
				objects.push( tmp )
				scene.add( tmp.mesh )
				scene.add( tmp.label.sprite )
				break
			case "moon":
				var tmp = new Body( {
					color: new THREE.Color( entity.color ),
					radius: entity.radius * scale,
					coords: convertCoords( parseCoords( entity.coords ) ),
					name: entity.name,
				} )
				objects.push( tmp )
				scene.add( tmp.mesh )
				scene.add( tmp.label.sprite )

				// var material = new THREE.LineBasicMaterial({
				// 	color: 0x0000ff
				// });
				// var material = new THREE.LineBasicMaterial({
				// 	// color: 0xffffff,
				// 	color: utils.randomColor(),
				// 	linewidth: 10,
				// })
				var material = new THREE.LineDashedMaterial( {
					color: utils.randomColor(),
					linewidth: 10,
					scale: 1,
					dashSize: 0.1,
					gapSize: 0.025,
				} )

				var geometry = new THREE.Geometry()

				var orbitBody = entities.find( e => e.name == entity.orbits )

				geometry.vertices.push(
					convertCoords( parseCoords( entity.coords ) ),
					convertCoords( parseCoords( orbitBody.coords ) ),
				)
				geometry.computeLineDistances()

				var line = new THREE.Line( geometry, material )
				scene.add( line )

				break
		}
	}
}

// var plane = new THREE.Mesh(
// 	new THREE.PlaneGeometry( 10, 10, 10, 10 ),
// 	new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, side: THREE.DoubleSide }),
// )
// scene.add( plane )
// plane.rotation.x = Math.PI/2

// var axisHelper = new THREE.AxisHelper( 5 )
// scene.add( axisHelper )

// colorCenterLine, colorGrid
// var gridHelper = new THREE.GridHelper( 10, 10 )
// var gridHelper = new THREE.GridHelper( 100, 100, new THREE.Color("rgb(100%, 100%, 0%)"), new THREE.Color("rgb(100%, 0%, 0%)") )
// scene.add( gridHelper )

function update() {
	for ( let object of objects ) {
		object.update()
	}
}
setInterval(update, 10)

function render() {
	requestAnimationFrame( render )
	renderer.render( scene, camera )
	controls.update()
	for ( let object of objects ) {
		// object.update()
	}
}
requestAnimationFrame( render )

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize, false );
