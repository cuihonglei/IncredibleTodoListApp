import { Text } from 'react-native';

import MainLayout from "../layouts/MainLayout";

const AboutScreen = ({ navigation }) => {

    // Get the current date
    const currentDate = new Date();

    // Format the date as per your requirements
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() +
      1}/${currentDate.getFullYear()}`;

  return (
    <MainLayout>
      <Text>App Name: Incredible Todo List</Text>
      <Text>Author: Honglei Cui</Text>
      <Text>{formattedDate}</Text>
    </MainLayout>
  )
};

export default AboutScreen;