import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0"
          }}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 0
            },
            particles: {
              number: {
                value: 180,
                limit: 500,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "images/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
              }
            },
            // size: {
            //   value: 30,
            //   random: true,
            //   anim: {
            //     enable: true,
            //     speed: 10,
            //     size_min: 10,
            //     sync: false
            //   }
            // },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#939EAD",
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              onClick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                lineLinked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 2
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true}}
        />
    );
};

export default Particle