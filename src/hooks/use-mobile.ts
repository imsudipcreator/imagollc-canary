import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook to check if the current device is a mobile device.
 * It returns a boolean value indicating whether the device is a mobile device or not.
 * The breakpoint is defined as 768px.
 * If the current device width is less than 768px, it is considered a mobile device.
 * The hook uses the window.matchMedia API to track the device width and update the state accordingly.
 * @returns boolean - true if the device is a mobile device, false otherwise.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
