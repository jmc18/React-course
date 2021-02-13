import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

/*class CustomButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {label, action} = this.props
        return (
            <TouchableOpacity style={styles.btn} onPress={action} >
                <Text style={styles.btnText}>{label}</Text>
            </TouchableOpacity>
        );
    }
}*/

const CustomButton = (props) => {
    const {label, action} = props
    return (
        <TouchableOpacity style={styles.btn} onPress={action} >
            <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
      },
      btnText: {
        fontSize: 25,
        color: '#7f8c8d',
        fontWeight: 'bold'
      },
}

export default CustomButton