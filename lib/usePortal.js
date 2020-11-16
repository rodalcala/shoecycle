/* SRC: https://gist.github.com/amitnovick/b87f61cadc0b63af88086cc0e0b2f37e */

import React from 'react';
import { createPortal } from 'react-dom';

function usePortal() {
  const portalElRef = React.useRef(document.createElement('div'));
  portalElRef.current.style = {
    'position': 'relative',
    'z-index': '1'
  };

  React.useEffect(() => {
    const root = document.getElementById('__next');
    root.appendChild(portalElRef.current);

    return () => {
      if (portalElRef.current) {
        root.removeChild(portalElRef.current);
      }
    };
  }, [portalElRef]);

  const Portal = React.useCallback(
    ({ children }) => {
      if (portalElRef.current != null)
        return createPortal(children, portalElRef.current);
      return null;
    },
    [portalElRef]
  );

  return Portal;
}

export default usePortal;
