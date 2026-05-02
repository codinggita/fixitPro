import React from 'react';
import Lottie from 'lottie-react';
import emptyAnimation from '../../assets/animations/empty.json';

const EmptyStateAnimation = ({ size = 200 }) => {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        animationData={emptyAnimation}
        style={{ width: size, height: size }}
        loop={true}
      />
    </div>
  );
};

export default EmptyStateAnimation;
