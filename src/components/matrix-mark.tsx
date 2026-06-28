import type { SVGProps } from "react";

/**
 * The MATRIX mark — abstracted node-connection 'M'.
 * Three nodes connected by precise hairlines, evoking the
 * architecture of a reasoning system rather than a circuit.
 */
export function MatrixMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="5" cy="6" r="1.6" fill="currentColor" />
      <circle cx="16" cy="22" r="1.6" fill="currentColor" />
      <circle cx="27" cy="6" r="1.6" fill="currentColor" />
      <circle cx="5" cy="26" r="1" fill="currentColor" opacity="0.55" />
      <circle cx="27" cy="26" r="1" fill="currentColor" opacity="0.55" />
      <path d="M5 6 L16 22 L27 6" />
      <path d="M5 6 L5 26" opacity="0.45" />
      <path d="M27 6 L27 26" opacity="0.45" />
      <path d="M5 26 L27 26" opacity="0.25" />
    </svg>
  );
}
