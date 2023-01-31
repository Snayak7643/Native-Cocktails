import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style = {styles.aboutContainer}>
      <Text style = {styles.heading}>About</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    aboutContainer:{
        padding : 10,
    },
    heading :{
        textAlign : "center",
        fontWeight :"bold"
    }
})