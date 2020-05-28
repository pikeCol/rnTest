export default class NavigationUtil {
  static goToPage (page, params = {}) {
    const navigation = NavigationUtil.navigation;
    console.log (navigation);

    if (!navigation) {
      console.log ('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigate (page, params);
  }

  static resetToHomePage (params) {
    const {navigation} = params;
    navigation.navigate ('Main');
  }
}
