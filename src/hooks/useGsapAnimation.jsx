import { useEffect } from 'react';

export const useGsapAnimation = (animationFn, dependencies = []) => {
  useEffect(() => {
    animationFn();
  }, dependencies);
};
