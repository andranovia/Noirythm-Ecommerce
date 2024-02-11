import React, { FC, ReactNode, useRef, useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

interface TransitionProps {
  show: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  appear?: boolean;
  children: ReactNode;
}

interface TransitionContextProps {
  shouldTransition: boolean;
}

const TransitionContext = React.createContext<TransitionContextProps>({
  shouldTransition: true,
});

const NavbarTransition: FC<TransitionProps> = ({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}) => {
  const enterClasses = enter.split(' ').filter(Boolean);
  const enterFromClasses = enterFrom.split(' ').filter(Boolean);
  const enterToClasses = enterTo.split(' ').filter(Boolean);
  const leaveClasses = leave.split(' ').filter(Boolean);
  const leaveFromClasses = leaveFrom.split(' ').filter(Boolean);
  const leaveToClasses = leaveTo.split(' ').filter(Boolean);

  const { shouldTransition } = useContext(TransitionContext);
  const isInitialRender = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  const entranceTransitionsEnabled =
    !isInitialRender.current && (show || appear) && shouldTransition;

  return (
    <CSSTransition
      appear={entranceTransitionsEnabled}
      unmountOnExit
      in={show}
      addEndListener={(node: HTMLElement, done: () => void) => {
        node.addEventListener('transitionend', done, false);
      }}
      onEnter={(node: HTMLElement) => {
        node.classList.add(...enterClasses, ...enterFromClasses);
      }}
      onEntering={(node: HTMLElement) => {
        node.classList.remove(...enterFromClasses);
        node.classList.add(...enterToClasses);
      }}
      onEntered={(node: HTMLElement) => {
        node.classList.remove(...enterToClasses, ...enterClasses);
      }}
      onExit={(node: HTMLElement) => {
        node.classList.add(...leaveClasses, ...leaveFromClasses);
      }}
      onExiting={(node: HTMLElement) => {
        node.classList.remove(...leaveFromClasses);
        node.classList.add(...leaveToClasses);
      }}
      onExited={(node: HTMLElement) => {
        node.classList.remove(...leaveToClasses, ...leaveClasses);
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default NavbarTransition;
