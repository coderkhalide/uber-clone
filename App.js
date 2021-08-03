import React from 'react';
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import AppNavigator from './app/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform } from 'react-native'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
        >
          <AppNavigator />
        </KeyboardAvoidingView>
      </Provider>
    </SafeAreaProvider>
  );
}