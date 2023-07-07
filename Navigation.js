import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer"
import HomeScreen from "./screens/HomeScreen"
import BankAccountScreen from "./screens/BankAccountScreen"
import IncomeCategoryAndSubIncomeCategoryScreen from "./screens/IncomeCategoryAndSubIncomeCategoryScreen"
import ExpenseCategoryAndSubExpenseCategoryScreen from "./screens/ExpenseCategoryAndSubExpenseCategoryScreen"
import logo from "./assets/Images/Logo/logo.png";
import {SafeAreaView, View, Image, Text} from "react-native";
import React from "react";
import TransactionScreen from "./screens/TransactionScreen";
import InComeScreen from "./screens/InComeScreen";
import ExpenseScreen from "./screens/ExpenseScreen";
import {COLORS, ICONS} from "./constants";
import GoalScreen from "./screens/GoalScreen";
import BudgetScreen from "./screens/BudgetScreen";
import IncomeCategoryScreen from "./screens/IncomeCategoryScreen";
import IncomeSubCategoryScreen from "./screens/IncomeSubCategoryScreen";
import ExpenseCategoryScreen from "./screens/ExpenseCategoryScreen";
import ExpenseSubCategoryScreen from "./screens/ExpenseSubCategoryScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BankDetailScreen from "./screens/BankDetailScreen";


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator ();
// const Stack = createNativeStackNavigator({
//     IncomeCategory: {
//         screen: IncomeCategoryScreen,
//     },
//     IncomeSubCategory:{
//         screen: IncomeSubCategoryScreen,
//     },
//     ExpenseCategory:{
//         screen: ExpenseCategoryScreen,
//     },
//     ExpenseSubCategory:{
//         screen: ExpenseSubCategoryScreen,
//     },
// });

function NavigationDrawer() {
    return (

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
                <Drawer.Screen key="IncomeCategoryAndSubIncomeCategoryScreen" options={{drawerIcon:()=><Image source={ICONS.incomeCategory}/>}} name="Danh mục thu nhập" component={IncomeCategoryAndSubIncomeCategoryScreen}/>
                <Drawer.Screen key="ExpenseCategoryAndSubExpenseCategoryScreen" options={{drawerIcon:()=><Image source={ICONS.expenseCategory}/>}} name="Danh mục chi phí" component={ExpenseCategoryAndSubExpenseCategoryScreen}/>
            </Drawer.Navigator>

    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="NavigationDrawer"
                    component={NavigationDrawer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BankDetailScreen"
                    component={BankDetailScreen}
                    options={{ title: 'BankDetailScreen' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
