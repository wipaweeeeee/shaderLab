THREE.VertexColorShader = {

	uniforms: { 
        opacity: {value: 0.5, type: "f"}

	},

	vertexShader: [

                        "varying vec3 vColor;",

                        "void main() {",

                            "vColor = color;",
                            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                        "}"

	].join("\n"),

	fragmentShader: [

                        "varying vec3 vColor;",
                        "uniform float opacity;",

			"void main( void ) {",

                            "gl_FragColor = vec4( vColor.r, vColor.g, vColor.b, opacity );",

                        "}"

	].join("\n")

};