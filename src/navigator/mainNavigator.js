import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48239Navigator from '../features/BlankScreen48239/navigator';
import BlankScreen39959Navigator from '../features/BlankScreen39959/navigator';
import Settings39444Navigator from '../features/Settings39444/navigator';
import UserProfile39437Navigator from '../features/UserProfile39437/navigator';
import Settings39436Navigator from '../features/Settings39436/navigator';
import Settings39434Navigator from '../features/Settings39434/navigator';
import SignIn239432Navigator from '../features/SignIn239432/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen48239: { screen: BlankScreen48239Navigator },
BlankScreen39959: { screen: BlankScreen39959Navigator },
Settings39444: { screen: Settings39444Navigator },
UserProfile39437: { screen: UserProfile39437Navigator },
Settings39436: { screen: Settings39436Navigator },
Settings39434: { screen: Settings39434Navigator },
SignIn239432: { screen: SignIn239432Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
