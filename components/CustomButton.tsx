import { isLoaded } from "expo-font";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
}: {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      className={`${containerStyles} bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className={`${textStyles} text-primary font-psemibold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
