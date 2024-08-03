import * as React from "react";
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33.19}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#3A3941"
      fillRule="evenodd"
      d="M26.97 27.646A15.955 15.955 0 0 0 32 16c0-8.837-7.163-16-16-16S0 7.163 0 16a15.955 15.955 0 0 0 5.03 11.646A15.944 15.944 0 0 0 16 32a15.944 15.944 0 0 0 10.97-4.354ZM6.392 25.538A12.285 12.285 0 0 1 16 20.923a12.284 12.284 0 0 1 9.608 4.615 13.496 13.496 0 0 1-9.608 4 13.494 13.494 0 0 1-9.608-4Zm15.762-14.461a6.154 6.154 0 1 1-12.307 0 6.154 6.154 0 0 1 12.307 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
