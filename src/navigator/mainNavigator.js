import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList85780Navigator from '../features/NotificationList85780/navigator';
import Settings85779Navigator from '../features/Settings85779/navigator';
import Settings85771Navigator from '../features/Settings85771/navigator';
import UserProfile85769Navigator from '../features/UserProfile85769/navigator';
import UserProfile85738Navigator from '../features/UserProfile85738/navigator';
import Tutorial85737Navigator from '../features/Tutorial85737/navigator';
import NotificationList85709Navigator from '../features/NotificationList85709/navigator';
import Settings85708Navigator from '../features/Settings85708/navigator';
import Settings85700Navigator from '../features/Settings85700/navigator';
import UserProfile85698Navigator from '../features/UserProfile85698/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList85780: { screen: NotificationList85780Navigator },
Settings85779: { screen: Settings85779Navigator },
Settings85771: { screen: Settings85771Navigator },
UserProfile85769: { screen: UserProfile85769Navigator },
UserProfile85738: { screen: UserProfile85738Navigator },
Tutorial85737: { screen: Tutorial85737Navigator },
NotificationList85709: { screen: NotificationList85709Navigator },
Settings85708: { screen: Settings85708Navigator },
Settings85700: { screen: Settings85700Navigator },
UserProfile85698: { screen: UserProfile85698Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
