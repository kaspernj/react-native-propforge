import React from "react";
/** Allowed `dataSet` value types on prop-forged React Native components. */
export type DataSetValue = string | number | boolean | null | undefined;
/** Extended `dataSet` support for prop-forged React Native components. */
export type DataSetProps = {
    /** Additional `data-*` attributes passed through via React Native Web `dataSet`. */
    dataSet?: Record<string, DataSetValue>;
};
/** Broad style value accepted by prop-forged React Native components. */
type StyleValue = object | readonly object[] | null | undefined;
/** Broad native-like props accepted by the wrapper components. */
type NativeLikeProps = React.PropsWithChildren<{
    style?: StyleValue;
    testID?: string;
}> & Record<string, unknown>;
/** Props accepted by the memoized `ActivityIndicator` wrapper. */
export type ActivityIndicatorProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `FlatList` wrapper. */
export type FlatListProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `Image` wrapper. */
export type ImageProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `ImageBackground` wrapper. */
export type ImageBackgroundProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `KeyboardAvoidingView` wrapper. */
export type KeyboardAvoidingViewProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `Modal` wrapper. */
export type ModalProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `Pressable` wrapper. */
export type PressableProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `SafeAreaView` wrapper. */
export type SafeAreaViewProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `ScrollView` wrapper. */
export type ScrollViewProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `SectionList` wrapper. */
export type SectionListProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `Switch` wrapper. */
export type SwitchProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `Text` wrapper. */
export type TextProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `TextInput` wrapper. */
export type TextInputProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `TouchableHighlight` wrapper. */
export type TouchableHighlightProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `TouchableOpacity` wrapper. */
export type TouchableOpacityProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `TouchableWithoutFeedback` wrapper. */
export type TouchableWithoutFeedbackProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `View` wrapper. */
export type ViewProps = NativeLikeProps & DataSetProps;
/** Props accepted by the memoized `VirtualizedList` wrapper. */
export type VirtualizedListProps = NativeLikeProps & DataSetProps;
/** Memoized `ActivityIndicator` wrapper with extended `dataSet` support. */
export declare const ActivityIndicator: React.ComponentType<ActivityIndicatorProps>;
/** Memoized `FlatList` wrapper with extended `dataSet` support. */
export declare const FlatList: React.ComponentType<FlatListProps>;
/** Memoized `Image` wrapper with extended `dataSet` support. */
export declare const Image: React.ComponentType<ImageProps>;
/** Memoized `ImageBackground` wrapper with extended `dataSet` support. */
export declare const ImageBackground: React.ComponentType<ImageBackgroundProps>;
/** Memoized `KeyboardAvoidingView` wrapper with extended `dataSet` support. */
export declare const KeyboardAvoidingView: React.ComponentType<KeyboardAvoidingViewProps>;
/** Memoized `Modal` wrapper with extended `dataSet` support. */
export declare const Modal: React.ComponentType<ModalProps>;
/** Memoized `Pressable` wrapper with extended `dataSet` support. */
export declare const Pressable: React.ComponentType<PressableProps>;
/** Memoized `SafeAreaView` wrapper with extended `dataSet` support. */
export declare const SafeAreaView: React.ComponentType<SafeAreaViewProps>;
/** Memoized `ScrollView` wrapper with extended `dataSet` support. */
export declare const ScrollView: React.ComponentType<ScrollViewProps>;
/** Memoized `SectionList` wrapper with extended `dataSet` support. */
export declare const SectionList: React.ComponentType<SectionListProps>;
/** Memoized `Switch` wrapper with extended `dataSet` support. */
export declare const Switch: React.ComponentType<SwitchProps>;
/** Memoized `Text` wrapper with extended `dataSet` support. */
export declare const Text: React.ComponentType<TextProps>;
/** Memoized `TextInput` wrapper with extended `dataSet` support. */
export declare const TextInput: React.ComponentType<TextInputProps>;
/** Memoized `TouchableHighlight` wrapper with extended `dataSet` support. */
export declare const TouchableHighlight: React.ComponentType<TouchableHighlightProps>;
/** Memoized `TouchableOpacity` wrapper with extended `dataSet` support. */
export declare const TouchableOpacity: React.ComponentType<TouchableOpacityProps>;
/** Memoized `TouchableWithoutFeedback` wrapper with extended `dataSet` support. */
export declare const TouchableWithoutFeedback: React.ComponentType<TouchableWithoutFeedbackProps>;
/** Memoized `View` wrapper with extended `dataSet` support. */
export declare const View: React.ComponentType<ViewProps>;
/** Memoized `VirtualizedList` wrapper with extended `dataSet` support. */
export declare const VirtualizedList: React.ComponentType<VirtualizedListProps>;
/** Only the altered animated component wrappers exported by propforge. */
export declare const Animated: {
    FlatList: React.ComponentType<FlatListProps>;
    Image: React.ComponentType<ImageProps>;
    Pressable: React.ComponentType<PressableProps>;
    ScrollView: React.ComponentType<ScrollViewProps>;
    Text: React.ComponentType<TextProps>;
    View: React.ComponentType<ViewProps>;
};
export {};
