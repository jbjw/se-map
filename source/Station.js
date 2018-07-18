function Station( args ) {
	this.mesh = new THREE.Mesh(
		new THREE.SphereGeometry( args.radius, 32, 32 ),
		// new THREE.BoxGeometry( 0.1, 0.1, 0.1 ),
		new THREE.MeshBasicMaterial( { color: 0xaaaaaa, wireframe: false, side: THREE.DoubleSide } ),
	)

	this.mesh.position.copy( args.coords )
	scene.add( this.mesh )

	this.label = new Label( {
		text: args.name,
	} )
	scene.add( this.label.sprite )

	this.label.sprite.position.addVectors( this.mesh.position, new THREE.Vector3( 0, 0, 0 ) )

	this.update = function () {

	}
}
