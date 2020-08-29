import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar, Button, TouchableHighlight, TouchableNativeFeedback }
    from 'react-native';

const styles = StyleSheet.create({
    container: {
        fontFamily: "'Poppins', sans-serif",
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#111111',
        flexDirection: "column"
    },
    content: {
        flexGrow: 1,
        flexShrink: 1,
        padding: 10
    },
    buttonStyle: {
        marginBottom: 10
    },
    titleBarItem: {
        height: "100%",
        position: "relative"
    },
    titleBarItemInner: {
        padding: 5,
        borderRadius: 100,
    },
    titleBarItemInnerText: {
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1
    },
    titleBar: {
        backgroundColor: "green",
        flexGrow: 0,
        flexShrink: 0,
        padding: 10,
        fontSize: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});


export class MainViewState {

}

export class MainView extends Component {


    constructor(prop: Readonly<{}>) {
        super(prop)
    }

    componentDidMount() {

    }


    testMethod2() {
        alert(this.props ? "Linked the class, this is not null" : "Not linked the class, this is null")
    }

    testMethod() {
        this?.testMethod2?.();
    }

    render() {
        const icon = require("../assets/morphosium.png");
        console.info(icon)
        return (
            <View style={{ flex: 1 }}>
                <StatusBar></StatusBar>
                <View style={styles.container}>

                    <View style={styles.titleBar}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            {`Morphosium FCK \n(Fucking-Controll Kit)`}
                        </Text>

                        <TouchableNativeFeedback style={styles.titleBarItem} onPress={() => alert("Yardım metni bulunamaıd")}
                            background={TouchableNativeFeedback.Ripple('#fff')}>
                            {/* @ts-ignore */}
                            <View style={styles.titleBarItemInner}>
                                <Text style={styles.titleBarItemInnerText}>Yardım</Text>
                            </View>

                        </TouchableNativeFeedback>

                    </View>

                    <View style={styles.content}>
                        <Image style={{ height: 100, width: window.innerWidth, tintColor: "#fff" }} resizeMethod={"scale"}
                            source={require("../assets/morphosium.png")}></Image>
                        <View style={styles.buttonStyle} >
                            <Button onPress={this.testMethod} title="method"> </Button>
                        </View>


                        <View style={styles.buttonStyle} >
                            <Button onPress={() => this.testMethod()} title="() => method()"> </Button>
                        </View>

                        <View style={styles.buttonStyle} >
                            <Button onPress={this.testMethod.bind(this)} title="method.bind(this)"> </Button>
                        </View>



                    </View>



                </View>
            </View>)
    }
}