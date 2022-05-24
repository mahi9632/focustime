import React,{useState} from 'react';
import {View, StyleSheet, Text, Vibration} from 'react-native';
import {Countdown} from '../components/Countdown';
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import {ProgressBar} from 'react-native-paper';
import {Timing} from './Timing';
import {useKeepAwake} from 'expo-keep-awake';


const ONE_SECONF_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECONF_IN_MS,
  1 * ONE_SECONF_IN_MS,
  1 * ONE_SECONF_IN_MS,
  1 * ONE_SECONF_IN_MS,
  1 * ONE_SECONF_IN_MS,
  1 * ONE_SECONF_IN_MS,

]


export const Timer = ({focusSubject,clearSubject,onTimerEnd}) =>{

  useKeepAwake();
  const [isStarted,setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1)

  const onEnd =(reset) =>{
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  return(
    <View style={styles.container}>
    <View style={styles.countDown}>
      <Countdown isPaused={!isStarted} 
      minutes={minutes}
      onProgress = {setProgress}
       onEnd={onEnd}/>

    <View style={{paddingTop:spacing.lg}}>
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
    </View>
    <View style={{paddingTop :spacing.sm}}>
      <ProgressBar 
      color={colors.progressBar}
      style={{height:spacing.sm}}
      progress={progress}
      />
    </View>
    <View style={styles.timingWrapper}>
      <Timing onChangeTime={setMinutes} />
    </View>

    <View style={styles.buttonWrapper}>

      {isStarted ?<RoundedButton title="pause" onPress={() => setIsStarted(false)} />:<RoundedButton title="start" onPress={() => setIsStarted(true)}/>}
    </View>
    <View style={styles.clearSubjectWrqpper}>
      <RoundedButton size={50} title="-" onPress={clearSubject} />
    </View>
  </View>
  )}



const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  countDown:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    padding:15,
    justifyContent:'center',
    alignItems:'center',
  },
  timingWrapper: {
    flex: .1,
    paddingTop: spacing.sm,
    flexDirection: 'row',

  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
    task: {
    color: colors.white,
    textAlign: 'center'
  },
  clearSubjectWrqpper: {
    justifyContent:'center',
    flexDirection:'row'
  }
})