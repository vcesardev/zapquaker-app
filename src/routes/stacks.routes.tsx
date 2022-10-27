import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Defenses } from "../pages/Defenses";
import { Defense } from "../pages/Defense";
import Home from "../pages/Home";
import UpgradesOptions from "../pages/UpgradesOptions";
import UpgradeOption from "../pages/UpgradeOption";

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
      <DefensesStack.Screen name="Upgrades" component={UpgradesOptions} />
      <DefensesStack.Screen name="Upgrade" component={UpgradeOption} />
    </DefensesStack.Navigator>
  );
};

export default DefenseStack;
