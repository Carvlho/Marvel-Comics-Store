export const scrollToTopAnimated = () => {
  const startPosition = window.pageYOffset;
  const distance = -startPosition;
  const duration = 500; // Tempo em milissegundos
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }
    const progress = currentTime - startTime;
    const newPosition = easeInOutQuad(
      progress,
      startPosition,
      distance,
      duration
    );
    window.scrollTo(0, newPosition);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
