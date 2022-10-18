import * as React from 'react'
const SvgAngular = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m25.001 8.716-15.16 5.407 2.312 20.045 12.848 7.116V28.81h-4.04l-1.904 4.755h-3.534L25 12.316l.001.002V8.716Zm0 10.506v-.002l-2.769 6.66h2.77v-6.658Z"
      fill="currentColor"
    />
    <path
      opacity={0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.999 12.315V8.716l15.16 5.407-2.312 20.045-12.848 7.116V28.81h4.007l1.905 4.755h3.534L25 12.316 25 12.32v-.004Zm0 13.565v-6.657L25 19.22l2.768 6.66H25Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgAngular
