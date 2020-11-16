import { useState, FC } from "react";
import classNames from "classnames";

const aboutData: Array<{ id: number; title: string; description: string }> = [
  {
    id: 0,
    title: "Пациент на первом месте",
    description:
      "Каждый пациент имеет свои особенности заболевания, и внимательное отношение к деталям очень важно для определения грамотной тактики лечения. Именно поэтому приемы врача не ограничиваются установленным временем, а консилиумы проводятся с привлечением всех необходимых специалистов.",
  },
  {
    id: 1,
    title: "Только качественные препараты",
    description:
      "Для нас важно использование качественных препаратов. Мы с первого дня поддерживаем систему маркировки, находимся на прямой связи с производителями, при этом не участвуем в бюрократических процедурах закупки, что позволяет не ориентироваться на самые низкие цены аналогов препаратов.",
  },
  {
    id: 2,
    title: "Мы за доступность медицины",
    description:
      "Нам доступны большие возможности бесплатной медицины. Вы можете получить лечение по ОМС, поскольку наша клиника участвует в реализации программы государственных гарантий. У нас нет цели назначить как можно больше платных процедур, мы против коррупции, мы за доступность.",
  },
  {
    id: 3,
    title: "Непрерывность и преемственность лечения",
    description:
      "Лечение в онкологии не ограничивается только химиотерапией. Для обеспечения комплексного подхода требуется привлечение хирургов и лучевых терапевтов. Если что-то выходит за рамки возможностей нашей клиники – это не означает, что мы откажем в лечении. В таких ситуациях мы используем все ресурсы наших партнеров для организации полноценной помощи.",
  },
  {
    id: 4,
    title: "Своевременное начало и строгое соблюдение интервалов лечения",
    description:
      "Мы имеем возможность начать терапию в любое время после того, как определена тактика лечения.  При отсутствии противопоказаний – терапия начнётся вовремя. Достаточная подготовительная и сопроводительная терапия позволит минимизировать риски нежелательных явлений.",
  },
  {
    id: 5,
    title: "Возможность участия в клинических исследованиях",
    description:
      "Мы понимаем важность клинических исследований, поскольку это передовые технологии в медицине. Наша команда участвует и непрерывно отслеживает все открытые клинические исследования. Даже если они не доступны для проведения в нашей клинике – мы окажем содействие по включению вас в протоколы других исследовательских центров.",
  },
];

const AboutStep: FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
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
    className={classNames("about__number", { active: isActive })}
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
        <div className="flex mb-4 sm:hidden">
          <button
            className="bttn about--bttn"
            onClick={() =>
              setState((count) => {
                return { activeTab: count.activeTab - 1 };
              })
            }
          >
            &#60;
          </button>
          <span className="flex-grow"></span>
          <button
            className="bttn about--bttn"
            onClick={() =>
              setState((count) => {
                return { activeTab: count.activeTab + 1 };
              })
            }
          >
            &#62;
          </button>
        </div>

        <AboutStep {...aboutData[state.activeTab]} />
      </div>
      <img src="./images/illustration.svg" className="hidden mt-32 sm:block" />
    </>
  );
};

export default About;
