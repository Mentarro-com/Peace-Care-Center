import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import logo from './images/favi.png'; 
import img1 from './images/sar.jpeg';
import img2 from './images/smoke.jpeg';
import img3 from './images/service2.jpg';
import img4 from './images/Psychiatric.jpeg';
import img5 from './images/yoga.jpeg';
import img6 from './images/group.jpeg';
import img7 from './images/individual.jpeg';
import back from './images/pp.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const Info1 = ({ text, isMobile }) => {
  const [boxSize, setBoxSize] = useState({ width: 'auto', height: 'auto' });

  useEffect(() => {
    // Calculate new dimensions for the box
    const contentWidth = Math.min(500, text.length * 8); // Increased maximum width to 500px
    const contentHeight = Math.max(120, Math.ceil(text.length / 30) * 20); // Increased minimum height to 120px
    setBoxSize({ width: contentWidth + 'px', height: contentHeight + 'px' });
  }, [text]);

  // Split the text into points based on '*'
  const points = text.split('*').map((point, index) => (
    <li key={index} className="mb-2 flex items-start">
      <FontAwesomeIcon icon={faHandPointRight} className="mr-2 mt-1 text-white" />
      <span className="text-white">{point.trim()}</span>
    </li>
  ));

  return (
    <div className={`p-9 rounded-lg ${isMobile ? 'bg-navy text-white' : 'bg-blue-800 text-white'} relative`} style={{
      ...boxSize,
      fontSize: '16px',
      overflow: 'hidden',
      wordWrap: 'break-word',
      background: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(4.5px)',
      WebkitBackdropFilter: 'blur(4.5px)',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
       
      textAlign:'justify'
      
    
    }}>
      <ul>
        {points}
      </ul>
    </div>
  );
};


const ServiceCard = ({ service, isMobile, onLeftClick, onRightClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`p-2  my-4 rounded-lg border border-gray-300 shadow-md service-card ${isHovered ? 'transform scale-105 transition-transform duration-300' : 'transition-transform duration-300'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: isMobile ? '#1F3B4D' : 'transparent', 
        color: isMobile ? '#FFFFFF' : '' 
      }}
    >
      <div className="left-space" onClick={onLeftClick}></div>
      <img src={service.image} alt={service.name} className={`w-full mb-4 rounded-lg ${isMobile ? 'object-cover' : ''}`} />
      <div className="right-space" onClick={onRightClick}></div>
      <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
      <p className="text-sm">{service.description}</p>
    </div>
  );
};

const App = () => {
  const [focusElement, setFocusElement] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ]; // Include paths for all carousel items
  const services = [
    { name: "Alcohol Addict Treatment Centre", description: "Alcohol addiction extends beyond personal struggle, affecting families and society with risks of health issues and social discord.Located in Anakaputhur, our center aims to restore happiness by helping individuals rediscover themselves and begin anew, offering comprehensive support for an addiction-free life.Alcohol de-addiction involves specialized counseling and therapy aimed at helping individuals overcome dependence on alcohol, addressing both physical and psychological aspects of addiction to promote recovery and a healthier lifestyle. ", image: img1 },
    { name: "Smoking Addict Treatment Center", description: "Our counselling approach is tailored to individual needs, aiming to help people recover from alcohol and drug addiction and lead productive lives.We address personal fears and anxieties, crucial for overcoming addiction, providing a trustworthy environment for clients to discuss their challenges and achieve their goals.*With skilled staff and doctors, we help individuals understand the root causes of their addiction, empowering them to adopt healthier lifestyles and reintegrate into society as productive members", image: img2 },
    { name: "Drug Addict Treatment Center", description: "Peace Life Care Centre in Anakaputhur, Chennai specializes in treating drug-dependent individuals, emphasizing complete abstinence for recovery.They prioritize addressing addiction and co-occurring mental health issues, recognizing the urgent need for effective drug de-addiction treatment to prevent harm and promote sobriety.*The centre follows diagnostic criteria such as tolerance and withdrawal to assess substance dependence, crucial for understanding the severity of addiction", image: img3 },
    { name: "Psychiatric Treatment Center", description: "Peace Life Care Centre in Anakaputhur, Chennai specializes in treating a variety of mental health challenges exacerbated by urbanization, job stress, and lifestyle changes.They offer a holistic approach including counselling, medication, and lifestyle interventions aimed at promoting long-term behavioral changes and preventing illnesses like anxiety and depression.The centre's psychiatric clinicians provide compassionate, multidisciplinary care known for its excellence in therapies and procedures tailored to each patient's needs..", image: img4 },
    { name: "Yoga Therapy Center", description: "The  Yoga therapy is guided by an experienced and certified instructor who teaches how the mind functions and how it can be used for liberation.The therapy emphasizes understanding the reality of human existence and aims to provide insights into the mind's workings and its potential for liberation.*It explores the human condition, addressing what we know, how we know it, the nature of suffering, and methods to overcome suffering through understanding and practice", image: img5 },
    { name: "Group Thearapy", description: "Group therapy is a specialized form of counseling used to address psychological disorders such as drug and alcohol addiction.*Sessions are conducted in a confidential and safe setting, allowing participants to openly discuss their feelings and challenges.Group members benefit from mutual support and understanding, fostering personal growth, and providing diverse perspectives on coping strategies.", image: img6 },
    { name: "Individual Counselling", description: "At Peace Life Care Center, individual counseling offers tailored support designed to meet the specific needs and challenges of each person recovering from alcohol addiction.Our counselors collaborate closely with individuals to address underlying triggers, develop effective coping strategies, and establish realistic goals for sustained recovery.*Through individual counseling sessions, our experienced counselors offer compassionate listening, personalized advice, and therapeutic interventions to support clients in achieving personal growth and long-lasting sobriet", image: img7 },
    
  ];

  const info = [
    <Info1 key="1" text="Alcohol addiction extends beyond personal struggle, affecting families and society with risks of health issues and social discord.*Located in Anakaputhur, our center aims to restore happiness by helping individuals rediscover themselves and begin anew, offering comprehensive support for an addiction-free life.*Alcohol de-addiction involves specialized counseling and therapy aimed at helping individuals overcome dependence on alcohol, addressing both physical and psychological aspects of addiction to promote recovery and a healthier lifestyle." isMobile={isMobile} />,
    <Info1 key="2" text="Our counselling approach is tailored to individual needs, aiming to help people recover from alcohol and drug addiction and lead productive lives.*We address personal fears and anxieties, crucial for overcoming addiction, providing a trustworthy environment for clients to discuss their challenges and achieve their goals.*With skilled staff and doctors, we help individuals understand the root causes of their addiction, empowering them to adopt healthier lifestyles and reintegrate into society as productive members" isMobile={isMobile} />,
    <Info1 key="3" text="Peace Life Care Centre in Anakaputhur, Chennai specializes in treating drug-dependent individuals, emphasizing complete abstinence for recovery.*They prioritize addressing addiction and co-occurring mental health issues, recognizing the urgent need for effective drug de-addiction treatment to prevent harm and promote sobriety.*The centre follows diagnostic criteria such as tolerance and withdrawal to assess substance dependence, crucial for understanding the severity of addiction" isMobile={isMobile} />,
    <Info1 key="4" text="Peace Life Care Centre in Anakaputhur, Chennai specializes in treating a variety of mental health challenges exacerbated by urbanization, job stress, and lifestyle changes.*They offer a holistic approach including counselling, medication, and lifestyle interventions aimed at promoting long-term behavioral changes and preventing illnesses like anxiety and depression.*The centre's psychiatric clinicians provide compassionate, multidisciplinary care known for its excellence in therapies and procedures tailored to each patient's needs." isMobile={isMobile} />,
    <Info1 key="5" text="The  Yoga therapy is guided by an experienced and certified instructor who teaches how the mind functions and how it can be used for liberation.*The therapy emphasizes understanding the reality of human existence and aims to provide insights into the mind's workings and its potential for liberation.*It explores the human condition, addressing what we know, how we know it, the nature of suffering, and methods to overcome suffering through understanding and practice." isMobile={isMobile} />,
    <Info1 key="6" text="Group therapy is a specialized form of counseling used to address psychological disorders such as drug and alcohol addiction.*Sessions are conducted in a confidential and safe setting, allowing participants to openly discuss their feelings and challenges.*Group members benefit from mutual support and understanding, fostering personal growth, and providing diverse perspectives on coping strategies." isMobile={isMobile} />,
    <Info1 key="7" text="At Peace Life Care Center, individual counseling offers tailored support designed to meet the specific needs and challenges of each person recovering from alcohol addiction.*Our counselors collaborate closely with individuals to address underlying triggers, develop effective coping strategies, and establish realistic goals for sustained recovery.*Through individual counseling sessions, our experienced counselors offer compassionate listening, personalized advice, and therapeutic interventions to support clients in achieving personal growth and long-lasting sobriet" isMobile={isMobile} />
  ];

  return (
    <div className={`relative h-screen w-100% overflow-hidden flex justify-center items-center ${isMobile ? '' : 'bg-cover bg-center'}`} style={isMobile ? {} : { backgroundImage: `url(${back})` }}>
      {!isMobile && (
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            carouselRadius={200}
            peripheralImageRadius={50}
            centralImageRadius={50}
            focusElementStyling={{ border: '2px solid #ba4949' }}
            autoRotate={false}
            autoRotateTime={5}
            borderWidth={4}
            borderHexColor={'1c364f'}
            centralImageIndex={6}
            className="z-0"
          />
          <img src={logo} alt="Logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full" />
        </div>
      )}
      {!isMobile && (
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-aquamarine p-4 max-h-full overflow-y-auto">
          <CSSTransition
            in={true}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div>{info[focusElement]}</div>
          </CSSTransition>
        </div>
      )}
      {isMobile && (
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              isMobile={isMobile} 
              onLeftClick={() => console.log('Left Click')} 
              onRightClick={() => console.log('Right Click')} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
