import React from 'react';
import { Text, Image, View} from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import styles from './styles';
import {Song} from '../../types';

const song = {
    id: '',
        imageUri: 'https://i.pinimg.com/564x/a6/93/7c/a6937cbb5eb433e4f2acff649fa13218.jpg',
        title: 'Away in a Manger',
        artist: 'Share In Faith',
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
              <Image source={{uri: song.imageUri}} style={styles.image} />
            <View style={styles.rightContainer}>  
              <View style={styles.nameContainer}> <Text  style={styles.title}>{song.title}</Text>
              <Text  style={styles.artist}>{song.artist}</Text> </View>

              <View style={styles.iconsContainer}> <AntDesign name="hearto" size={30} color={"white"}/>
              <FontAwesome name="play" size={30} color={"white"}/> </View>
        </View>
        </View>
    )
}

export default PlayerWidget;