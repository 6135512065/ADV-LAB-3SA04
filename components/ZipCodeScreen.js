import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: '1. Nakhonsithammarat', code: '80000' },
    { place: '2. Krabi', code: '81000' },
    { place: '3. Pangnga', code: '82000' },
    { place: '4. Phuket', code: '83000' },
    { place: '5. Suratthani', code: '84000' },
    { place: '6. Ranong', code: '85000' },
    { place: '7. Chumporn', code: '86000' },
    { place: '8. Songkhla', code: '90000' },
    { place: '9. Satun', code: '91000' },
    { place: '10. Trang', code: '92000' },
    { place: '11. Phatthalung', code: '93000' },
    { place: '12. Pattani', code: '94000' },
    { place: '13. Yala', code: '95000' },
    { place: '14. Narathiwat', code: '96000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={{ borderColor: 'red', borderWidth: 3 }}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );
}