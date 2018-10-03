import { KeepAwake, registerRootComponent } from 'expo';
import FrontDisplayWrapper from './src/components/FrontDisplayWrapper';

if (__DEV__) {
    KeepAwake.activate();
}

registerRootComponent(FrontDisplayWrapper);
