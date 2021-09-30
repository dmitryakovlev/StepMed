import { FC } from 'react';
import Link from 'next/link';
import { homeDashboard, IHomeDashboard } from '@data/homePage';

const DashboardBlock: FC<IHomeDashboard> = ({ url, icon, text, external }) => {
  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        className="flex flex-col items-center justify-center h-48 p-2 transition duration-300 ease-in-out bg-gray-100 rounded-lg select-none group md:p-4 lg:p-6 md:h-52 lg:h-56 hover:bg-primary"
      >
        <svg
          width={80}
          height={80}
          viewBox="0 0 80 80"
          className="w-12 h-12 duration-200 ease-in-out fill-current group-hover:text-white md:h-14 lg:h-16 xl:h-20 md:w-14 lg:w-16 xl:w-20 text-text-primary"
        >
          {icon}
        </svg>
        <p className="mt-4 text-base font-bold text-center transition duration-200 ease-in-out group-hover:text-white md:mt-4 xl:mt-5 md:text-base lg:text-lg xl:text-xl">
          {text}
        </p>
      </a>
    );
  }

  return (
    <>
      <Link href={url}>
        <a className="flex flex-col items-center justify-center h-48 p-2 transition duration-300 ease-in-out bg-gray-100 rounded-lg select-none group md:p-4 lg:p-6 md:h-52 lg:h-56 hover:bg-primary">
          <svg
            width={80}
            height={80}
            viewBox="0 0 80 80"
            className="w-12 h-12 duration-200 ease-in-out fill-current group-hover:text-white md:h-14 lg:h-16 xl:h-20 md:w-14 lg:w-16 xl:w-20 text-text-primary"
          >
            {icon}
          </svg>
          <p className="mt-4 text-base font-bold text-center transition duration-200 ease-in-out group-hover:text-white md:mt-4 xl:mt-5 md:text-base lg:text-lg xl:text-xl">
            {text}
          </p>
        </a>
      </Link>
    </>
  );
};

const Dashboard = () => (
  <div className="container mt-16 lg:mt-32 xl:mt-16">
    <h1 className="mb-6 md:mb-10">Что вас интересует?</h1>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4 lg:gap-5">
      {homeDashboard.map((dashboard) => (
        <DashboardBlock {...dashboard} key={dashboard.id} />
      ))}
    </div>
  </div>
);

export default Dashboard;
