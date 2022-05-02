import { useEffect, useRef, useState } from "react";

export default function ScrollHorizontal(props) {
  let ref = useRef();

  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const onWheel = (event) => {
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
          behavior: "auto",
        });
      };
      element.addEventListener("wheel", onWheel);
      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);

  const onMouseMove = (event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    const { clientX, scrollX, isScrolling } = state;
    if (isScrolling) {
      ref.current.scrollLeft = scrollX + event.clientX - clientX;
      setState({
        ...state,
        scrollX: scrollX + event.clientX - clientX,
        clientX: event.clientX,
      });
    }
  };
  const onMouseUp = (event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    setState({
      ...state,
      isScrolling: false,
    });
  };
  const onMouseDown = (event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    setState({
      ...state,
      isScrolling: true,
      clientX: event.clientX,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousedown", onMouseDown);
    };
  });

  return (
    <props.List
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {" "}
      {props.children}
    </props.List>
  );
}
