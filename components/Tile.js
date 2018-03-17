import React from 'react';
import {View, Text} from 'react-native';

export default () => (
    <View style={{ flex: 1, backgroundColor: '#fff', height: 200, borderColor: 'silver', borderWidth: 0.5, margin: 8 }}>
        <View style={{ flex: 1, backgroundColor: 'gray' }}></View>
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Daang</Text>
            <Text>by Mankirt Aulakh</Text>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderTopColor: 'silver', borderTopWidth: 0.3, padding: 5 }}>
            <Text style={{ fontSize: 10 }}>Likes: 3</Text>
            <Text style={{ fontSize: 10 }}>Fav: 2</Text>
        </View>
    </View>
);