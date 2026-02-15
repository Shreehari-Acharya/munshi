import { useState } from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatInterface from '@/components/ChatInterface';
import CustomTabBar from '@/components/CustomTabBar';
import ScanCamera from '@/components/ScanCamera';

export const unstable_settings = {
  initialRouteName: 'Dashboard',
};

const Layout = () => {
  const [aiOpen, setAiOpen] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);

  return (
    <SafeAreaProvider>
      <View className="relative flex-1">
        <View className='flex bg-background justify-start pb-6 pl-4 items-end flex-row w-full h-32 z-40'>
          <Text className="text-foreground font-inter tracking-[-0.2rem] font-bold text-4xl">hello,</Text>
          <Text className='text-foreground font-playfair-medium-italic text-4xl'>{" "}binit</Text>
        </View>
        <Tabs
          tabBar={(props) => (
            <CustomTabBar {...props} onAIPress={() => setAiOpen(true)} />
          )}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen name="Dashboard" />
          <Tabs.Screen name="Products" />
          <Tabs.Screen name="Stock" />
          <Tabs.Screen name="Profile" />
        </Tabs>
        <ChatInterface
          open={aiOpen}
          onClose={() => setAiOpen(false)}
          onOpenScan={() => setScanOpen(true)}
        />
        <ScanCamera
          visible={scanOpen}
          onClose={() => setScanOpen(false)}
          onCapture={(uri) => {
            console.log('Captured:', uri);
            setScanOpen(false);
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Layout;
