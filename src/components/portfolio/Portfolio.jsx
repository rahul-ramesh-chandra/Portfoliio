import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import teamup from "/teamup.jpg";
import chatroom from "/chatroom.jpeg";
import bug from "/bug.jpeg";
import dog from "/dog.jpeg";


const items = [
  {
    id: 1,
    title: "Team Up",
    img: teamup,
    desc: "This decentralized platform is designed to facilitate team formation and collaboration, leveraging blockchain technology for secure and transparent user interactions. The pltform enables registration, validation and find potential teammates based on shared interest and skills.",
  },
  {
    id: 2,
    title: "Chat Room",
    img: chatroom,
    desc: "This chatroom application is a robust and secure platform designed for team communication and collaboration. Built using React for frontend and Firebase for backend services, it offers a seamless experience for users to engage in conversations in real-time. ",
  },
  {
    id: 3,
    title: "Bug Fixer",
    img: bug,
    desc: "This tool is designed to assist developers in identifying and fixing bugs in their code. By leveraging the Open AI API, it provies intelligent suggestions and solutions to code issues, enhancing the debugging process and improving code quailty.",
  },
  {
    id: 4,
    title: "Doggo",
    img: dog,
    desc: "Doggo is a playful landing page designed as a 'Tinder for Dogs'. It is built using bootstrap framework, built using the fun concept with a practical solution for arranging dog meetups and playdates.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
