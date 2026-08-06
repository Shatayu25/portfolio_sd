import { createContext, useContext, useEffect, useRef, useState } from "react";

const ActiveSectionContext = createContext();

function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (workRef.current) observer.observe(workRef.current);
    if (connectRef.current) observer.observe(connectRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, homeRef, aboutRef, workRef, connectRef }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  return context;
}

export { ActiveSectionProvider, useActiveSection };
