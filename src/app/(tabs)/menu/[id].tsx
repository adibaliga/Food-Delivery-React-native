import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details :" + id }} />
      <Text style={{ fontSize: 20 }}>ProductDetailsScreen: {id}</Text>
    </View>
  );
};
export default ProductDetailsScreen;
