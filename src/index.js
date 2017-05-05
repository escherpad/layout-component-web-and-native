import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'
import App from './App'

// Components
/* const Card = ({ children }) => <View style={styles.card}>{children}</View>
 * const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
 * const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />
 * */
// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', {rootTag: document.getElementById('root')});
