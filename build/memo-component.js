import React from "react";
/**
 * Wrap a host component with `forwardRef` and `memo`.
 *
 * @param component
 * @param displayName
 */
export function memoComponent(component, displayName) {
    const MemoComponent = React.memo(React.forwardRef((props, ref) => React.createElement(component, { ...props, ref })));
    MemoComponent.displayName = displayName;
    return MemoComponent;
}
//# sourceMappingURL=memo-component.js.map