import { createStackNavigator } from "@react-navigation/stack";
import { AppointmentDetails, Home, SignIn } from "../screens";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  AppointmentDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Navigator>
  );
}
