import React from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../../assets/animations/success.json';

const SuccessAnimation = ({ size = 200 }) => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={successAnimation}
        style={{ width: size, height: size }}
        loop={false}
      />
    </div>
  );
};

export default SuccessAnimation;
