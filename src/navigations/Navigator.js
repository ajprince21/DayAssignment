import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MoreScreen from '../screens/MoreScreen';
import SessionScreen from '../screens/SessionScreen';
import PerformanceScreen from '../screens/PerformanceScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../global/colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.lightGreen,
                tabBarInactiveTintColor: colors.grey2,
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-sharp" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="SessionScreen"
                component={SessionScreen}
                options={{
                    tabBarLabel: 'Session',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="videocam" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="PerformanceScreen"
                component={PerformanceScreen}
                options={{
                    tabBarLabel: 'Performance',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pie-chart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="MoreScreen"
                component={MoreScreen}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ellipsis-horizontal" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function Navigator() {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
}

export default Navigator;
