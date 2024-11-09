import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import TelaInicial from './screens/TelaInicial';
import TelaDetalhes from './screens/TelaDetalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer> 

    <Stack.Navigator initialRouteName='Home'>
     <Stack.Screen
     name="Home"
    component={TelaInicial}
    options ={{
      title: "Tela inicial"}}

     />

<Stack.Screen
     name="Detalhes"
    component={TelaDetalhes}
    options ={{
      title: "Detalhes"}}

     />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

