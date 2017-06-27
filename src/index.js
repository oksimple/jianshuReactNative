/**
 * Created by jianzh on 2017/6/26.
 */
'use strict';
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import TabView from "./widget/tab_view";
import Home from "./home";

export default class Index extends Component {
    render() {
        return (
            <View style={styles.index_view}>

                <View style={styles.index_addview}>

                    <Home></Home>

                </View>


                <TabView style={styles.index_tab}></TabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    index_view: {
        flex: 1,
        flexDirection: "column",
    },
    index_tab: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    index_addview: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
});
