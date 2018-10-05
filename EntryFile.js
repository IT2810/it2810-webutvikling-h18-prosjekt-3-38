import { KeepAwake, registerRootComponent } from 'expo'
// import FrontDisplayWrapper from './src/components/FrontDisplayWrapper'
import PedometerGraph from './src/components/PedometerGraph'

// eslint-disable-next-line no-undef
if (__DEV__) {
  KeepAwake.activate()
}

registerRootComponent(PedometerGraph)
