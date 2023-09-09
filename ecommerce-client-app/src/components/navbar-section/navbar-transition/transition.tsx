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
  parent: {
    show: boolean;
    isInitialRender: boolean;
    appear: boolean;
  };
  shouldTransition: boolean;
}

const TransitionContext = React.createContext<TransitionContextProps>({
  parent: {
    show: false,
    isInitialRender: false,
    appear: false,
  },
  shouldTransition: true,
});

const Transition: FC<TransitionProps> = ({
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
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length);
  const enterToClasses = enterTo.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length);
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length);

  function addClasses(node: Element, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: Element, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  const { parent, shouldTransition } = useContext(TransitionContext);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
  }, []);

  const isParent = show !== undefined;
  const isChild = !isParent;
  const isInitialRender = mounted.current === false;

  let entranceTransitionsEnabled =
    parent.isInitialRender && parent.show && !parent.appear ? false : true;

  let childTransitionsEnabled = isParent
    ? isInitialRender && show && !appear
      ? false
      : shouldTransition
    : shouldTransition;

  return (
    <TransitionContext.Provider
      value={{
        shouldTransition: childTransitionsEnabled,
        parent: {
          show,
          isInitialRender,
          appear: isChild ? entranceTransitionsEnabled : appear || false,
        },
      }}
    >
      <CSSTransition
        appear={isChild ? entranceTransitionsEnabled : appear || false}
        unmountOnExit
        in={isChild ? parent.show : show}
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener('transitionend', done, false);
        }}
        onEnter={(node: HTMLElement) => {
          addClasses(node, [...enterClasses, ...enterFromClasses]);
        }}
        onEntering={(node: HTMLElement) => {
          removeClasses(node, enterFromClasses);
          addClasses(node, enterToClasses);
        }}
        onEntered={(node: HTMLElement) => {
          removeClasses(node, [...enterToClasses, ...enterClasses]);
        }}
        onExit={(node: HTMLElement) => {
          addClasses(node, [...leaveClasses, ...leaveFromClasses]);
        }}
        onExiting={(node: HTMLElement) => {
          removeClasses(node, leaveFromClasses);
          addClasses(node, leaveToClasses);
        }}
        onExited={(node: HTMLElement) => {
          removeClasses(node, [...leaveToClasses, ...leaveClasses]);
        }}
      >
        {children}
      </CSSTransition>
    </TransitionContext.Provider>
  );
};

export default Transition;
