import { ScrollView, View } from 'react-native';
import { SignInForm } from '@/components/sign-in-form';

const Login = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="bg-background flex-1 items-center justify-center p-4"
      keyboardDismissMode="interactive"
    >
      <View className="w-full max-w-sm">
        <SignInForm />
      </View>
    </ScrollView>
  );
};

export default Login;
