export function Label(args) {
	var canvas = document.createElement("canvas")
	canvas.width = 256
	canvas.height = 256
	// document.body.appendChild(canvas)
	var ctx = canvas.getContext("2d")

	ctx.font = "48px serif";

	ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
	ctx.fillRect(0, 0, 256, 256/4)

	// ctx.fillStyle = "blue";

	ctx.fillStyle = "green";
	ctx.textAlign = "center"
	ctx.textBaseline = "middle"
	ctx.fillText(args.text, 256/2, 25)

	// var spriteMap = new THREE.TextureLoader().load( "../assets/textures/crate.jpg" );

	var spriteMap = new THREE.Texture(canvas)
	spriteMap.needsUpdate = true
	var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });
	this.sprite = new THREE.Sprite(spriteMaterial)
}
