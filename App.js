import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Chào mừng bạn đến với Trang chủ!</Text>
    </View>
  );
};

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validatePhone = (number) => {
    const phoneRegex = /^0\d{9}$/; // Số điện thoại Việt Nam hợp lệ (bắt đầu bằng 0, đủ 10 số)
    return phoneRegex.test(number);
  };

  const handleContinue = () => {
    if (!validatePhone(phone)) {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
      return;
    }
    setError('');
   Alert.alert('Thanh cong','So dien thoai hop le, chuyen sang trang chu',[{
    text: 'OK',
    onPress:() => navigation.navigate('Home'),
   },
  ]);

  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Bọc toàn bộ màn hình để ẩn bàn phím khi nhấn ra ngoài */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Tiêu đề "Đăng nhập" */}
          <View style={styles.header}>
            <Text style={styles.title}>Đăng nhập</Text>
          </View>

          {/* Phần nhập số điện thoại */}
          <View style={styles.form}>
            <Text style={styles.subtitle}>Nhập số điện thoại</Text>
            <Text style={styles.description}>
              Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
            </Text>
            <TextInput
              style={[styles.input, error ? styles.inputError : null]}
              placeholder="Nhập số điện thoại của bạn"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setError(''); // Xóa lỗi khi người dùng nhập lại
              }}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>

          {/* Nút "Tiếp tục" */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between', // Đẩy nút xuống dưới
  },
  header: {
    paddingTop: 50, // Khoảng cách từ trên cùng
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontWeight:'bold',
    fontSize: 15,
    color: '#333',
    marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 2, // Chỉ có gạch dưới
    borderBottomColor: '#ccc', // Màu xanh lá
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'transparent', // Không có nền
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
