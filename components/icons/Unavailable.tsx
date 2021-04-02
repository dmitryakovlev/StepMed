import * as React from 'react';

function UnavailableIcon() {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      className="w-8 h-8 mr-2 text-red-400 fill-current md:mr-3 lg:mr-4 md:w-10 md:h-10 lg:w-12 lg:h-12"
    >
      <path
        d="M20 1c10.493 0 19 8.507 19 19s-8.507 19-19 19S1 30.493 1 20 9.507 1 20 1zm0 3C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm8.06 7.94a1.5 1.5 0 01.104 2.007l-.103.114L22.12 20l5.94 5.94.103.113a1.5 1.5 0 01-2.225 2.008L20 22.12l-5.94 5.94a1.5 1.5 0 01-2.224-2.008l.103-.114L17.88 20l-5.94-5.94-.103-.113a1.5 1.5 0 012.225-2.008L20 17.88l5.94-5.94a1.5 1.5 0 012.12 0z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default UnavailableIcon;
