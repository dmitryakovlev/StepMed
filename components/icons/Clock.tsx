import * as React from 'react';

function ClockIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20">
      <path
        d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 11.304c-.2 0-.39-.049-.56-.13l-2.61 2.612a.434.434 0 01-.616 0 .434.434 0 010-.615l2.612-2.612a1.29 1.29 0 01-.13-.559 1.3 1.3 0 01.87-1.224V2.609a.434.434 0 11.869 0v6.167A1.3 1.3 0 0110 11.304z"
        fill="#F3F3F3"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ClockIcon;
