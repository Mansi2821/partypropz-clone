import { useEffect } from "react";

const ConfettiTrigger = () => {
  useEffect(() => {
    let confettiFired = false;

    const handleScroll = () => {
      if (window.scrollY === 0 && !confettiFired && window.confetti) {
        confettiFired = true;

        window.confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#f472b6', '#9c3587', '#34d399', '#38bdf8', '#facc15']
        });
      } else if (window.scrollY > 0) {
        confettiFired = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ConfettiTrigger;
