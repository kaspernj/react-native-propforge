/** Allowed `dataSet` value types on prop-forged React Native components. */
export type DataSetValue = string | number | boolean | null | undefined

/** Extended `dataSet` support for prop-forged React Native components. */
export type DataSetProps = {
  /** Additional `data-*` attributes passed through via React Native Web `dataSet`. */
  dataSet?: Record<string, DataSetValue>
}

/** Broad native-like props accepted by the wrapper components. */
export type NativeLikeProps = {
  children?: any
  style?: any
  testID?: string
  [key: string]: any
}

/** Props accepted by the memoized `ActivityIndicator` wrapper. */
export type ActivityIndicatorProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `FlatList` wrapper. */
export type FlatListProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `Image` wrapper. */
export type ImageProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `ImageBackground` wrapper. */
export type ImageBackgroundProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `KeyboardAvoidingView` wrapper. */
export type KeyboardAvoidingViewProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `Modal` wrapper. */
export type ModalProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `Pressable` wrapper. */
export type PressableProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `SafeAreaView` wrapper. */
export type SafeAreaViewProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `ScrollView` wrapper. */
export type ScrollViewProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `SectionList` wrapper. */
export type SectionListProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `Switch` wrapper. */
export type SwitchProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `Text` wrapper. */
export type TextProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `TextInput` wrapper. */
export type TextInputProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `TouchableHighlight` wrapper. */
export type TouchableHighlightProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `TouchableOpacity` wrapper. */
export type TouchableOpacityProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `TouchableWithoutFeedback` wrapper. */
export type TouchableWithoutFeedbackProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `View` wrapper. */
export type ViewProps = NativeLikeProps & DataSetProps
/** Props accepted by the memoized `VirtualizedList` wrapper. */
export type VirtualizedListProps = NativeLikeProps & DataSetProps

/** Memoized `ActivityIndicator` wrapper with extended `dataSet` support. */
export const ActivityIndicator: any
/** Memoized `FlatList` wrapper with extended `dataSet` support. */
export const FlatList: any
/** Memoized `Image` wrapper with extended `dataSet` support. */
export const Image: any
/** Memoized `ImageBackground` wrapper with extended `dataSet` support. */
export const ImageBackground: any
/** Memoized `KeyboardAvoidingView` wrapper with extended `dataSet` support. */
export const KeyboardAvoidingView: any
/** Memoized `Modal` wrapper with extended `dataSet` support. */
export const Modal: any
/** Memoized `Pressable` wrapper with extended `dataSet` support. */
export const Pressable: any
/** Memoized `SafeAreaView` wrapper with extended `dataSet` support. */
export const SafeAreaView: any
/** Memoized `ScrollView` wrapper with extended `dataSet` support. */
export const ScrollView: any
/** Memoized `SectionList` wrapper with extended `dataSet` support. */
export const SectionList: any
/** Memoized `Switch` wrapper with extended `dataSet` support. */
export const Switch: any
/** Memoized `Text` wrapper with extended `dataSet` support. */
export const Text: any
/** Memoized `TextInput` wrapper with extended `dataSet` support. */
export const TextInput: any
/** Memoized `TouchableHighlight` wrapper with extended `dataSet` support. */
export const TouchableHighlight: any
/** Memoized `TouchableOpacity` wrapper with extended `dataSet` support. */
export const TouchableOpacity: any
/** Memoized `TouchableWithoutFeedback` wrapper with extended `dataSet` support. */
export const TouchableWithoutFeedback: any
/** Memoized `View` wrapper with extended `dataSet` support. */
export const View: any
/** Memoized `VirtualizedList` wrapper with extended `dataSet` support. */
export const VirtualizedList: any

export const Animated: {
  FlatList: any
  Image: any
  Pressable: any
  ScrollView: any
  Text: any
  View: any
}
