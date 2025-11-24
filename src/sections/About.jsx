import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div ref={aboutRef} className='h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10'>
          {/* Text container */}
        <div 
          className='about-text main-container py-4 lg:py-12 font-heading text-black 
                    text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-relaxed 
                    max-w-8xl mx-auto text-center'>
          Mi enfoque combina un diseño limpio, interacciones fluidas y detalles bien pensados 
          para garantizar que cada proyecto sea visualmente impactante y altamente funcional. 
          Ya sea diseñar un portafolio, crear un sitio web empresarial o fortalecer la presencia 
          online de una marca, me centro en crear trabajos que no solo sean atractivos, sino que 
          también conecten con las personas de forma significativa.
        </div>
      </div>
    </>
  )
}

export default About