import { useContext, createContext, useMemo } from 'react';
import { useWindowSize } from 'react-use';

interface Context {
  isMobile: boolean;
}

const layoutContext = createContext<Context>({ isMobile: false });

export const useLayoutContext = () => useContext(layoutContext);

function LayoutContentProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { width } = useWindowSize();

  const context = useMemo(() => ({ isMobile: width < 640 }), [width]);
  return (
    <layoutContext.Provider value={context}>{children}</layoutContext.Provider>
  );
}

export default LayoutContentProvider;
