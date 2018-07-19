function Ship( args ) {
	objects.push( this )

	this.velocity = new THREE.Vector3( 0, 0, 0 )

	this.mesh = new THREE.Mesh(
		// new THREE.SphereGeometry( args.radius, 32, 32 ),
		new THREE.BoxGeometry( 1, 2, 1, 1 ),
		new THREE.MeshLambertMaterial( { color: 0xaaaaaa, wireframe: false, side: THREE.DoubleSide } ),
	)

	scene.add( this.mesh )

	this.update = function () {
		this.mesh.position.add( this.velocity )
	}
}
