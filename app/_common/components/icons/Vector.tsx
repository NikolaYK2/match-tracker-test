import { forwardRef, Ref, SVGProps } from "react";

const VectorSvg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
      <path
        d="M12.0123 8.68516V11.0185M12.0123 15.6852V15.6968M3.84556 20.3518H20.1789C20.5596 20.3492 20.9338 20.2534 21.269 20.0729C21.6042 19.8923 21.8901 19.6325 22.1018 19.3161C22.3135 18.9997 22.4446 18.6363 22.4836 18.2576C22.5226 17.8789 22.4683 17.4964 22.3256 17.1435L14.0422 2.85185C13.8404 2.48714 13.5446 2.18315 13.1856 1.97146C12.8266 1.75978 12.4174 1.64813 12.0006 1.64813C11.5838 1.64813 11.1746 1.75978 10.8155 1.97146C10.4565 2.18315 10.1607 2.48714 9.95889 2.85185L1.67556 17.1435C1.53549 17.4884 1.47995 17.8617 1.51357 18.2324C1.54719 18.603 1.66899 18.9603 1.86882 19.2743C2.06864 19.5883 2.34069 19.85 2.66224 20.0374C2.98379 20.2249 3.34552 20.3327 3.71723 20.3518"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ForwardRef = forwardRef(VectorSvg);
export default ForwardRef;
