import * as React from 'react';

function AvailableIcon() {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      className="w-8 h-8 mr-2 fill-current text-primary md:mr-3 lg:mr-4 md:w-10 md:h-10 lg:w-12 lg:h-12"
    >
      <path
        d="M20 1c10.493 0 19 8.507 19 19s-8.507 19-19 19S1 30.493 1 20 9.507 1 20 1zm0 3C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm9.311 7.238a1.5 1.5 0 01.523 1.948l-.072.125-9 14a1.5 1.5 0 01-2.177.378l-.11-.095-8-7.5a1.5 1.5 0 011.934-2.288l.117.1 6.686 6.268 8.026-12.485a1.5 1.5 0 012.073-.45z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default AvailableIcon;
