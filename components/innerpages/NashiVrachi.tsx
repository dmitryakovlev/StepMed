import { IStaff, staffDoctors } from '@data/nashiVrachi';
import { FC } from 'react';

const StaffProfile: FC<IStaff> = (staff) => {
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
