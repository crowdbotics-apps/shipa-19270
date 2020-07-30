import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile85911Navigator from '../features/UserProfile85911/navigator';
import UserProfile85880Navigator from '../features/UserProfile85880/navigator';
import Tutorial85879Navigator from '../features/Tutorial85879/navigator';
import NotificationList85851Navigator from '../features/NotificationList85851/navigator';
import Settings85850Navigator from '../features/Settings85850/navigator';
import Settings85842Navigator from '../features/Settings85842/navigator';
import UserProfile85840Navigator from '../features/UserProfile85840/navigator';
import UserProfile85809Navigator from '../features/UserProfile85809/navigator';
import Tutorial85808Navigator from '../features/Tutorial85808/navigator';
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
UserProfile85911: { screen: UserProfile85911Navigator },
UserProfile85880: { screen: UserProfile85880Navigator },
Tutorial85879: { screen: Tutorial85879Navigator },
NotificationList85851: { screen: NotificationList85851Navigator },
Settings85850: { screen: Settings85850Navigator },
Settings85842: { screen: Settings85842Navigator },
UserProfile85840: { screen: UserProfile85840Navigator },
UserProfile85809: { screen: UserProfile85809Navigator },
Tutorial85808: { screen: Tutorial85808Navigator },
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
