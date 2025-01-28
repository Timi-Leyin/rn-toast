/* eslint-disable react-native/no-inline-styles */
// eslint-disable
import toast, { ToastProvider } from 'rn-toast';
import { Button, SafeAreaView, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ToastProvider
        config={{
          position: 'bottom',
          duration: 5000,
          stack: true,
        }}
      >
        <Examples />
      </ToastProvider>
    </SafeAreaView>
  );
}

const Examples = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
    toast({
      title: 'Hey there ' + count,
      // type: 'info',
    });
  };

  return (
    <View>
      <Button title="Click Me" onPress={clickHandler} />
    </View>
  );
};
