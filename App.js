import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <MainContainer />
          <SafeAreaView />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

// MainContainer
const MainContainer = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  LogBox.ignoreLogs([
    'A non-serializable value was detected in the state, in the path',
  ]);
  LogBox.ignoreAllLogs();
  console.error = error => error.apply;

  return <AppNavigator />;
};

export default App;
