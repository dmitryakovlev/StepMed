import * as React from 'react';

function LogoColor() {
  return (
    <svg width="90px" height="90px" viewBox="0 0 90 90" className="nav__logo">
      <title>Logo_color</title>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#64BDE1" offset="0%"></stop>
          <stop stopColor="#3488BF" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-2"
        >
          <stop stopColor="#3488BF" offset="0%"></stop>
          <stop stopColor="#64BDE1" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Logos" transform="translate(-50.000000, -50.000000)">
          <g id="Logo_color" transform="translate(50.000000, 50.000000)">
            <rect
              id="Rectangle-Copy-2"
              fill="#3488BF"
              transform="translate(45.000000, 45.000000) rotate(-270.000000) translate(-45.000000, -45.000000) "
              x="15"
              y="15"
              width="60"
              height="60"
            ></rect>
            <rect
              id="Rectangle"
              fill="url(#linearGradient-1)"
              x="30"
              y="0"
              width="30"
              height="90"
            ></rect>
            <rect
              id="Rectangle-Copy"
              fill="url(#linearGradient-2)"
              transform="translate(45.000000, 45.000000) rotate(-270.000000) translate(-45.000000, -45.000000) "
              x="30"
              y="0"
              width="30"
              height="90"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default LogoColor;
