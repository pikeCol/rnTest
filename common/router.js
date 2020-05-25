import {createStackNavigator} from 'react-navigation-stack';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import HomePage from '../pages/homePage';
import FlatListDemo from '../pages/flatListDemo';
const routeConfigMap = {
  HomePage: {
    screen: HomePage,
  },
  Page1: {
    screen: Page1,
  },
  Page2: {
    screen: Page2,
  },
  FlatListDemo: {
    screen: FlatListDemo,
  },
};

const stackConfig = {};
const AppRouter = createStackNavigator (routeConfigMap, stackConfig);

export default AppRouter;
