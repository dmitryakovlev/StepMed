import { useState, FC } from 'react';
import classNames from 'classnames';
import { homeAbout, IHomeAbout } from '@data/homePage';

const AboutStep: FC<IHomeAbout> = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p className="mt-2 md:mt-4">{description}</p>
  </div>
);

const Stepper: FC<{
  isActive: boolean;
  onClick: () => void;
}> = ({ isActive, onClick, children }) => (
  <span
    className={classNames(
      'flex flex-shrink-0 items-center justify-center w-16 h-16 text-primary text-2xl font-bold border-primary border-4 rounded-full duration-200 ease-in-out cursor-pointer select-none hover:bg-primary hover:text-white',
      { 'bg-primary text-white': isActive },
    )}
    onClick={onClick}
  >
    {children}
  </span>
);

const About = () => {
  const [state, setState] = useState({ activeTab: 0 });

  return (
    <>
      <div className="container mt-16 lg:mt-32">
        <h1 className="mb-6 md:mb-10">Почему именно мы?</h1>

        <div className="items-center hidden mb-4 md:mb-8 md:flex">
          <Stepper
            isActive={state.activeTab == 0}
            onClick={() => setState({ activeTab: 0 })}
          >
            1
          </Stepper>

          <span className="about__divider"></span>

          <Stepper
            isActive={state.activeTab == 1}
            onClick={() => setState({ activeTab: 1 })}
          >
            2
          </Stepper>

          <span className="about__divider"></span>

          <Stepper
            isActive={state.activeTab == 2}
            onClick={() => setState({ activeTab: 2 })}
          >
            3
          </Stepper>

          <span className="about__divider"></span>

          <Stepper
            isActive={state.activeTab == 3}
            onClick={() => setState({ activeTab: 3 })}
          >
            4
          </Stepper>

          <span className="about__divider"></span>

          <Stepper
            isActive={state.activeTab == 4}
            onClick={() => setState({ activeTab: 4 })}
          >
            5
          </Stepper>

          <span className="about__divider"></span>

          <Stepper
            isActive={state.activeTab == 5}
            onClick={() => setState({ activeTab: 5 })}
          >
            6
          </Stepper>
        </div>

        <div className="flex items-center mb-4 md:hidden">
          <button
            className="bttn about--bttn"
            disabled={state.activeTab == 0}
            onClick={() =>
              setState((count) => {
                return { activeTab: count.activeTab - 1 };
              })
            }
          >
            &#60;
          </button>

          <span className="about__divider"></span>
          <span className="flex items-center justify-center flex-shrink-0 pb-1 text-xl font-bold border-4 rounded-full w-14 h-14 text-primary border-primary">
            {state.activeTab + 1}
          </span>
          <span className="about__divider"></span>

          <button
            className="bttn about--bttn"
            disabled={state.activeTab == 5}
            onClick={() =>
              setState((count) => {
                return { activeTab: count.activeTab + 1 };
              })
            }
          >
            &#62;
          </button>
        </div>

        <AboutStep {...homeAbout[state.activeTab]} />
        <img
          src="/images/home/homeIllustration.webp"
          className="w-full mt-8 md:mt-12"
        />
      </div>
    </>
  );
};

export default About;
