/**
 * Created by jianzh on 2017/6/26.
 */
'use strict';
import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

export default class TabView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textColor1: "#646464", //默认选中首页的文字颜色
            textColor2: "#a3a3a3",
            textColor4: "#a3a3a3",
            textColor5: "#a3a3a3",
            tabImag1: require('../img/icon_tabbar_subscription_active.png'),//默认选中首页的图片
            tabImag2: require('../img/icon_tabbar_home.png'),
            tabImag4: require('../img/icon_tabbar_notification.png'),
            tabImag5: require('../img/icon_tabbar_me.png'),
        };

    }


    /**
     * tab点击事件
     * @param postion
     * @private
     */
    _onPressTab(postion) {
        //选中tab后全部初始化为未选中状态
        this.setState({
            textColor1: "#a3a3a3",
            textColor2: "#a3a3a3",
            textColor4: "#a3a3a3",
            textColor5: "#a3a3a3",
            tabImag1: require('../img/icon_tabbar_subscription.png'),
            tabImag2: require('../img/icon_tabbar_home.png'),
            tabImag4: require('../img/icon_tabbar_notification.png'),
            tabImag5: require('../img/icon_tabbar_me.png'),
        });

        switch (postion) {
            case 0:
                this.setState({
                    textColor1: "#646464",
                    tabImag1: require('../img/icon_tabbar_subscription_active.png')
                })
                break;
            case 1:
                this.setState({
                    textColor2: "#646464",
                    tabImag2: require('../img/icon_tabbar_home_active.png')
                })
                break;
            case 2:
                //中间的编辑选项
                break;
            case 3:
                this.setState({
                    textColor4: "#646464",
                    tabImag4: require('../img/icon_tabbar_notification_active.png')
                })
                break;
            case 4:
                this.setState({
                    textColor5: "#646464",
                    tabImag5: require('../img/icon_tabbar_me_active.png')
                })
                break;
            default:

        }
    }


    render() {
        return (
            <View style={styles.tab_view}>
                <TouchableHighlight style={{flex: 1, paddingBottom: 3, paddingTop: 3}}
                                    underlayColor="#E4E4E4"
                                    onPress={() => {
                                        this._onPressTab(0)
                                    }}>

                    <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                        <Image style={styles.tab_img1} resizeMode="contain" source={this.state.tabImag1}></Image>
                        <Text style={{color: this.state.textColor, fontSize: 11}}>首页</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={{flex: 1, paddingBottom: 3, paddingTop: 3}}
                                    underlayColor="#E4E4E4"
                                    onPress={() => {
                                        this._onPressTab(1)
                                    }}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                        <Image style={styles.tab_img2} resizeMode="contain"
                               source={this.state.tabImag2}></Image>
                        <Text style={{color: this.state.textColor, fontSize: 11}}>发现</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={{flex: 1, paddingBottom: 3, paddingTop: 3}}
                                    underlayColor="#E4E4E4"
                                    onPress={() => {
                                        this._onPressTab(2)
                                    }}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                        <Image style={styles.tab_img3} resizeMode="contain"
                               source={require('../img/icon_tabbar_write.png')}></Image>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={{flex: 1, paddingBottom: 3, paddingTop: 3}}
                                    underlayColor="#E4E4E4"
                                    onPress={() => {
                                        this._onPressTab(3)
                                    }}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                        <Image style={styles.tab_img4} resizeMode="contain" source={this.state.tabImag4}></Image>
                        <Text style={{color: this.state.textColor, fontSize: 11}}>消息</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={{flex: 1, paddingBottom: 3, paddingTop: 3}}
                                    underlayColor="#E4E4E4"
                                    onPress={() => {
                                        this._onPressTab(4)
                                    }}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                        <Image style={styles.tab_img5} resizeMode="contain" source={this.state.tabImag5}></Image>
                        <Text style={{color: this.state.textColor, fontSize: 11}}>我的</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

/**
 * 这里样式本来可以就定义一个 应为都是一样的，我定了多个，方便以后单一控制
 *
 * 其中大部分样式直接写view里面
 *
 */
const styles = StyleSheet.create({
    tab_view: {
        flexDirection: "row",
        height: 45,
        backgroundColor: "#ffffff",
    },

    tab_img1: {
        flex: 1,
        height: 25,
        width: 25
    },
    tab_img2: {
        flex: 1,
        height: 25,
        width: 25
    },
    tab_img3: {
        flex: 1,
        height: 45,
        width: 45
    },
    tab_img4: {
        flex: 1,
        height: 25,
        width: 25
    },
    tab_img5: {
        flex: 1,
        height: 25,
        width: 25,
    },

});
