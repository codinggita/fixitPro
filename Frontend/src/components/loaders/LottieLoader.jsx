import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animations/loading.json';

const LottieLoader = ({ size = 100 }) => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        style={{ width: size, height: size }}
        loop={true}
      />
    </div>
  );
};

export default LottieLoader;
