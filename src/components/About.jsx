import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from '../hoc';
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}) => {
  return ( 
     <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants= {fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
       >
        
        <div
          options={{
            max:45,
            scale: 1.1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >

          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className=" text-white text-[20px] font-bold text-center"> 

            {title}
          </h3>
        </div>


      </motion.div>


     </Tilt>

  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

  <div>
  <p style={{ marginBottom: "10px" }}>
    My coding journey started in January 2024 with a laptop and a curious mind. I didn't start coding because I had it all figured out—I started because I was curious. Today, I still chase that same feeling of solving a tough problem and turning an idea into something real.
  </p>

  <p style={{ marginBottom: "10px" }}>
    Balancing academics and coding wasn't easy, but somewhere between late-night debugging and bringing ideas to life, I realized programming had become my passion.
  </p>

  <p style={{ marginBottom: "10px" }}>
    As I stepped further, I wanted to challenge myself beyond personal projects. That's when I started working on paid freelance projects, building websites for real businesses and experiencing the responsibility of creating solutions that people genuinely rely on.
  </p>

  <p style={{ marginBottom: "0" }}>
    Today, I'm still driven by the same curiosity that started this journey. Whether I'm solving DSA problems, building full-stack applications, or working with clients, every project is another opportunity to learn, grow, and create something meaningful.
  </p>
</div>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};


export default SectionWrapper(About, "about");