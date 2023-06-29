import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer"
import HomeScreen from "./screens/HomeScreen"
import BankAccountScreen from "./screens/BankAccount/BankAccountScreen"
import SubCategoryScreen from "./screens/SubCategoryScreen"
import CategoryScreen from "./screens/CategoryScreen"
import logo from "./assets/Images/Logo/logo.png";
import {SafeAreaView, View, Image, Text} from "react-native";
import React from "react";
import TransactionScreen from "./screens/TransactionScreen";
import InComeScreen from "./screens/InComeScreen";
import ExpenseScreen from "./screens/ExpenseScreen";
import {COLORS, ICONS} from "./constants";
import GoalScreen from "./screens/GoalScreen";
import BudgetScreen from "./screens/BudgetScreen";


const Drawer = createDrawerNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
                              drawerContent={
                                  (props) => {
                                      return (
                                          <SafeAreaView>
                                              <View
                                                  style={{
                                                      height: 200,
                                                      width: '100%',
                                                      justifyContent: "center",
                                                      alignItems: "center",
                                                      borderBottomColor: "#f4f4f4",
                                                      borderBottomWidth: 1,
                                                      backgroundColor: COLORS.bgBlue
                                                  }}
                                              >
                                                  <Image
                                                      source={logo}
                                                      style={{
                                                          height: 130,
                                                          width: 130,
                                                          borderRadius: 65
                                                      }}
                                                  />
                                                  <Text
                                                      style={{
                                                          fontSize: 16,
                                                          color: "#111"
                                                      }}
                                                  >Personal Finance</Text>
                                              </View>
                                              <DrawerItemList {...props} />
                                          </SafeAreaView>
                                      )
                                  }
                              }
                              screenOptions={{
                                  drawerStyle: {
                                      backgroundColor: "#fff",
                                      width: 250
                                  },
                                  headerStyle: {
                                      backgroundColor: COLORS.bgHeaderStyle,
                                  },
                                  headerTintColor: "#fff",
                                  headerTitleStyle: {
                                      fontWeight: "bold"
                                  },
                                  drawerLabelStyle: {
                                      color: "#111"
                                  }
                              }}>
                <Drawer.Screen key="Home" name="Trang chủ" options={{drawerIcon:()=><Image source={ICONS.home}/>}} component={HomeScreen}/>
                <Drawer.Screen key="Bank" name="Ngân hàng" options={{drawerIcon:()=><Image source={ICONS.bank}/>}} component={BankAccountScreen}/>
                <Drawer.Screen key="Transaction" name="Giao dịch" options={{drawerIcon:()=><Image source={ICONS.transaction}/>}} component={TransactionScreen}/>
                <Drawer.Screen key="InCome" name="Thu nhập" options={{drawerIcon:()=><Image source={ICONS.income}/>}} component={InComeScreen}/>
                <Drawer.Screen key="Expense" name="Chi phí" options={{drawerIcon:()=><Image source={ICONS.expense}/>}} component={ExpenseScreen}/>
                <Drawer.Screen key="Goal" name="Mục tiêu" options={{drawerIcon:()=><Image source={ICONS.goal}/>}} component={GoalScreen}/>
                <Drawer.Screen key="Budget" name="Ngân sách" options={{drawerIcon:()=><Image source={ICONS.budget}/>}} component={BudgetScreen}/>
                <Drawer.Screen key="Category" name="Danh mục" component={CategoryScreen}/>
                <Drawer.Screen key="SubCategoryScreen" name="Danh mục phụ" component={SubCategoryScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
