import type { SVGProps } from "react";

export default function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* DC monogram mark — rounded square with cutout */}
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="6"
        fill="currentColor"
      />
      <path
        d="M8.2 7.5v9M8.2 7.5h3.1a4.5 4.5 0 0 1 0 9H8.2"
        stroke="#FAF9F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14.4 15.2a3 3 0 0 0 0-6.4"
        stroke="#FAF9F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}