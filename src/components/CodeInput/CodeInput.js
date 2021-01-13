import React, {useEffect, useState} from 'react';
import {Keyboard, Dimensions, StyleSheet, Text, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const {height} = Dimensions.get('window')

 const CodeInput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 10});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [codeStyling, setCodeStyling] = useState({
    justifyContent: 'center',
    alignItems: 'center',
  });

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setCodeStyling({
      paddingTop: height * .25,
    });
  };

  const _keyboardDidHide = () => {
    setCodeStyling({
      justifyContent: 'center',
      alignItems: 'center',
    });
  };

  const renderCellInput = ({index, symbol, isFocused}) => {
    if (index === 2 || index === 5) {
      return (
        <View style={[styles.hyphenRow, codeStyling]}>
          <View
            onLayout={getCellOnLayoutHandler(index)}
            accessible={true}
            accessibilityLabel={'verifyCodeInputs'}
            accessibilityHint="Code verification input"
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
          <Text style={styles.cellText}> - </Text>
        </View>
      );
    } else {
      return (
        <View style={[codeStyling]}>
          <View
            onLayout={getCellOnLayoutHandler(index)}
            accessible={true}
            accessibilityLabel={'verifyCodeInputs'}
            accessibilityHint="Code verification input"
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={10}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) =>
          renderCellInput({index, symbol, isFocused})
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
  },
  hyphenRow: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  hyphenText: {
    color: '#000',
    fontSize: 24,
    textAlign: 'auto',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});

export default CodeInput;
