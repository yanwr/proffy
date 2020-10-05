import APi from "./apis";

export async function loadConnections() {
  try {
    const response = await APi.get('/connections');
    return response.data.total;
  } catch (ex) {
    console.error('Erro to load connection in /connections');
  }
};