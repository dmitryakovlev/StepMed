import { useState, FC } from 'react';
import classNames from 'classnames';
import { homeAbout, IHomeAbout } from '@data/homePage';

const AboutStep: FC<IHomeAbout> = ({ title, description }) => (
  <div>
    <h3>{title}</h3>
    <p className="mt-4 sm:mt-5">{description}</p>
  </div>
);

const Stepper: FC<{
  isActive: boolean;
  onClick: () => void;
}> = ({ isActive, onClick, children }) => (
  <span
    className={classNames('about__number', { active: isActive })}
    onClick={onClick}
  >
    {children}
  </span>
);

const About = () => {
  const [state, setState] = useState({ activeTab: 0 });

  return (
    <>
      <div className="container mt-16 md:mt-32">
        <h1 className="mb-8 sm:mb-10">Почему именно мы?</h1>

        <div className="about__numbers">
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

        <div className="flex items-center mb-4 sm:hidden">
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
          <span className="about__number-mobile">{state.activeTab + 1}</span>
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
          src="/images/homeIllustration.png"
          className="hidden w-full mt-16 sm:block"
        />
      </div>
    </>
  );
};

export default About;
