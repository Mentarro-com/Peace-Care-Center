import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Banner from "./Banner.jsx"


function FeatureCard({ icon, title, description,link_url}) {
  return (
    
    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
      <div>
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
            {icon}
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-300">{description}</p>
          <div className="mt-6">
            <a
              className="mb -8 inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
              href={link_url}  target="_blank" rel="noopener noreferrer"
            >
              Learn More
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageContainer({ imageUrl, imageAlt }) {
  return (
    <div className="pl-6 lg:pl-0 md:pl-4">
      <img
        loading="lazy"
        className="w-full h-auto md:w-auto md:mr-16 lg:-mr-48 object-cover rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 mr-9 mb-9 mt-8"
        src={imageUrl}
        alt={imageAlt}
      />
    </div>
  );
}

function FeatureSection() {

  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);
  const [isVisibleFourth, setIsVisibleFourth] = useState(false);
  const [isVisibleFifth, setIsVisibleFifth] = useState(false);
  const [isVisibleSixth, setIsVisibleSixth] = useState(false);
  const [isVisibleSeventh, setIsVisibleSeventh] = useState(false);
  const [isVisibleEighth, setIsVisibleEighth] = useState(false);
  const [isVisibleNineth, setIsVisibleNineth] = useState(false);
  const [isVisibleTenth, setIsVisibleTenth] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const targetPositionFirst = windowHeight * -0.1;
        const targetPositionSecond = windowHeight * 0.6;
        const targetPositionThird = windowHeight * 1.3;
        const targetPositionFourth = windowHeight * 2.2;
        const targetPositionFifth = windowHeight * 2.9;
        const targetPositionSixth = windowHeight * 3.6;
        const targetPositionSeventh = windowHeight * 4.3;
        const targetPositionEighth = windowHeight * 4.9;
        const targetPositionNineth = windowHeight * 5.7;
        const targetPositionTenth = windowHeight * 6.6;
        setIsVisibleFirst(scrollPosition > targetPositionFirst);
        setIsVisibleSecond(scrollPosition > targetPositionSecond);
        setIsVisibleThird(scrollPosition > targetPositionThird);
        setIsVisibleFourth(scrollPosition > targetPositionFourth);
        setIsVisibleFifth(scrollPosition > targetPositionFifth);
        setIsVisibleSixth(scrollPosition > targetPositionSixth);
        setIsVisibleSeventh(scrollPosition > targetPositionSeventh);
        setIsVisibleEighth(scrollPosition > targetPositionEighth);
        setIsVisibleNineth(scrollPosition > targetPositionNineth);
        setIsVisibleTenth(scrollPosition > targetPositionTenth);
  
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const first = useSpring({
      opacity: isVisibleFirst ? 1 : 0,
      transform: isVisibleFirst ? 'translateX(0%)' : 'translateX(-100%)',
      config: { duration: 500 },
      delay: isVisibleFirst ? 500 : 0
    });
  
    const second = useSpring({
      opacity: isVisibleSecond ? 1 : 0,
      transform: isVisibleSecond ? 'translateX(0%)' : 'translateY(-100%)',
      config: { duration: 500 },
      delay: isVisibleSecond ? 500 : 0
    });
  
    const third = useSpring({
      opacity: isVisibleThird ? 1 : 0,
      transform: isVisibleThird ? 'translateX(0%)' : 'translateX(-100%)',
      config: { duration: 500 },
      delay: isVisibleThird ? 500 : 0
    });
  
    const fourth = useSpring({
      opacity: isVisibleFourth ? 1 : 0,
      transform: isVisibleFourth ? 'translateX(0%)' : 'translateY(-100%)',
      config: { duration: 500 },
      delay: isVisibleFourth ? 500 : 0
    });
  
    const fifth = useSpring({
        opacity: isVisibleFifth ? 1 : 0,
        transform: isVisibleFifth ? 'translateX(0%)' : 'translateX(-100%)',
        config: { duration: 500 },
        delay: isVisibleFifth ? 500 : 0
      });
    
      const sixth = useSpring({
        opacity: isVisibleSixth ? 1 : 0,
        transform: isVisibleSixth ? 'translateX(0%)' : 'translateY(-100%)',
        config: { duration: 500 },
        delay: isVisibleSixth ? 500 : 0
      });

      const seventh = useSpring({
        opacity: isVisibleSeventh ? 1 : 0,
        transform: isVisibleSeventh ? 'translateX(0%)' : 'translateX(-100%)',
        config: { duration: 500 },
        delay: isVisibleSeventh ? 500 : 0
      });
    
      const eighth = useSpring({
        opacity: isVisibleEighth ? 1 : 0,
        transform: isVisibleEighth ? 'translateX(0%)' : 'translateY(-100%)',
        config: { duration: 500 },
        delay: isVisibleEighth ? 500 : 0
      });

      const nineth = useSpring({
        opacity: isVisibleNineth ? 1 : 0,
        transform: isVisibleNineth ? 'translateX(0%)' : 'translateX(-100%)',
        config: { duration: 500 },
        delay: isVisibleNineth ? 500 : 0
      });
    
      const tenth = useSpring({
        opacity: isVisibleTenth ? 1 : 0,
        transform: isVisibleTenth ? 'translateX(0%)' : 'translateY(-100%)',
        config: { duration: 500 },
        delay: isVisibleTenth ? 500 : 0
      });


  return (
    <div>
        <Banner />
    <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
    <h1 className="text-white text-center text-[60px] text-bold">Our Services</h1>
<animated.div style={first}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <ImageContainer
        className="w-full h-auto lg:h-full object-cover rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
        imageUrl="./images/service1.jpg"
            imageAlt="Natural Language Processing (NLP)"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
            }
            title="Alcohol De-Addiction"
            description="Tailored programs for alcohol recovery, offering compassionate support and holistic interventions."
            link_url="https://en.wikipedia.org/wiki/Alcoholism"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={second}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Drug De-Addiction"
            description="Experience our innovative approach to drug rehabilitation, blending evidence-based treatments with holistic therapies for effective recovery."
            link_url="https://simple.wikipedia.org/wiki/Drug_addiction"
          />
          <ImageContainer
            imageUrl="./images/service2.jpg"
            imageAlt="Sentiment Analysis"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={third}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <ImageContainer
            imageUrl="./images/service3.jpg"
            imageAlt="Natural Language Generation (NLG)"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Psychiatric Service"
            description="Comprehensive psychiatric services offering personalized care and holistic approaches, empowering individuals on their journey towards mental wellness."
            link_url="https://en.wikipedia.org/wiki/Psychiatry"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={fourth}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
            }
            title="Smoking De-Addiction"
            description="Specialized smoking cessation programs tailored to individual needs, providing support and strategies for a successful journey to a smoke-free life."
            link_url="https://en.wikipedia.org/wiki/Smoking_cessation"
          />
          <ImageContainer
            imageUrl="./images/smoke.webp"
            imageAlt="Natural Language Processing (NLP)"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={fifth}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <ImageContainer
            imageUrl="./images/service5.webp"
            imageAlt="Sentiment Analysis"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Ayurveda, Naturopathy and Homeopathy"
            description="Explore the natural healing traditions of Ayurveda, Naturopathy, and Homeopathy, offering holistic wellness solutions tailored to your individual health needs."
            link_url="https://en.wikipedia.org/wiki/Naturopathy"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={sixth}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Yoga"
            description="Embark on a transformative journey with yoga, fostering physical strength, mental clarity, and spiritual well-being through mindful movement and breath."
            link_url="https://en.wikipedia.org/wiki/Yoga"
         />
          <ImageContainer
            imageUrl="./images/service6.jpg"
            imageAlt="Natural Language Generation (NLG)"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={seventh}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <ImageContainer
            imageUrl="./images/doctor.webp"
            imageAlt="Natural Language Processing (NLP)"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
            }
            title="Medically Qualified Doctor Team"
            description="Experienced medical team offers personalized care and tailored treatment plans to address your unique health needs effectively."
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={eighth}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Lifestyle and Dietary Management"
            description="Guidance and support for achieving optimal health through personalized lifestyle adjustments and dietary strategies tailored to your individual needs."
            link_url="https://en.wikipedia.org/wiki/Dietary_management"         
          />
          <ImageContainer
            imageUrl="./images/service8.jpg"
            imageAlt="Sentiment Analysis"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={nineth}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <ImageContainer
            imageUrl="./images/service9.jpg"
            imageAlt="Natural Language Generation (NLG)"
          />
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Psychologist evaluation and support"
            description="Professional evaluation and compassionate support from psychologists, aiding individuals in understanding and addressing their mental health concerns."
            link_url="https://en.wikipedia.org/wiki/Psychological_evaluation"
          />
        </div>
      </div>
      </animated.div>

      <animated.div style={tenth}>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            }
            title="Quality and Authenticity of Treatment"
            description="Ensuring the highest standards of treatment efficacy and authenticity, delivering trustworthy care aligned with your health and wellness goals."
            link_url="https://en.wikipedia.org/wiki/Health_care_quality"
          />
          <ImageContainer
            imageUrl="./images/service10.jpg"
            imageAlt="Sentiment Analysis"
          />
        </div>
      </div>
      </animated.div>
</div>
    </div>
  );
}

export default FeatureSection;
