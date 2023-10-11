/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from "./src/store";


export default function Main() {
    return (
        <PaperProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </PaperProvider>
    );
}


//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Main);
