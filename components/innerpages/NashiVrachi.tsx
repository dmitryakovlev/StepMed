import { IStaff, staffDoctors } from '@data/nashiVrachi';
import { FC, useState } from 'react';
import { Dialog } from '@reach/dialog';

const DialogContent: FC<{
  staff: IStaff;
  close: () => void;
}> = ({
  staff: {
    fullName,
    workPosition,
    description,
    education,
    professionalCommunity,
    advancedTraining,
    publications,
    social,
  },
  close,
}) => (
  <div className="relative px-6 bg-white rounded-lg shadow-xl">
    <div className="mt-20 text-center">
      <h2 className="text-4xl font-bold leading-normal">{fullName}</h2>
      <div className="text-lg">{workPosition}</div>
      <div className="mt-2 text-body-font-color">
        {education.map((education) => (
          <p>{education}</p>
        ))}
      </div>
    </div>

    <div className="py-10 mt-10 text-center border-t border-tundora">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4">
          <p className="mb-4 text-lg leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-center">
          {social.facebook && (
            <span>
              <a
                href={`https://www.linkedin.com/in/${social.facebook}`}
                className="mr-6 underline hover:no-underline focus:outline-none"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LinkedIn
              </a>
            </span>
          )}

          {social.vk && (
            <span>
              <a
                href={`https://github.com/${social.vk}`}
                className="mr-6 underline hover:no-underline focus:outline-none"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                GitHub
              </a>
            </span>
          )}

          {social.linkedIn && (
            <span>
              <a
                href={`https://twitter.com/${social.linkedIn}`}
                className="mr-6 underline hover:no-underline focus:outline-none"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
            </span>
          )}

          {social.whatsapp && (
            <span>
              <a
                href={social.whatsapp}
                className="underline hover:no-underline focus:outline-none"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Personal Website
              </a>
            </span>
          )}
        </p>
      </div>
    </div>

    <button
      className="absolute px-2 py-1 border-none top-2 right-2 md:top-2 md:right-0 md:px-6 md:py-2 focus:outline-none text-body-font-color"
      onClick={close}
    >
      Close
    </button>
  </div>
);

const StaffProfile: FC<IStaff> = (staff) => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className="flex flex-col mt-8">
      <img
        alt={staff.fullName}
        src={staff.photoUrl || ''}
        className="rounded-2xl"
      />
      <h1 className="mt-6 font-normal">{staff.fullName}</h1>
      <h2 className="font-normal text-primary">{staff.workPosition}</h2>
      <h2 className="custom-title">Обо мне</h2>
      <p className="custom-text">{staff.description}</p>

      <button className="self-end mt-6 bttn" onClick={open}>
        Подробнее
      </button>

      {showDialog && (
        <Dialog onDismiss={close} aria-label="Подробная информация">
          <DialogContent staff={staff} close={close} />
        </Dialog>
      )}
    </div>
  );
};

export default function NashiVrachi() {
  return (
    <div className="container">
      <h1>Наши сотрудники</h1>
      {staffDoctors.map((staff) => (
        <StaffProfile {...staff} key={staff.id} />
      ))}
    </div>
  );
}
