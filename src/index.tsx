import React from "react"
import {
  ActivityIndicator as ReactNativeActivityIndicator,
  Animated as ReactNativeAnimated,
  FlatList as ReactNativeFlatList,
  Image as ReactNativeImage,
  ImageBackground as ReactNativeImageBackground,
  KeyboardAvoidingView as ReactNativeKeyboardAvoidingView,
  Modal as ReactNativeModal,
  Pressable as ReactNativePressable,
  SafeAreaView as ReactNativeSafeAreaView,
  ScrollView as ReactNativeScrollView,
  SectionList as ReactNativeSectionList,
  Switch as ReactNativeSwitch,
  Text as ReactNativeText,
  TextInput as ReactNativeTextInput,
  TouchableHighlight as ReactNativeTouchableHighlight,
  TouchableOpacity as ReactNativeTouchableOpacity,
  TouchableWithoutFeedback as ReactNativeTouchableWithoutFeedback,
  View as ReactNativeView,
  VirtualizedList as ReactNativeVirtualizedList
} from "react-native"

import {memoComponent} from "./memo-component.js"

/** Allowed `dataSet` value types on prop-forged React Native components. */
export type DataSetValue = string | number | boolean | null | undefined

/** Extended `dataSet` support for prop-forged React Native components. */
export type DataSetProps = {
  /** Additional `data-*` attributes passed through via React Native Web `dataSet`. */
  dataSet?: Record<string, DataSetValue>
}

/** Broad style value accepted by prop-forged React Native components. */
type StyleValue = object | readonly object[] | null | undefined

/** Broad native-like props accepted by the wrapper components. */
type NativeLikeProps = React.PropsWithChildren<{
  style?: StyleValue
  testID?: string
}> & Record<string, unknown>

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

/**
 * Build a memoized component wrapper with extended `dataSet` support.
 *
 * @param component
 * @param displayName
 */
function propforgeComponent<Props>(component: React.ElementType, displayName: string) {
  return memoComponent<Props, unknown>(
    component,
    displayName
  ) as React.ComponentType<Props>
}

/** Memoized `ActivityIndicator` wrapper with extended `dataSet` support. */
export const ActivityIndicator = propforgeComponent<ActivityIndicatorProps>(
  ReactNativeActivityIndicator as React.ElementType,
  "ActivityIndicator"
)

/** Memoized `FlatList` wrapper with extended `dataSet` support. */
export const FlatList = propforgeComponent<FlatListProps>(
  ReactNativeFlatList as React.ElementType,
  "FlatList"
)

/** Memoized `Image` wrapper with extended `dataSet` support. */
export const Image = propforgeComponent<ImageProps>(
  ReactNativeImage as React.ElementType,
  "Image"
)

/** Memoized `ImageBackground` wrapper with extended `dataSet` support. */
export const ImageBackground = propforgeComponent<ImageBackgroundProps>(
  ReactNativeImageBackground as React.ElementType,
  "ImageBackground"
)

/** Memoized `KeyboardAvoidingView` wrapper with extended `dataSet` support. */
export const KeyboardAvoidingView = propforgeComponent<KeyboardAvoidingViewProps>(
  ReactNativeKeyboardAvoidingView as React.ElementType,
  "KeyboardAvoidingView"
)

/** Memoized `Modal` wrapper with extended `dataSet` support. */
export const Modal = propforgeComponent<ModalProps>(
  ReactNativeModal as React.ElementType,
  "Modal"
)

/** Memoized `Pressable` wrapper with extended `dataSet` support. */
export const Pressable = propforgeComponent<PressableProps>(
  ReactNativePressable as React.ElementType,
  "Pressable"
)

/** Memoized `SafeAreaView` wrapper with extended `dataSet` support. */
export const SafeAreaView = propforgeComponent<SafeAreaViewProps>(
  ReactNativeSafeAreaView as React.ElementType,
  "SafeAreaView"
)

/** Memoized `ScrollView` wrapper with extended `dataSet` support. */
export const ScrollView = propforgeComponent<ScrollViewProps>(
  ReactNativeScrollView as React.ElementType,
  "ScrollView"
)

/** Memoized `SectionList` wrapper with extended `dataSet` support. */
export const SectionList = propforgeComponent<SectionListProps>(
  ReactNativeSectionList as React.ElementType,
  "SectionList"
)

/** Memoized `Switch` wrapper with extended `dataSet` support. */
export const Switch = propforgeComponent<SwitchProps>(
  ReactNativeSwitch as React.ElementType,
  "Switch"
)

/** Memoized `Text` wrapper with extended `dataSet` support. */
export const Text = propforgeComponent<TextProps>(
  ReactNativeText as React.ElementType,
  "Text"
)

/** Memoized `TextInput` wrapper with extended `dataSet` support. */
export const TextInput = propforgeComponent<TextInputProps>(
  ReactNativeTextInput as React.ElementType,
  "TextInput"
)

/** Memoized `TouchableHighlight` wrapper with extended `dataSet` support. */
export const TouchableHighlight = propforgeComponent<TouchableHighlightProps>(
  ReactNativeTouchableHighlight as React.ElementType,
  "TouchableHighlight"
)

/** Memoized `TouchableOpacity` wrapper with extended `dataSet` support. */
export const TouchableOpacity = propforgeComponent<TouchableOpacityProps>(
  ReactNativeTouchableOpacity as React.ElementType,
  "TouchableOpacity"
)

/** Memoized `TouchableWithoutFeedback` wrapper with extended `dataSet` support. */
export const TouchableWithoutFeedback = propforgeComponent<TouchableWithoutFeedbackProps>(
  ReactNativeTouchableWithoutFeedback as React.ElementType,
  "TouchableWithoutFeedback"
)

/** Memoized `View` wrapper with extended `dataSet` support. */
export const View = propforgeComponent<ViewProps>(
  ReactNativeView as React.ElementType,
  "View"
)

/** Memoized `VirtualizedList` wrapper with extended `dataSet` support. */
export const VirtualizedList = propforgeComponent<VirtualizedListProps>(
  ReactNativeVirtualizedList as React.ElementType,
  "VirtualizedList"
)

/** Memoized `Animated.FlatList` wrapper with extended `dataSet` support. */
const animatedFlatList = propforgeComponent<FlatListProps>(
  ReactNativeAnimated.FlatList as React.ElementType,
  "Animated.FlatList"
)

/** Memoized `Animated.Image` wrapper with extended `dataSet` support. */
const animatedImage = propforgeComponent<ImageProps>(
  ReactNativeAnimated.Image as React.ElementType,
  "Animated.Image"
)

/** Memoized `Animated.Pressable` wrapper with extended `dataSet` support. */
const animatedPressable = propforgeComponent<PressableProps>(
  ReactNativeAnimated.createAnimatedComponent(ReactNativePressable) as React.ElementType,
  "Animated.Pressable"
)

/** Memoized `Animated.ScrollView` wrapper with extended `dataSet` support. */
const animatedScrollView = propforgeComponent<ScrollViewProps>(
  ReactNativeAnimated.ScrollView as React.ElementType,
  "Animated.ScrollView"
)

/** Memoized `Animated.Text` wrapper with extended `dataSet` support. */
const animatedText = propforgeComponent<TextProps>(
  ReactNativeAnimated.Text as React.ElementType,
  "Animated.Text"
)

/** Memoized `Animated.View` wrapper with extended `dataSet` support. */
const animatedView = propforgeComponent<ViewProps>(
  ReactNativeAnimated.View as React.ElementType,
  "Animated.View"
)

/** Only the altered animated component wrappers exported by propforge. */
export const Animated = {
  FlatList: animatedFlatList,
  Image: animatedImage,
  Pressable: animatedPressable,
  ScrollView: animatedScrollView,
  Text: animatedText,
  View: animatedView
}
