import { useEffect, useState, useRef } from 'react';

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.unobserve(fromRef.current);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);
  });

  return { isNearScreen, fromRef };
}
