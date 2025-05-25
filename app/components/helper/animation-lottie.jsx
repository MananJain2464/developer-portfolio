// app/components/helper/animation-lottie.jsx
// "use client"; // Keep this directive

// import dynamic from 'next/dynamic'; // Import dynamic

// // Dynamically import Lottie and ensure it's not included in SSR
// const Lottie = dynamic(
//   () => import('lottie-react'),
//   { ssr: false } // This is the key change!
// );

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: width || '95%', // Use the passed width, or default to '95%'
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;

"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;