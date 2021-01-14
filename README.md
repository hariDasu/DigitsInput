# DigitsInput

## Libraries Used and Justifications

1.  "react-native-confirmation-code-field"
    - This provided an efficient means of rendering a text verification input, and is widely used and accepted by the RN community. Testing is still possible with it by injecting the accessibility props into the `renderCell1 View/Text Components, and was used in the unit tests
2.  "react-native-progress"
    - Although I could have written a rudimentary progress bar component from scratch witha couple views with absolute positioning, I have used react-native-progress in the past and like that is backed by SVG components. These scale better and look better overall when trying to animate progress rather than using the traditional react native View or Animated.View components
3.  "react-native-vector-icons"
    - This is a widely accepted library, and comes with various icons available for usage. An alternative could be to use icomoon to generate a custom icon font if we have some more custom SVG icons we want to import, but for the specs provided, react-native-vector-icons seemed to fulfill the objective

## Testing

- Two tests were added, the first being an RNTL toJSON() snapshot test. Snapshot testing is useful when catching regressions, and lets developers know when a UI component has been modified.
- The second test is attempting to verify the responsiveness of the layout; when text is entered in the first two input fields, the bottom 'Next' button should still be visible in the viewport.

## Potential Optimizations/Improvements

- If given more time, it would have been nice to use React Navigation and customize the header to match the specs provided. Unfortunately this seemed out of scope and since it was a single screen layout it seemed best to just hardcode the top header component rather than add on the additional trouble of creating a stack navigator just for this one screen.
- State mangement/React query - react query piqued my interest after learning about from prior interviews, and I was interested in using it for this example, but there were no requirements for storing or using state in any real manner. I could have simply just console.log(code) after the value changed just to show that the data is available for use, whether to make an API call or store for the next screen to use, etc.
- Component Refactoring - there are plenty of Views and widgets contained in the VerifyEmail screen, it would have been cleaner and easier to read if it was refactored into several pure components that just return JSX. It also would have been more maintainable, and could have permitted even more snapshot testing.
