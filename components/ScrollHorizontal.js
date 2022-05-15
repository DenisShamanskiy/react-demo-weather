"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function ScrollHorizontal(props) {
    let ref = (0, react_1.useRef)();
    const [state, setState] = (0, react_1.useState)({
        isScrolling: false,
        clientX: 0,
        scrollX: 0,
    });
    (0, react_1.useEffect)(() => {
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
            setState(Object.assign(Object.assign({}, state), { scrollX: scrollX + event.clientX - clientX, clientX: event.clientX }));
        }
    };
    const onMouseUp = (event) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();
        setState(Object.assign(Object.assign({}, state), { isScrolling: false }));
    };
    const onMouseDown = (event) => {
        if (ref && ref.current && !ref.current.contains(event.target)) {
            return;
        }
        event.preventDefault();
        setState(Object.assign(Object.assign({}, state), { isScrolling: true, clientX: event.clientX }));
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousedown", onMouseDown);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousedown", onMouseDown);
        };
    });
    return ((0, jsx_runtime_1.jsxs)(props.List, Object.assign({ ref: ref, onMouseMove: onMouseMove, onMouseUp: onMouseUp, onMouseDown: onMouseDown }, { children: [" ", props.children] })));
}
exports.default = ScrollHorizontal;
