import { staffDoctors } from "@data";
import StaffProfile from "./StaffBlock";

export default function Staff() {
  return (
    <div className="container my-8">
      <h1 className="mb-8 sm:mb-10">Врачи</h1>
      {staffDoctors.map((staff) => (
        <StaffProfile {...staff} key={staff.id} />
      ))}
    </div>
  );
}
