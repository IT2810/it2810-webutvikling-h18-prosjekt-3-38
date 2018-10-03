import { KeepAwake, registerRootComponent } from 'expo'
// import FrontDisplayWrapper from './src/components/FrontDisplayWrapper'
import PedometerSensor from './src/components/PedometerSensor'

// eslint-disable-next-line no-undef
if (__DEV__) {
  KeepAwake.activate()
}

registerRootComponent(PedometerSensor)
