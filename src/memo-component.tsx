import React from "react"

/**
 * Wrap a host component with `forwardRef` and `memo`.
 *
 * @param component
 * @param displayName
 */
export function memoComponent<Props, RefType>(
  component: React.ElementType,
  displayName: string
): React.NamedExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<RefType>> {
  const MemoComponent = React.memo(
    React.forwardRef<RefType, Props>((props, ref) => React.createElement(component, {...props, ref}))
  )
  MemoComponent.displayName = displayName

  return MemoComponent
}
