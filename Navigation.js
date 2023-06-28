import "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "./screens/HomeScreen"
import BankAccountScreen from "./screens/BankAccountScreen"
import SubCategoryScreen from "./screens/SubCategoryScreen"
import CategoryScreen from "./screens/CategoryScreen"

const Drawer = createDrawerNavigator()

export default function Navigation(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Bank" component={BankAccountScreen} />
                <Drawer.Screen name="Category" component={CategoryScreen} />
                <Drawer.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
