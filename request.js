import { PROJECT_ID } from "@env";
import axios from "axios";
import RNFS from 'react-native-fs';
import * as FileSystem from 'expo-file-system';

const apiUrl = `http://127.0.0.1:3000/api/project/${PROJECT_ID}/pointsofinterest`;
const outputFile = RNFS.DocumentDirectoryPath + "/model/placesMap.json";

export default async function fetchDataAndSaveToFile() {
  try {
    // Effectuer la requête GET vers l'API
    const response = await axios.get(apiUrl);

    // Enregistrer les données dans un fichier JSON
    const fileUri = `${FileSystem.documentDirectory}${outputFile}`;
    await FileSystem.writeAsStringAsync(outputFile, JSON.stringify(response.data, null, 2));

    console.log("Data copied in", outputFile);
  } catch (error) {
    console.error("API request error:", error);
  }
};