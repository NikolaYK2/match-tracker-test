import { forwardRef, Ref, SVGProps } from "react";

const ChevronSvg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
      <path d="M1 8L8 1L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const ForwardRef = forwardRef(ChevronSvg);
export default ForwardRef;
