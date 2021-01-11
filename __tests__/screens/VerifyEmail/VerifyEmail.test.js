import React from 'react';
import {render, fireEvent, findByText} from '@testing-library/react-native';
import {VerifyEmail} from '../../../src/screens';

describe('Verify email screen testing', () => {
  test('bottom next button still visible while editing text', () => {
    const {getAllByA11yLabel, getByText} = render(<VerifyEmail />);
    const codeInput = getAllByA11yLabel('verifyCodeInputs');
    fireEvent.changeText(codeInput[0], '1');
    fireEvent.changeText(codeInput[1], '2');

    const nextButton = getByText('Next');
    expect(nextButton).toBeTruthy();
  });
});
