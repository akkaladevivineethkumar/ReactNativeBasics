import { Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'


const UpperHeader = () => {
return(
    <View style={{ justifyContent:'space-between',flexDirection:"row",padding: 12, backgroundColor: "lightgrey" }}>
        <Feather name="home" size={14} color="black" />
        <Text>E-commerce</Text>
        <Text>LogOut</Text>
    </View>
)
}
export default UpperHeader