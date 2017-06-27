/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";

import Index from "./src/index.js";

export default class jianshu extends Component {
    render() {
        return (
            <Index></Index>
        );
    }
}

AppRegistry.registerComponent('jianshu', () => jianshu);
