// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim"; // Use loadSlim for better performance

// const ParticlesBackground = () => {
// 	const particlesInit = useCallback(async (engine) => {
// 		await loadSlim(engine);
// 	}, []);

// 	const particlesLoaded = useCallback(async (container) => {
// 		// console.log(container);
// 	}, []);

// 	return (
// 		<Particles
// 			id="auth-particles"
// 			init={particlesInit}
// 			loaded={particlesLoaded}
// 			options={{
// 				particles: {
// 					number: {
// 						value: 90,
// 						density: {
// 							enable: true,
// 							value_area: 800,
// 						},
// 					},
// 					color: {
// 						value: "#ffffff",
// 					},
// 					shape: {
// 						type: "circle",
// 					},
// 					opacity: {
// 						value: 0.5,
// 						random: false,
// 					},
// 					size: {
// 						value: 3,
// 						random: true,
// 					},
// 					links: {
// 						// Changed from line_linked to links
// 						enable: true,
// 						distance: 150,
// 						color: "#ffffff",
// 						opacity: 0.4,
// 						width: 1,
// 					},
// 					move: {
// 						enable: true,
// 						speed: 2,
// 						direction: "none",
// 						random: false,
// 						straight: false,
// 						outModes: "out", // Changed from out_mode to outModes
// 						bounce: false,
// 					},
// 				},
// 				interactivity: {
// 					detectsOn: "canvas", // Changed from detect_on to detectsOn
// 					events: {
// 						onHover: {
// 							// Changed from onhover to onHover
// 							enable: true,
// 							mode: "grab",
// 						},
// 						onClick: {
// 							// Changed from onclick to onClick
// 							enable: true,
// 							mode: "push",
// 						},
// 						resize: true,
// 					},
// 					modes: {
// 						grab: {
// 							distance: 140,
// 							links: {
// 								// Changed from line_linked to links
// 								opacity: 1,
// 							},
// 						},
// 						push: {
// 							quantity: 4, // Changed from particles_nb to quantity
// 						},
// 					},
// 				},
// 				detectRetina: true, // Changed from retina_detect to detectRetina
// 				background: {
// 					color: "#2a2a2a",
// 					position: "50% 50%",
// 					repeat: "no-repeat",
// 					size: "cover",
// 				},
// 			}}
// 		/>
// 	);
// };

// export default ParticlesBackground;

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
// 	const particlesInit = useCallback(async (engine) => {
// 		await loadSlim(engine);
// 	}, []);

// 	return (
// 		<Particles
// 			id="auth-particles"
// 			init={particlesInit}
// 			options={{
// 				particles: {
// 					number: {
// 						value: 90,
// 						density: {
// 							enable: true,
// 							value_area: 800,
// 						},
// 					},
// 					color: {
// 						value: "#ffffff",
// 					},
// 					shape: {
// 						type: "circle",
// 					},
// 					opacity: {
// 						value: 0.3, // Reduced opacity
// 						random: false,
// 					},
// 					// ... rest of your particles config
// 				},
// 				background: {
// 					color: "transparent", // Changed to transparent
// 				},
// 				fullScreen: {
// 					enable: false, // Disable fullscreen
// 				},
// 				detectRetina: true,
// 			}}
// 			style={{
// 				position: "absolute",
// 				top: 0,
// 				left: 0,
// 				width: "100%",
// 				height: "100%",
// 				zIndex: 1,
// 			}}
// 		/>
// 	);
// };

// export default ParticlesBackground;


import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<Particles
			id="auth-particles"
			init={particlesInit}
			options={{
				particles: {
					number: {
						value: 40,
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: "#ffffff",
					},
					shape: {
						type: "circle",
					},
					stroke: {
						width: 0,
						color: "#000000",
					},
					polygon: {
						nb_sides: 5,
					},
					opacity: {
						value: 0.8,
						random: false,
					},
					anim: {
						enable: true,
						speed: 1,
						opacity_min: 0,
						sync: false,
					},
					size: {
						value: 4,
						random: true,
						anim: {
							enable: false,
							speed: 4,
							size_min: 0.2,
							sync: false,
						},
					},
					links: {
						enable: false,
						distance: 150,
						color: "#ffffff",
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 2,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						outModes: {
							default: "bounce",
						},
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: "grab",
						},
						onClick: {
							enable: true,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 140,
							links: {
								opacity: 1,
							},
						},
						push: {
							quantity: 4,
						},
					},
				},
				background: {
					color: "transparent",
				},
				fullScreen: {
					enable: false,
				},
				detectRetina: true,
				fpsLimit: 120,
			}}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 1,
			}}
		/>
	);
};

export default ParticlesBackground;