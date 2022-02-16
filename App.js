import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import * as Screens from "./Screens";
import * as Recipe from "./recipes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Screens.Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NavRec"
            component={NavRec}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="NavCat"
            component={NavCat}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="NavFav"
            component={NavFav}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="NavPlan"
            component={NavPlan}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="Ampalaya"
            component={Recipe.Ampalaya}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="AdobongSitaw"
            component={Recipe.AdobongSitaw}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="BananaQue"
            component={Recipe.BananaQue}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Bibingka"
            component={Recipe.Bibingka}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="BukoPie"
            component={Recipe.BukoPie}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="ChickenCurry"
            component={Recipe.ChickenCurry}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="AdobongIsda"
            component={Recipe.AdobongIsda}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="GinataangAlimasag"
            component={Recipe.GinataangAlimasag}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Goto"
            component={Recipe.Goto}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Longsilog"
            component={Recipe.Longsilog}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Pinakbet"
            component={Recipe.Pinakbet}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Salad"
            component={Recipe.Salad}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Sinangag"
            component={Recipe.Sinangag}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Spag"
            component={Recipe.Spag}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="TinolangManok"
            component={Recipe.TinolangManok}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="TinolangTahong"
            component={Recipe.TinolangTahong}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Turon"
            component={Recipe.Turon}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
          <Stack.Screen
            name="Ukoy"
            component={Recipe.Ukoy}
            options={{
              headerRight: (props) => <Logo {...props} />,
              headerTitle: "Back",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class NavRec extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Recipes"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipes") {
              iconName = focused ? "md-restaurant" : "pizza";
            } else if (route.name === "Categories") {
              iconName = focused ? "list" : "book";
            } else if (route.name === "Favourites") {
              iconName = focused ? "heart-circle" : "heart";
            } else if (route.name === "Plan") {
              iconName = focused ? "calendar" : "bulb";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Recipes" component={Screens.Recipes} />
        <Tab.Screen name="Categories" component={Screens.Categories} />
        <Tab.Screen name="Favourites" component={Screens.Favourites} />
        <Tab.Screen name="Plan" component={Screens.Plan} />
      </Tab.Navigator>
    );
  }
}

class NavCat extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Categories"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipes") {
              iconName = focused ? "md-restaurant" : "pizza";
            } else if (route.name === "Categories") {
              iconName = focused ? "list" : "book";
            } else if (route.name === "Favourites") {
              iconName = focused ? "heart-circle" : "heart";
            } else if (route.name === "Plan") {
              iconName = focused ? "calendar" : "bulb";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Recipes" component={Screens.Recipes} />
        <Tab.Screen name="Categories" component={Screens.Categories} />
        <Tab.Screen name="Favourites" component={Screens.Favourites} />
        <Tab.Screen name="Plan" component={Screens.Plan} />
      </Tab.Navigator>
    );
  }
}

class NavFav extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Favourites"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipes") {
              iconName = focused ? "md-restaurant" : "pizza";
            } else if (route.name === "Categories") {
              iconName = focused ? "list" : "book";
            } else if (route.name === "Favourites") {
              iconName = focused ? "heart-circle" : "heart";
            } else if (route.name === "Plan") {
              iconName = focused ? "calendar" : "bulb";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Recipes" component={Screens.Recipes} />
        <Tab.Screen name="Categories" component={Screens.Categories} />
        <Tab.Screen name="Favourites" component={Screens.Favourites} />
        <Tab.Screen name="Plan" component={Screens.Plan} />
      </Tab.Navigator>
    );
  }
}

class NavPlan extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Plan"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipes") {
              iconName = focused ? "md-restaurant" : "pizza";
            } else if (route.name === "Categories") {
              iconName = focused ? "list" : "book";
            } else if (route.name === "Favourites") {
              iconName = focused ? "heart-circle" : "heart";
            } else if (route.name === "Plan") {
              iconName = focused ? "calendar" : "bulb";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Recipes" component={Screens.Recipes} />
        <Tab.Screen name="Categories" component={Screens.Categories} />
        <Tab.Screen name="Favourites" component={Screens.Favourites} />
        <Tab.Screen name="Plan" component={Screens.Plan} />
      </Tab.Navigator>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <Image
        style={{ width: 40, height: 40, marginRight: 30 }}
        source={require("./assets/logo.png")}
      />
    );
  }
}
