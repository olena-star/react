import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Проверка почты с помощью регулярного выражения
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);

    // Проверка длины пароля
    const isPasswordValid = formData.password.length >= 6;

    // Проверка совпадения пароля и подтверждения пароля
    const passwordsMatch = formData.password === formData.confirmPassword;

    if (isEmailValid && isPasswordValid && passwordsMatch) {
      // Пароль верный, данные можно отправить
      console.log('Все данные корректны:', formData);
    } else {
      console.log('Введены некорректные данные.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          required 
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleInputChange} 
          required 
        />
      </div>
      <div>
        <label>Подтвердите пароль:</label>
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleInputChange} 
          required 
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default RegistrationForm;
