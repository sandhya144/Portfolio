import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { ReactTyped } from "react-typed";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';
import image from '../assets/pimage.png'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto pt-20 ` }>
      <div
         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-16`}
      >
      

  <div className="flex-1 max-w-xl">
  <h1 className={`${styles.heroHeadText} text-5xl sm:text-6xl font-bold text-white leading-tight`}>
    Hi, I'm <span className="text-[#915EFF]">Sandhya Pandey</span>
  </h1>
  <p className={`${styles.heroSubText} mt-4 text-lg sm:text-xl text-white font-bold`} >


    <ReactTyped
      strings={[
       `I'm a <span style="color:#915EFF; font-weight:bold;"> Fullstack Developer.</span>`,
         `I'm a <span style="color:#915EFF; font-weight:bold;">Competitive Coder.</span>`,
    `I love turning <span style="color:#915EFF; font-weight:bold;">ideas into reality.</span>`,
      ]}

      speed={100}
      backSpeed={70} 
      loop
      showCursor={true}
      cursorChar="|"
      contentType="html"
    />


    <motion.p
          variants={fadeIn("", "", 0.1, 1)}
           className='mt-4 text-secondary text-[17px] leading-[30px]font-normal'  
         > I’m a coder at heart who loves solving tricky problems. <br/>With experience in full-stack development, I enjoy building things that work and last. 
         I’d be happy to bring my expertise to the table and help make your projects a success.

         </motion.p>

      {/* resume button */}
      <a
       href="https://drive.google.com/file/d/11fS4gjjUbAHBfZJWcZXmZo8opfKp0wEd/view"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-block text-white py-3 px-8 rounded-full mt-8 text-lg font-bold transition duration-300 transform hover:scale-105"
       style={{
        background: 'linear-Gradient(90deg, #8245ec, #a855f7)',
        boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
       }}
       >
        DOWNLOAD CV  
      </a>
      </p>

</div>

 {/* RIGHT SIDE IMAGE */}
   <div className="md:w-1/2 flex justify-center md:justify-end">
    <Tilt
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full overflow-hidden"
    glareEnable={true} 
    glareMaxOpacity={0.3}         
    scale={1.05} 
    perspective={1000}                
    tiltMaxAngleX={20}           
    tiltMaxAngleY={20} 
    transitionSpeed={1000} 
     gyroscope={true}      
  >
    <img
      src={image}
      alt="sp"
      className=" absolute z-15 w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
    />
  </Tilt>
   </div>
      {/* <ComputersCanvas /> */}
     </div> 

{/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}

    
    </section>
  );
};

export default Hero;

