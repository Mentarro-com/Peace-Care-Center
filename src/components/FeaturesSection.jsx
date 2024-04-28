import { React, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPositionFirst = windowHeight * 2.9; // --ADJUST BASED ON SCREEN SIZE
      setIsVisible(scrollPosition > targetPositionFirst);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(20px)" : "translateY(5px)",
    config: { tension: 200, friction: 20 }, // Adjust tension and friction for smoother animation
    delay: 175, // Adjust delay as needed for staggered animations
  });
  const springProps2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(20px)" : "translateY(5px)",
    config: { tension: 200, friction: 20 },
    delay: 225,
  });
  const springProps3 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(20px)" : "translateY(5px)",
    config: { tension: 200, friction: 20 },
    delay: 275,
  });
  const springProps4 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(20px)" : "translateY(5px)",
    config: { tension: 200, friction: 20 },
    delay: 325,
  });

  return (
    <div className="bg-slate-900">
      <section
        id="features"
        className="px-2 space-y-6 py-8 md:py-12 lg:py-24 max-w-5xl mx-auto bg-slate-900"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center text-white">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Tools to empower your creative journey, enabling you to bring your
            artistic visions to life effortlessly.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          {/* Card 1 */}
          <animated.div style={springProps}>
            <div className="relative overflow-hidden rounded-lg relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-400 to-blue-400 p-0.5 shadow-lg p-2 text-black   hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h48v48H0z" fill="none" />
                  <g id="Shopicon">
                    <path d="M4,20h4v24h32V20h4L24,4L4,20z M36,20v20H12V20v-1.277l12-9.6l12,9.6V20z" />
                    <g>
                      <path d="M29,23c0-2.761-2.239-5-5-5s-5,2.239-5,5s2.239,5,5,5S29,25.761,29,23z" />
                      <path d="M24,28c-4.42,0-8,3.58-8,8h16C32,31.58,28.42,28,24,28z" />
                    </g>
                  </g>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Hospitality</h3>
                  <p className="text-sm text-muted-foreground">
                    Accommodation tailored to your need
                  </p>
                </div>
              </div>
            </div>
          </animated.div>

          {/* Card 2 */}
          <animated.div style={springProps2}>
            <div className="relative overflow-hidden rounded-lg relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-400 to-blue-400 p-0.5 shadow-lg p-2 text-black hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  height="48"
                  width="48"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <style type="text/css">{`.st0{fill:#000000;}`}</style>
                  <g>
                    <path
                      className="st0"
                      d="M471.199,231.069L271.6,33.725l0.044,0.093C249.149,11.271,219.501-0.05,189.995,0
                        c-29.463-0.05-59.112,11.271-81.609,33.818c-22.54,22.49-33.857,52.092-33.815,81.609c-0.042,29.502,11.274,59.147,33.815,81.645
                        l47.106,46.6c-1.42-0.043-2.842-0.043-4.259-0.043c-38.632,0-73.726,9.714-99.984,26.161
                        c-13.106,8.245-24.057,18.189-31.846,29.782c-7.832,11.55-12.417,24.835-12.417,38.858v78.719c0,14.016,4.585,27.308,12.417,38.858
                        c11.732,17.364,30.377,31.15,53.107,40.83c22.773,9.664,49.762,15.113,78.723,15.163c38.579-0.05,73.676-9.758,99.93-26.211
                        c13.149-8.202,24.054-18.188,31.89-29.781c7.793-11.55,12.374-24.842,12.374-38.858v-35.144l12.554,12.425l-0.043-0.1
                        c22.494,22.54,52.143,33.868,81.648,33.818c29.466,0.05,59.112-11.278,81.612-33.768c22.54-22.548,33.814-52.143,33.814-81.659
                        C505.013,283.212,493.739,253.609,471.199,231.069z M141.473,148.686c-19.106-19.149-19.106-50.63,0.272-70.009
                        c9.346-9.349,21.809-14.525,35.102-14.525L141.473,148.686z M29.896,338.43c0.043-9.026,2.839-17.637,8.482-26.075
                        c4.95-7.37,12.231-14.432,21.347-20.705l175.312,102.594c-3.986,2.194-8.201,4.259-12.65,6.137
                        c-20.113,8.567-44.672,13.608-71.152,13.608c-35.38,0.05-67.27-9.026-89.764-23.186c-11.27-7.097-20.16-15.4-26.118-24.283
                        c-2.205-3.305-4.033-6.645-5.456-10.08V338.43z M272.518,417.15c0,9.026-2.842,17.644-8.474,26.068
                        c-8.438,12.56-23.418,24.196-43.074,32.542c-19.612,8.338-43.715,13.335-69.736,13.335c-34.735,0-66.029-8.94-87.792-22.684
                        c-10.908-6.832-19.433-14.848-25.064-23.193c-5.642-8.424-8.439-17.042-8.482-26.068v-32.484
                        c11.087,12.274,26.211,22.498,44.034,30.054c22.268,9.449,48.798,14.854,77.304,14.854c37.983,0,72.44-9.586,98.005-25.623
                        c8.98-5.586,16.816-12.045,23.279-19.243V417.15z M272.518,356.44c-0.272,0.688-0.552,1.326-0.918,2.014
                        c-1.233,2.753-2.749,5.406-4.538,8.065c-3.847,5.772-9.026,11.228-15.164,16.311L78.329,281.29c1.054-0.459,2.065-1.011,3.116-1.42
                        c19.611-8.338,43.715-13.335,69.79-13.335c10.26,0,20.208,0.781,29.689,2.251c22.637,3.434,42.704,10.762,58.054,20.382
                        c1.878,1.147,3.667,2.388,5.359,3.628c8.294,5.908,14.847,12.46,19.475,19.293c0.093,0.086,0.183,0.179,0.233,0.265
                        c5.632,8.438,8.474,17.049,8.474,26.075V356.44z M451.77,374.9c-17.228,17.192-39.639,25.752-62.183,25.752
                        c-22.588,0-44.991-8.524-62.223-25.752l-0.046-0.043l-31.89-31.524v-4.903c0-14.024-4.581-27.309-12.374-38.858
                        c-9.801-14.432-24.326-26.39-42.016-35.553c2.201-5.728,4.994-11.966,8.432-18.368c9.714-18.246,24.286-38.041,43.578-53.247
                        c19.196-15.17,42.798-25.982,71.984-27.638l86.692,85.731h0.046c17.182,17.228,25.749,39.683,25.749,62.223
                        C477.519,335.268,468.952,357.723,451.77,374.9z"
                    />
                  </g>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Customized Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    We Treat a variety of different addictions
                  </p>
                </div>
              </div>
            </div>
          </animated.div>

          {/* Card 3 */}
          <animated.div style={springProps3}>
            <div className="relative overflow-hidden rounded-lg relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-400 to-blue-400 p-0.5 shadow-lg p-2 text-black hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25993 21.3884H6C5.05719 21.3884 4.58579 21.3884 4.29289 21.0955C4 20.8026 4 20.3312 4 19.3884V18.2764C4 17.7579 4 17.4987 4.13318 17.2672C4.26636 17.0356 4.46727 16.9188 4.8691 16.6851C7.51457 15.1464 11.2715 14.2803 13.7791 15.7759C13.9475 15.8764 14.0991 15.9977 14.2285 16.1431C14.7866 16.77 14.746 17.7161 14.1028 18.2775C13.9669 18.396 13.8222 18.486 13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459C18.6469 20.2766 17.7939 20.7504 17.0975 21.0865C16.326 21.4589 15.4738 21.6734 14.6069 21.8138C12.8488 22.0983 11.0166 22.0549 9.27633 21.6964C8.29253 21.4937 7.27079 21.3884 6.25993 21.3884Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M10.8613 3.36335C11.3679 2.45445 11.6213 2 12 2C12.3787 2 12.6321 2.45445 13.1387 3.36335L13.2698 3.59849C13.4138 3.85677 13.4858 3.98591 13.598 4.07112C13.7103 4.15633 13.8501 4.18796 14.1296 4.25122L14.3842 4.30881C15.3681 4.53142 15.86 4.64273 15.977 5.01909C16.0941 5.39546 15.7587 5.78763 15.088 6.57197L14.9144 6.77489C14.7238 6.99777 14.6285 7.10922 14.5857 7.24709C14.5428 7.38496 14.5572 7.53365 14.586 7.83102L14.6122 8.10176C14.7136 9.14824 14.7644 9.67148 14.4579 9.90409C14.1515 10.1367 13.6909 9.92462 12.7697 9.50047L12.5314 9.39074C12.2696 9.27021 12.1387 9.20994 12 9.20994C11.8613 9.20994 11.7304 9.27021 11.4686 9.39074L11.2303 9.50047C10.3091 9.92462 9.84847 10.1367 9.54206 9.90409C9.23565 9.67148 9.28635 9.14824 9.38776 8.10176L9.41399 7.83102C9.44281 7.53364 9.45722 7.38496 9.41435 7.24709C9.37147 7.10922 9.27617 6.99777 9.08557 6.77489L8.91204 6.57197C8.2413 5.78763 7.90593 5.39546 8.02297 5.01909C8.14001 4.64273 8.63194 4.53142 9.61581 4.30881L9.87035 4.25122C10.1499 4.18796 10.2897 4.15633 10.402 4.07112C10.5142 3.98591 10.5862 3.85677 10.7302 3.59849L10.8613 3.36335Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M19.4306 7.68167C19.684 7.22722 19.8106 7 20 7C20.1894 7 20.316 7.22723 20.5694 7.68167L20.6349 7.79925C20.7069 7.92839 20.7429 7.99296 20.799 8.03556C20.8551 8.07817 20.925 8.09398 21.0648 8.12561L21.1921 8.15441C21.684 8.26571 21.93 8.32136 21.9885 8.50955C22.047 8.69773 21.8794 8.89381 21.544 9.28598L21.4572 9.38744C21.3619 9.49889 21.3143 9.55461 21.2928 9.62354C21.2714 9.69248 21.2786 9.76682 21.293 9.91551L21.3061 10.0509C21.3568 10.5741 21.3822 10.8357 21.229 10.952C21.0758 11.0683 20.8455 10.9623 20.3849 10.7502L20.2657 10.6954C20.1348 10.6351 20.0694 10.605 20 10.605C19.9306 10.605 19.8652 10.6351 19.7343 10.6954L19.6151 10.7502C19.1545 10.9623 18.9242 11.0683 18.771 10.952C18.6178 10.8357 18.6432 10.5741 18.6939 10.0509L18.707 9.91551C18.7214 9.76682 18.7286 9.69248 18.7072 9.62354C18.6857 9.55461 18.6381 9.49889 18.5428 9.38744L18.456 9.28598C18.1207 8.89381 17.953 8.69773 18.0115 8.50955C18.07 8.32136 18.316 8.26571 18.8079 8.15441L18.9352 8.12561C19.075 8.09398 19.1449 8.07817 19.201 8.03556C19.2571 7.99296 19.2931 7.92839 19.3651 7.79925L19.4306 7.68167Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M3.43063 7.68167C3.68396 7.22722 3.81063 7 4 7C4.18937 7 4.31604 7.22723 4.56937 7.68167L4.63491 7.79925C4.7069 7.92839 4.74289 7.99296 4.79901 8.03556C4.85513 8.07817 4.92503 8.09398 5.06482 8.12561L5.19209 8.15441C5.68403 8.26571 5.93 8.32136 5.98852 8.50955C6.04704 8.69773 5.87935 8.89381 5.54398 9.28598L5.45722 9.38744C5.36191 9.49889 5.31426 9.55461 5.29283 9.62354C5.27139 9.69248 5.27859 9.76682 5.293 9.91551L5.30612 10.0509C5.35682 10.5741 5.38218 10.8357 5.22897 10.952C5.07576 11.0683 4.84547 10.9623 4.38487 10.7502L4.2657 10.6954C4.13481 10.6351 4.06937 10.605 4 10.605C3.93063 10.605 3.86519 10.6351 3.7343 10.6954L3.61513 10.7502C3.15454 10.9623 2.92424 11.0683 2.77103 10.952C2.61782 10.8357 2.64318 10.5741 2.69388 10.0509L2.707 9.91551C2.72141 9.76682 2.72861 9.69248 2.70717 9.62354C2.68574 9.55461 2.63809 9.49889 2.54278 9.38744L2.45602 9.28598C2.12065 8.89381 1.95296 8.69773 2.01148 8.50955C2.07 8.32136 2.31597 8.26571 2.80791 8.15441L2.93518 8.12561C3.07497 8.09398 3.14487 8.07817 3.20099 8.03556C3.25711 7.99296 3.29311 7.92839 3.36509 7.79925L3.43063 7.68167Z"
                    fill="#1C274C"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Private Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Confidential, professional and Friendly service.
                  </p>
                </div>
              </div>
            </div>
          </animated.div>

          {/* Card 4 */}
          <animated.div style={springProps4}>
            <div className="relative overflow-hidden rounded-lg relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-400 to-blue-400 p-0.5 shadow-lg p-2 text-black hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>
                      {`.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}`}
                    </style>
                  </defs>
                  <path
                    className="cls-1"
                    d="M22.5,18.77l-2.88,2.88c-2,2-8.18.46-12.95-4.32S.36,6.37,2.35,4.38L5.23,1.5l5,5L7.75,9.06c-1,1-.59,3,1.79,5.4s4.41,2.79,5.4,1.79l2.52-2.51Z"
                  />
                  <polyline
                    className="cls-1"
                    points="12.96 3.41 16.77 3.41 16.77 6.27 13.91 6.27 13.91 9.14 17.73 9.14"
                  />
                  <polyline
                    className="cls-1"
                    points="22.5 2.46 22.5 6.27 19.64 6.27 19.64 2.46"
                  />
                  <line
                    className="cls-1"
                    x1="22.5"
                    y1="10.09"
                    x2="22.5"
                    y2="6.27"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Continuous Assistance</h3>
                  <p className="text-sm text-muted-foreground">
                    24 hour support & aftercare packages.
                  </p>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
