import React from "react";
import Screen from "./Screen";

export const Dasboard = ({ navigation }) => <Screen navigation={navigation} name="Dashboard" />;
export const AddFarmer = ({ navigation }) => <Screen navigation={navigation} name="Add a Farmer" />;
export const Logout = ({ navigation }) => <Screen navigation={navigation} name="LOGOUT" />;
// export const ListScreen = ({ navigation }) => <Screen navigation={navigation} name="Lists" />;
// export const ReportScreen = ({ navigation }) => <Screen navigation={navigation} name="Reports" />;
// export const StatisticScreen = ({ navigation }) => <Screen navigation={navigation} name="Statistics" />;
// export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="SignOut" />;
