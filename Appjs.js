import { AppLoading } from "expo";

import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Animated, AppState, StyleSheet, View, Image } from "react-native";
import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "./contexts/LanguageContext";
import ApolloProvider from "./apollo/ApolloProvider";
import { AuthProvider } from "./contexts/AuthContext";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { NotificationProvider } from "./contexts/NotificationContext";
import { BreadCrumbsProvider } from "./contexts/BreadCrumbsContext";
import {
  ModalInfoConsumer,
  ModalInfoProvider,
} from "./contexts/ModalInfoContext";
import ModalInfo from "./components/shared/ModalInfo";
import { MagicLinkProvider } from "./contexts/MagicLinkContext";
import theme from "./styles/theme";
import {
  WarningsModalProvider,
  WarningsModalConsumer,
} from "./contexts/WarningsModalContext";
import WarningsModal from "./components/shared/WarningsModal";

const App = (props) => {
  console.disableYellowBox = true;
  const [isLoadingComplete, setLoadingComplete] = useState(true);
  const [appState, setAppState] = useState(AppState.currentState);

  const [scaleAnim] = useState(new Animated.Value(0.3));

  useEffect(() => {
    AppState.removeEventListener("change", _handleAppStateChange);
  }, []);
  console.log("AAPSTATE", appState);
  useEffect(() => {
    return () => AppState.removeEventListener("change", _handleAppStateChange);
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
      console.log("App State: " + "App has come to the foreground!");
      alert("App State: " + "App has come to the foreground!");
    }
    console.log("App State: " + nextAppState);
    alert("App State: " + nextAppState);
    setAppState(nextAppState);
  };

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 0.5,
      duration: 4000,
    }).start(({ finished }) => {
      if (finished) {
        setLoadingComplete(false);
      }
    });
  }, []);

  if (isLoadingComplete) {
    loadResourcesAsync();

    return (
      // <AppLoading startAsync={loadResourcesAsync} onError={handleLoadingError} onFinish={() => handleFinishLoading(setLoadingComplete)}>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Animated.View
          style={{
            ...props.style,
            flex: 1,
            transform: [{ scale: scaleAnim }],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("./assets/images/splashscreen.png")} />
        </Animated.View>
      </View>
      // </AppLoading>
    );
  }
  // console.log('Props', props);
  return (
    <WarningsModalProvider>
      <MagicLinkProvider initialUri={props.exp.initialUri}>
        <ThemeProvider theme={theme}>
          <NotificationProvider>
            <ModalInfoProvider>
              <AuthProvider>
                <ApolloProvider>
                  <LanguageProvider>
                    {/* <BreadCrumbsProvider> */}
                    <View style={styles.container}>
                      {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
                      {/* <StatusBar barStyle="dark-content" /> */}
                      <ModalInfoConsumer>
                        {(value) =>
                          value.isVisible ? (
                            <ModalInfo
                              isVisible={value.isVisible || false}
                              headerIcon={value.headerIcon || null}
                              content={value.content}
                              title={value.title}
                              subTitle={value.subTitle}
                              onButtonPress={
                                value.onButtonPress || value.closeModal
                              }
                              onBackdropPress={
                                value.onBackdropPress || value.closeModal
                              }
                              departmentCode={value.departmentCode || null}
                            />
                          ) : null
                        }
                      </ModalInfoConsumer>

                      <WarningsModalConsumer>
                        {(modalValue) =>
                          modalValue.isVisible ? (
                            <WarningsModal
                              isVisible={modalValue.isVisible || false}
                              modalClass={modalValue.class}
                              title={modalValue.title}
                              text={modalValue.text}
                              content={modalValue.content}
                              headerIcon={modalValue.headerIcon}
                              actionButtons={modalValue.actionButtons}
                              cancelText={modalValue.cancelText}
                              submitText={modalValue.submitText}
                              onButtonPress={
                                modalValue.onButtonPress ||
                                modalValue.closeWarningsModal
                              }
                              onBackdropPress={
                                modalValue.onBackdropPress ||
                                modalValue.closeWarningsModal
                              }
                              onCancelPress={
                                modalValue.onCancelPress ||
                                modalValue.closeWarningsModal
                              }
                            />
                          ) : null
                        }
                      </WarningsModalConsumer>
                      <DrawerNavigator />
                    </View>
                    {/* </BreadCrumbsProvider> */}
                  </LanguageProvider>
                </ApolloProvider>
              </AuthProvider>
            </ModalInfoProvider>
          </NotificationProvider>
        </ThemeProvider>
      </MagicLinkProvider>
    </WarningsModalProvider>
  );
};

async function loadResourcesAsync() {
  await Promise.all([
    // Asset.loadAsync([require('./assets/images/splash_bet.png'), require('./assets/images/splash_bet.png')]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "optima-bold": require("./assets/fonts/Optima_Nova_B.ttf"),
      "optima-medium": require("./assets/fonts/Optima_Medium.ttf"),
      "optima-italic": require("./assets/fonts/Optima_Italic.ttf"),
      "optima-regular": require("./assets/fonts/Optima_Regular.ttf"),
      "cinzel-black": require("./assets/fonts/Cinzel-Black.ttf"),
      "cinzel-bold": require("./assets/fonts/Cinzel-Bold.ttf"),
      "cinzel-regular": require("./assets/fonts/Cinzel-Regular.ttf"),
      dancing: require("./assets/fonts/DancingScript.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
