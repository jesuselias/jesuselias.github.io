/**
 * The external dependencies.
 */
 import axios from 'axios';
//  import { call } from 'redux-saga/effects';
//  import AsyncStorage from '@react-native-async-storage/async-storage';
 
 const client = axios.create({
   baseURL: `${process.env.API_BASE_URL}/${process.env.API_VERSION}`,
 });
 
//  client.interceptors.request.use(async (config) => {
//    try {
//      const token = await AsyncStorage.getItem(`${process.env.STORAGE_KEY}:user-token`);
 
//      config.headers['Authorization'] = `Bearer ${token}`;
 
//      return config;
//    } catch (e) {
//      return config;
//    }
//  });
 
 class Api {
   constructor(client) {
     this.client = client;
   }
 
   getUser() {
     return this.client
       .get('/user')
       .then((response) => response.data)
       .catch((e) => console.log(e));
   }
 
   updateUser(formData) {
     return this.client
       .post('/user', formData)
       .then((response) => response.data)
       .catch((e) => console.log(e));
   }
 
   // Anti-pattern
   login([username, password]) {
     return this.client
       .post('/login', { username, password })
       .then((response) => response.data)
       .catch((e) => {
         console.log('error login');
         console.log('error login ' + e.response.data.data.error);
 
         alert(e.response.data.data.error ? e.response.data.data.error : e.response.data.data);
       });
   }
 
   resetPassword([email]) {
     return this.client
       .post('/reset-password', { email })
       .then((response) => alert('Check your email for reset password link'))
       .catch((e) => {
         alert('There was an error. Please double check your email address.');
       });
   }
 
   logout([userId, token]) {
     return this.client
       .get('/logout')
       .then((response) => response.data.data)
       .catch((e) => console.log(e));
   }
 
   refresh() {
     return this.client
       .get('/refresh')
       .then((response) => response.data.token)
       .catch((e) => console.log(e));
   }
 
   createAccount([data]) {
     console.log(data)
     console.log(this.client)
     return this.client
       .post('/create-account', { data })
       .then((response) => response.data)
       .catch((e) => console.log(e));
   }
 
 }
 export default new Api(client);
 