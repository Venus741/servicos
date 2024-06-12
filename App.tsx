import { View } from 'react-native';
import { LoginPage } from './src/loginPage/login_page';
import { HomePage } from "./src/homePage/home_page";
import { ServicePage } from './src/servicePage/servicePage';

export default function App() {
  return (
    <View> 
      <HomePage/>
    </View>
  );
}