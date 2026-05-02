import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/animations/error.json';

const ErrorAnimation = ({ size = 200 }) => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={errorAnimation}
        style={{ width: size, height: size }}
        loop={false}
      />
    </div>
  );
};

export default ErrorAnimation;
