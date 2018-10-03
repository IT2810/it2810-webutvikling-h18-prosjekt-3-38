import { KeepAwake, registerRootComponent } from 'expo';
import App from './src/components/App.js';

if (__DEV__) {
    KeepAwake.activate();
}

registerRootComponent(App);