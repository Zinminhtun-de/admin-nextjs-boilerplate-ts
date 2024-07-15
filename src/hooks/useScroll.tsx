import { useEffect, useRef, useState } from 'react';

export const useScrollTo = <T extends Element>() => {
  const ref = useRef<T | null>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScrollTo(false);
    }
  }, [shouldScrollTo]);

  return [ref, setShouldScrollTo];
};
