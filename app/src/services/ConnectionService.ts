import { ToastAndroid } from "react-native";
import APi from "./apis";

export async function loadConnections() {
  try {
    const response = await APi.get('/connections');
    return response.data.total;
  } catch (ex) {
    console.error('Erro to load connection in /connections', ex);
  }
};

export async function createConneciton(user_id:number | undefined) {
  try {
    if (user_id) {
      await APi.post('/connections', { user_id });
      ToastAndroid.show('Connection create with success!', ToastAndroid.BOTTOM);
    }
  } catch (ex) {
    console.error('Error to create connection in /connections', ex)
  }
};