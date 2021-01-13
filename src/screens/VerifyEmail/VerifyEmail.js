import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CodeInput, ProgressBar} from '../../components';

const {height, width} = Dimensions.get('window');

const VerifyEmail = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={styles.headerContainer}>
            <View style={styles.progressHeader}>
              <Icon
                accessible={true}
                accessibilityLabel={'backIcon'}
                accessibilityHint="Back Icon"
                name="chevron-left"
                size={20}
                color={'grey'}
              />
              <ProgressBar
                accessible={true}
                accessibilityLabel={'progressBar'}
                accessibilityHint="verification progress bar"
              />
              <Icon
                accessible={true}
                accessibilityLabel={'helpIcon'}
                accessibilityHint="Help Icon"
                name="question-circle-o"
                size={20}
                color={'grey'}
              />
            </View>

            <View style={styles.headerTextContainer}>
              <Text
                accessible={true}
                accessibilityLabel={'verifyEmailText'}
                accessibilityHint="Verify Email text"
                style={styles.headerText}>
                Verify Email
              </Text>
              <Text
                accessible={true}
                accessibilityLabel={'verifyEmailSubText'}
                accessibilityHint="Verify Email Sub text"
                style={styles.subHeaderText}>
                Please enter the code sent to robby@internet.com.{' '}
              </Text>
            </View>
          </View>

          <View style={styles.codeInputContainer}>
            <CodeInput />
          </View>

          <View>
            <View style={styles.subTextContainer}>
              <Text
                accessible={true}
                accessibilityLabel={'unreceivedCodeText'}
                accessibilityHint="Didn't receive code text"
                style={styles.subText}>
                {' '}
                Didn't receive your code?{' '}
                <Text
                  accessible={true}
                  accessibilityLabel={'resendEmailLinkText'}
                  accessibilityHint="Resend Email Link text"
                  style={styles.linkText}>
                  Resend
                </Text>
              </Text>
              <Text
                accessible={true}
                accessibilityLabel={'incorrectEmailText'}
                accessibilityHint="Update Email description text"
                style={styles.subText}>
                {' '}
                Enter your email incorrectly?{' '}
                <Text
                  accessible={true}
                  accessibilityLabel={'updateEmailText'}
                  accessibilityHint="Update Email Link text"
                  style={styles.linkText}>
                  Update email
                </Text>
              </Text>
            </View>
            <View style={styles.buttonContainer} accessible={true}>
              <Button
                accessible={true}
                accessibilityLabel={'verifyEmailNextButton'}
                accessibilityHint="Navigates to the next screen"
                onPress={() => {
                  console.log('next pressed');
                }}
                title="Next"
                color="white"
              />
            </View>
          </View>
       </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F6F1EB',
    // marginTop: 20
  },
  inner: {
    flex: 1,
    padding: 24,
    flexDirection: 'column',
  },
  headerContainer: {
    position: 'absolute',
    top: 60,
    paddingHorizontal: 10,
    width: '100%',
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // paddingHorizontal: 10,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  headerTextContainer: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingTop: 10,
    width: width * 0.6
  },
  headerText: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subHeaderText: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    fontSize: 16,
    paddingLeft: 10,
    textAlign: 'left',
  },
  codeInputContainer: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    // paddingTop: 200
  },
  buttonContainer: {
    width: 0.8 * width,
    marginLeft: 0.1 * width,
    borderRadius: 25,
    backgroundColor: '#308C6A',
    marginBottom: 44,
  },
  subText: {
    color: 'lightgrey',
  },
  linkText: {
    color: '#308C6A',
  },
  subTextContainer: {
    paddingLeft: 20,
    paddingBottom: 15,
  },
});

export default VerifyEmail;
