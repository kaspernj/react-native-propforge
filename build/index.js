import React from "react";
import { ActivityIndicator as ReactNativeActivityIndicator, Animated as ReactNativeAnimated, FlatList as ReactNativeFlatList, Image as ReactNativeImage, ImageBackground as ReactNativeImageBackground, KeyboardAvoidingView as ReactNativeKeyboardAvoidingView, Modal as ReactNativeModal, Pressable as ReactNativePressable, SafeAreaView as ReactNativeSafeAreaView, ScrollView as ReactNativeScrollView, SectionList as ReactNativeSectionList, Switch as ReactNativeSwitch, Text as ReactNativeText, TextInput as ReactNativeTextInput, TouchableHighlight as ReactNativeTouchableHighlight, TouchableOpacity as ReactNativeTouchableOpacity, TouchableWithoutFeedback as ReactNativeTouchableWithoutFeedback, View as ReactNativeView, VirtualizedList as ReactNativeVirtualizedList } from "react-native";
import { memoComponent } from "./memo-component.js";
/**
 * Build a memoized component wrapper with extended `dataSet` support.
 *
 * @param component
 * @param displayName
 */
function propforgeComponent(component, displayName) {
    return memoComponent(component, displayName);
}
/** Memoized `ActivityIndicator` wrapper with extended `dataSet` support. */
export const ActivityIndicator = propforgeComponent(ReactNativeActivityIndicator, "ActivityIndicator");
/** Memoized `FlatList` wrapper with extended `dataSet` support. */
export const FlatList = propforgeComponent(ReactNativeFlatList, "FlatList");
/** Memoized `Image` wrapper with extended `dataSet` support. */
export const Image = propforgeComponent(ReactNativeImage, "Image");
/** Memoized `ImageBackground` wrapper with extended `dataSet` support. */
export const ImageBackground = propforgeComponent(ReactNativeImageBackground, "ImageBackground");
/** Memoized `KeyboardAvoidingView` wrapper with extended `dataSet` support. */
export const KeyboardAvoidingView = propforgeComponent(ReactNativeKeyboardAvoidingView, "KeyboardAvoidingView");
/** Memoized `Modal` wrapper with extended `dataSet` support. */
export const Modal = propforgeComponent(ReactNativeModal, "Modal");
/** Memoized `Pressable` wrapper with extended `dataSet` support. */
export const Pressable = propforgeComponent(ReactNativePressable, "Pressable");
/** Memoized `SafeAreaView` wrapper with extended `dataSet` support. */
export const SafeAreaView = propforgeComponent(ReactNativeSafeAreaView, "SafeAreaView");
/** Memoized `ScrollView` wrapper with extended `dataSet` support. */
export const ScrollView = propforgeComponent(ReactNativeScrollView, "ScrollView");
/** Memoized `SectionList` wrapper with extended `dataSet` support. */
export const SectionList = propforgeComponent(ReactNativeSectionList, "SectionList");
/** Memoized `Switch` wrapper with extended `dataSet` support. */
export const Switch = propforgeComponent(ReactNativeSwitch, "Switch");
/** Memoized `Text` wrapper with extended `dataSet` support. */
export const Text = propforgeComponent(ReactNativeText, "Text");
/** Memoized `TextInput` wrapper with extended `dataSet` support. */
export const TextInput = propforgeComponent(ReactNativeTextInput, "TextInput");
/** Memoized `TouchableHighlight` wrapper with extended `dataSet` support. */
export const TouchableHighlight = propforgeComponent(ReactNativeTouchableHighlight, "TouchableHighlight");
/** Memoized `TouchableOpacity` wrapper with extended `dataSet` support. */
export const TouchableOpacity = propforgeComponent(ReactNativeTouchableOpacity, "TouchableOpacity");
/** Memoized `TouchableWithoutFeedback` wrapper with extended `dataSet` support. */
export const TouchableWithoutFeedback = propforgeComponent(ReactNativeTouchableWithoutFeedback, "TouchableWithoutFeedback");
/** Memoized `View` wrapper with extended `dataSet` support. */
export const View = propforgeComponent(ReactNativeView, "View");
/** Memoized `VirtualizedList` wrapper with extended `dataSet` support. */
export const VirtualizedList = propforgeComponent(ReactNativeVirtualizedList, "VirtualizedList");
/** Memoized `Animated.FlatList` wrapper with extended `dataSet` support. */
const animatedFlatList = propforgeComponent(ReactNativeAnimated.FlatList, "Animated.FlatList");
/** Memoized `Animated.Image` wrapper with extended `dataSet` support. */
const animatedImage = propforgeComponent(ReactNativeAnimated.Image, "Animated.Image");
/** Memoized `Animated.Pressable` wrapper with extended `dataSet` support. */
const animatedPressable = propforgeComponent(ReactNativeAnimated.createAnimatedComponent(ReactNativePressable), "Animated.Pressable");
/** Memoized `Animated.ScrollView` wrapper with extended `dataSet` support. */
const animatedScrollView = propforgeComponent(ReactNativeAnimated.ScrollView, "Animated.ScrollView");
/** Memoized `Animated.Text` wrapper with extended `dataSet` support. */
const animatedText = propforgeComponent(ReactNativeAnimated.Text, "Animated.Text");
/** Memoized `Animated.View` wrapper with extended `dataSet` support. */
const animatedView = propforgeComponent(ReactNativeAnimated.View, "Animated.View");
/** Only the altered animated component wrappers exported by propforge. */
export const Animated = {
    FlatList: animatedFlatList,
    Image: animatedImage,
    Pressable: animatedPressable,
    ScrollView: animatedScrollView,
    Text: animatedText,
    View: animatedView
};
//# sourceMappingURL=index.js.map