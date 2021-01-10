import * as React from 'react';

function LogoWhite() {
  return (
    <svg width="90px" height="90px" viewBox="0 0 90 90" className="nav__logo">
      <title>Logo_white</title>
      <defs>
        <linearGradient
          x1="-1.11022302e-14%"
          y1="50%"
          x2="100%"
          y2="50%"
          id="linearGradient-1"
        >
          <stop stopColor="#EAEAEA" offset="0%"></stop>
          <stop stopColor="#D0D0D0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Logos" transform="translate(-50.000000, -180.000000)">
          <g id="Logo_white" transform="translate(50.000000, 180.000000)">
            <rect
              id="Rectangle-Copy-2"
              fill="#D0D0D0"
              transform="translate(45.000000, 45.000000) rotate(-270.000000) translate(-45.000000, -45.000000) "
              x="15"
              y="15"
              width="60"
              height="60"
            ></rect>
            <rect
              id="Rectangle-Copy-4"
              fill="url(#linearGradient-1)"
              transform="translate(45.000000, 45.000000) rotate(-270.000000) translate(-45.000000, -45.000000) "
              x="0"
              y="30"
              width="90"
              height="30"
            ></rect>
            <rect
              id="Rectangle"
              fill="url(#linearGradient-1)"
              x="0"
              y="30"
              width="90"
              height="30"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default LogoWhite;
