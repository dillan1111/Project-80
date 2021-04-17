import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class SettingsScreen extends Component{
    render(){
        return(
            <View>
                <Text> Setting </Text>
            </View>
        );
    }
}