
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
} from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    console.log('Số điện thoại:', phone);
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
              style={styles.input}
              placeholder="Nhập số điện thoại của bạn"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
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
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
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
