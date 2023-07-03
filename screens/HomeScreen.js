import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import * as Icon from 'react-native-feather';

function HomeScreen() {

    return (
            <ScrollView className="flex-row">
                {/*Làm phần call danh mục chính*/}
                <View className="flex-row bg-blue-400 p-3 mt-1">
                    <View className="w-1/3">
                        <Icon.ArrowDown width={100} height={80} strokeWidth={3} stroke={"white"} fill={'none'}/>
                    </View>
                    <View className="w-fit">
                        <Text className="w-full font-bold text-white p-2 text-lg">Thu nhập trong tháng này</Text>
                        <Text className="w-full text-center text-red-800 font-bold text-xl p-1">12300000 VNĐ</Text>
                    </View>
                </View>

                <View className="flex-row bg-red-400 p-3 mt-1">
                    <View className="w-1/3">
                        <Icon.ArrowUp width={100} height={80} strokeWidth={3} stroke={"white"} fill={'none'}/>
                    </View>
                    <View className="w-fit">
                        <Text className="w-full font-bold text-white p-2 text-lg">Chi phí trong tháng này</Text>
                        <Text className="w-full text-center text-red-800 font-bold text-xl p-1">12300000 VNĐ</Text>
                    </View>
                </View>

                <View className="flex-row bg-blue-400 p-3 px-12 mt-1">
                    <View className="w-1/3">
                        <Icon.ArrowDown width={100} height={80} strokeWidth={3} stroke={"white"} fill={'none'}/>
                    </View>
                    <View className="w-fit">
                        <Text className="w-full font-bold text-white p-2 text-lg">Thu nhập hôm nay</Text>
                        <Text className="w-full text-center text-red-800 font-bold text-xl p-1">12300000 VNĐ</Text>
                    </View>
                </View>

                <View className="flex-row bg-red-400 p-3 mt-1">
                    <View className="w-1/3">
                        <Icon.ArrowDown width={100} height={80} strokeWidth={3} stroke={"white"} fill={'none'}/>
                    </View>
                    <View className="w-fit">
                        <Text className="w-full font-bold text-white p-2 text-lg">Chi phí hôm nay</Text>
                        <Text className="w-full text-center text-red-800 font-bold text-xl p-1">12300000 VNĐ</Text>
                    </View>
                </View>

                {/*Làm biểu đồ so sánh thu nhập và chi tiêu*/}

                {/*Làm phần biểu đồ số dư hiện tại trong năm*/}

                {/*Làm phần biểu đồ danh mục chi tiêu trong tháng*/}

                {/*Làm phần biểu đồ danh mục thu nhậpr trong tháng*/}

                {/*Làm phần thu nhập gần nhất*/}

                {/*Làm phần chi phí gần nhất*/}
            </ScrollView>
    );
}

export default HomeScreen;
