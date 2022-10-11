import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
   const [loading, setLoading] = useState(false);
   const authCtx = useContext(AuthContext);

   async function loginHandler({ email, password }) {
      setLoading(true);
      try {
         const token = await login(email, password);
         authCtx.authenticate(token);
      } catch (error) {
         Alert.alert('Authentication failed', 'Could not log you in. Please check your credentials or try again later!');
         setLoading(false);
      }
   }

   if (loading) {
      return <LoadingOverlay message='Login you in...' />
   }

   return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
