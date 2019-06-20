import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Form from './components/Form';
import App from './App';


AppRegistry.registerComponent(appName, () => App);
// const { width } = Dimensions.get('window');
// const routenConfigs = {
//     Form: {
//         path: '../',
//         screen: Form,
//     },
//     NavBar: {
//         path: '/',
//         screen: NavBar,
//     },
// };
// const drawerNavigatorConfig = {
//     initialRouteName: Form,
//     drawerwidth: width / 2,
// };
//const App = DrawerNavigator(routenConfigs, drawerNavigatorConfig);
// AppRegistry.registerComponent('tutorialProject', () => App);
