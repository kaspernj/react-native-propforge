import React from "react";
/**
 * Wrap a host component with `forwardRef` and `memo`.
 *
 * @param component
 * @param displayName
 */
export declare function memoComponent<Props, RefType>(component: React.ElementType, displayName: string): React.NamedExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<RefType>>;
