import { Label } from "./Label.js"

export function Body(args) {
	this.mesh = new THREE.Mesh(
		new THREE.SphereGeometry( args.radius, 32, 32 ),
		// new THREE.BoxGeometry( 4, 4, 1, 1 ),
		new THREE.MeshBasicMaterial( { color: args.color, wireframe: false, side: THREE.DoubleSide } ),
		// new THREE.MeshBasicMaterial( { color: 0x00aa00, wireframe: false, side: THREE.DoubleSide } ),
	)

	this.mesh.position.copy( args.coords )

	this.label = new Label( {
		text: args.name,
	} )


	this.label.sprite.position.addVectors( this.mesh.position, new THREE.Vector3( 0, 0, 0 ) )

	// this.group = new THREE.Group()
	// this.group.add( this.mesh );
	// this.group.add( this.label );
	// scene.add( this.group );

	this.update = function () {

	}
}
