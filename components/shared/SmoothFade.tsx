import { useState, useEffect, FC } from 'react';

const SmoothFade: FC<{
  show: boolean;
}> = ({ show = false, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 150ms` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default SmoothFade;
