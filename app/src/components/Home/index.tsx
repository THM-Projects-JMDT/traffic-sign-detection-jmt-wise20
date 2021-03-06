import { usePermissions } from "expo-permissions";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import * as Permissions from "expo-permissions";
import * as ScreenOrientation from "expo-screen-orientation";
import { RequestPermission } from "./RequestPermission";

export interface HomeProps {
  navigation: NavigationType;
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  useEffect(() => {
    const init = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };
    init();
  }, []);

  const [permission, askForPermission] = usePermissions(
    [Permissions.CAMERA, Permissions.LOCATION],
    {
      ask: true,
    }
  );

  return (
    <RequestPermission
      permission={permission}
      askForPermission={askForPermission}
    >
      <View style={style.container}>
        <View style={style.buttons}>
          <Button
            style={style.button}
            mode="outlined"
            onPress={() => navigation.navigate("Start")}
          >
            Start
          </Button>
        </View>
      </View>
    </RequestPermission>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    margin: 5,
  },
});
