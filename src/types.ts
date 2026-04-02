import React from "react"

/** Allowed `dataSet` value types on prop-forged React Native components. */
export type DataSetValue = string | number | boolean | null | undefined

/** Extended `dataSet` support for prop-forged React Native components. */
export type DataSetProps = {
  /** Additional `data-*` attributes passed through via React Native Web `dataSet`. */
  dataSet?: Record<string, DataSetValue>
}

/** Broad style value accepted by prop-forged React Native components. */
export type StyleValue = object | readonly object[] | null | undefined

/** Broad native-like props accepted by prop-forged components. */
export type NativeLikeProps = React.PropsWithChildren<{
  style?: StyleValue
  testID?: string
}> & Record<string, unknown>

export type ActivityIndicatorProps = NativeLikeProps & DataSetProps
export type FlatListProps = NativeLikeProps & DataSetProps
export type ImageProps = NativeLikeProps & DataSetProps
export type ImageBackgroundProps = NativeLikeProps & DataSetProps
export type KeyboardAvoidingViewProps = NativeLikeProps & DataSetProps
export type ModalProps = NativeLikeProps & DataSetProps
export type PressableProps = NativeLikeProps & DataSetProps
export type SafeAreaViewProps = NativeLikeProps & DataSetProps
export type ScrollViewProps = NativeLikeProps & DataSetProps
export type SectionListProps = NativeLikeProps & DataSetProps
export type SwitchProps = NativeLikeProps & DataSetProps
export type TextProps = NativeLikeProps & DataSetProps
export type TextInputProps = NativeLikeProps & DataSetProps
export type TouchableHighlightProps = NativeLikeProps & DataSetProps
export type TouchableOpacityProps = NativeLikeProps & DataSetProps
export type TouchableWithoutFeedbackProps = NativeLikeProps & DataSetProps
export type ViewProps = NativeLikeProps & DataSetProps
export type VirtualizedListProps = NativeLikeProps & DataSetProps
