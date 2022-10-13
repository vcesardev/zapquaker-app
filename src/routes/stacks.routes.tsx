import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Defenses } from "../pages/Defenses";
import { Defense } from "../pages/Defense";
import Home from "../pages/Home";

const DefensesStack = createStackNavigator();

const DefenseStack = (): JSX.Element => {
  return (
    <DefensesStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <DefensesStack.Screen name="Home" component={Home} />
      <DefensesStack.Screen name="Defesas" component={Defenses} />
      <DefensesStack.Screen name="Defesa" component={Defense} />
    </DefensesStack.Navigator>
  );
};

export default DefenseStack;
