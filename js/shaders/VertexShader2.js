THREE.VertexColorShader = {

	uniforms: { 
        opacity: {value: 0.5, type: "f"}

	},

	vertexShader: [

                        "varying vec3 vColor;",
                        "uniform float morphTargetInfluences[1];",

                        "void main() {",

                            "vColor = color;",
                            "vec3 morphed = vec3(0.0, 0.0, 0.0);",
                            "morphed += ( morphTarget0 - position ) * morphTargetInfluences[0];",
                            "morphed += position;",
                            "gl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );",

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