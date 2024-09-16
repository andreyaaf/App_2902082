import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          

          <Image
            source={images.lpc}
            className="max-w-[380px] w-full h-[298px] center"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-black font-bold text-center">
              {"\n"}
              <Text className="text-black-500">Crea tu propio estilo</Text>
            </Text>

          </View>

          <CustomButton
            title="Ingresar con el correo"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-8"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
