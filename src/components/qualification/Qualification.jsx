import { useRef, useState, useEffect } from "react";
import "./qualification.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Qualification = () => {
  const ref = useRef();
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (card) => {
    if (isMobile) {
      setExpandedCard(expandedCard === card ? null : card);
    }
  };

  return (
    <motion.div
      className="qualification"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Passionate Explorer and Traveller of
          <br />The Technology...
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Certifications,</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Education, Skills</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className={`box ${expandedCard === 'education' ? 'expanded' : ''}`}
          onClick={() => handleCardClick('education')}
        >
          <h2>Education</h2>
          <div className={`content ${expandedCard === 'education' ? 'show' : 'hide'}`}>
            <ul>
              <li>Tumkur University</li>
              BCA
              2022-2025
            </ul>
          </div>
        </motion.div>
        <motion.div
          className={`box ${expandedCard === 'certifications' ? 'expanded' : ''}`}
          onClick={() => handleCardClick('certifications')}
        >
          <h2>Certifications</h2>
          <div className={`content ${expandedCard === 'certifications' ? 'show' : 'hide'}`}>
            <ul type="circle">
              <li>Oracle Professional Generative AI Certification.</li>
              <li>Google Cloud Hands on Arcade Certification.</li>
              <li>Cisco's thingQbator Blockchain Program Participation.</li>
              <li>Project Development using Java.</li>
              <li>Complete Web Development from Udemy.</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className={`box ${expandedCard === 'skills' ? 'expanded' : ''}`}
          onClick={() => handleCardClick('skills')}
        >
          <h2>Skills</h2>
          <div className={`content ${expandedCard === 'skills' ? 'show' : 'hide'}`}>
            <ul type="none">
              <li><b>Tech Stacks:</b> Java, Spring Boot, Python, C, HTML, CSS, JS, MERN. <br /></li>
              <li><b>Tools and Frameworks:</b> Git, Github, Bootstrap, Tailwind, Firebase, SQL. <br /></li>
              <li><b>Soft skills:</b> Communication, Collabaration, Consistency, Dedication, Punctuality. <br /></li>
              <li><b>Currently Learning:</b>AI and DevOps.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
      <br />
    </motion.div>
  );
};

export default Qualification;
