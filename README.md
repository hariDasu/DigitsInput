# DigitsInput

## Libraries Used and Justifications
 
 1.  "react-native-confirmation-code-field"
    - This provided an efficient means of rendering a text verification input, and is widely used and accepted by the RN community. Testing is still possible with it by injecting the accessibility props into the `renderCell1 View/Text Components, and was used in the unit tests
 2.  "react-native-progress"
    - Although I could have written a rudimentary progress bar component from scratch witha couple views with absolute positioning, I have used react-native-progress in the past and like that is backed by SVG components. These scale better and look better overall when trying to animate progress rather than using the traditional react native View or Animated.View components
 3. "react-native-vector-icons"
    - This is a widely accepted library, and comes with various icons available for usage. An alternative could be to use icomoon to generate a custom icon font if we have some more custom SVG icons we want to import, but for the specs provided, react-native-vector-icons seemed to fulfill the objective