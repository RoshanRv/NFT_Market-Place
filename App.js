import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Details from "./screens/Details";
import Home from "./screens/Home";


const Stack = createStackNavigator()

const themes={

  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:'transparent'
  }

}


const App=()=> {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;


  return (
    <NavigationContainer theme={themes}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


