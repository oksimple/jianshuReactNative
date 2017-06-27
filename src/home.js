/**
 * Created by jianzh on 2017/6/27.
 */
'use strict';
import React, {Component} from "react";
import {FlatList, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

export default class Home extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <View style={styles.home_view}>

                <View style={styles.home_header}>


                    <TouchableHighlight style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: "flex-start",
                        alignItems: 'center',
                        paddingLeft: 20
                    }}
                                        underlayColor="#FFFFFF"
                                        onPress={() => {

                                        }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            alignItems: 'center',
                        }}>
                            <Text style={{fontSize: 16, color: "#646464"}}>全部关注</Text>
                            <Image style={{width: 10, height: 10, marginLeft: 15}} resizeMode="contain"
                                   source={require('./img/zt_icon_open_night.png')}></Image>
                        </View>
                    </TouchableHighlight>


                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: "flex-end",
                        alignItems: 'center',
                        paddingRight: 20
                    }}>


                        <TouchableHighlight style={{marginRight: 30}} underlayColor="#FFFFFF" onPress={() => {
                        }}>
                            <Image style={{width: 25, height: 25}} resizeMode="contain"
                                   source={require('./img/icon_add_people_day.png')}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight style={{}} underlayColor="#FFFFFF" onPress={() => {
                        }}>
                            <Image style={{width: 20, height: 20}} resizeMode="contain"
                                   source={require('./img/find_search_night.png')}></Image>
                        </TouchableHighlight>

                    </View>
                </View>

                <View style={{height: 0.4, backgroundColor: "#c2c2c2"}}></View>

                <FlatList
                    style={{flex: 1}}
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}, {key: 'k'}, {key: 'r'}, {key: 'm'}, {key: 'n'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    home_view: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
    home_header: {
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: "#ffffff",
        height: 50,
    },
});