import axios from 'axios';

const API_KEY = 'AIzaSyAtlT8uoUdcNDPl578tpRTPqXy3DkFFBFE';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

export async function authenticate(mode, email, password){
   const url = `${BASE_URL}:${mode}?key=${API_KEY}`;
   const response = await axios.post(url, {
      email, password, returnSecureToken: true
   });
   const token = response.data.idToken;
   return token;
}

export async function createUser(email, password) {
   return authenticate('signUp', email, password);
}

export async function login(email, password) {
   return authenticate('signInWithPassword', email, password);
}