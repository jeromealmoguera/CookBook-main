import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="black" />

        <ImageBackground
          source={require("../assets/recipes/firstImage.jpg")}
          style={styles.backgroundImage}
        ></ImageBackground>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>CookBook</Text>
          <Text style={styles.subtitle}>"Filipino Recipes in One App"</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Button
                title="Go to Recipes"
                onPress={() => this.props.navigation.navigate("NavRec")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.button}>
            <Button
              title="Go to Categories"
              onPress={() => this.props.navigation.navigate("NavCat")}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Button
                title="Go to Favourites"
                onPress={() => this.props.navigation.navigate("NavFav")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Button
                title="Go to Plan"
                onPress={() => this.props.navigation.navigate("NavPlan")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    flex: 1,
    justifyContent: "flex-end",
  },
  titleContainer: {
    width: 220,
    height: 440,
    position: "absolute",
    bottom: 0,
  },
  title: {
    fontSize: 48,
    color: "white",
  },
  subtitle: {
    fontSize: 17,
    color: "white",
  },
  buttonContainer: {
    width: 300,
    height: 220,
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    bottom: 0,
  },
  button: {
    width: 300,
    height: 50,
  },
});
