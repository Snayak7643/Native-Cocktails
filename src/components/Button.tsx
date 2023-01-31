import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

type PropType ={
    title : string;
}

const Button : React.FunctionComponent<PropType> = ({title}) => {
  return (
    <TouchableOpacity style={styles.buttonCover} onPress={()=>{}}>
        <Text style = {styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonCover:{
        backgroundColor : "#476a2e",
        padding : 10,
        margin : 5,
    },
    buttonText :{
        color : "white",
        fontWeight : "bold",
        textTransform : "uppercase",
        textAlign : "center",
    }
})