import { staffDoctors } from "@data";
import StaffProfile from "./StaffBlock";

export default function StaffPage() {
  return (
    <div className="container">
      <h1 className="mt-8 mb-8 sm:mb-10">Врачи</h1>
      {staffDoctors.map((staff) => (
        <StaffProfile {...staff} key={staff.id} />
      ))}
    </div>
  );
}
