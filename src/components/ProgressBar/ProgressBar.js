import React from 'react';
import {Dimensions} from 'react-native'
import * as Progress from 'react-native-progress';


const {width} = Dimensions.get('window')
const ProgressBar = () => (
    <Progress.Bar progress={0.25} width={width * 0.8} unfilledColor={'lightgrey'} borderWidth={0} borderRadius={0} color={'#308C6A'} height={4}/>
  );




export default ProgressBar;
