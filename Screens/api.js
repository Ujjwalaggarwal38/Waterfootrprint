const API_BASE_URL = 'http://192.168.32.76:8000'; // Use ngrok URL if remote

export const fetchProductByName = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/data/name?name=${name}`);
    const data = await response.json();

    if (data && data.length > 0) {
      const crop = data.find((item) => item["Crop Name"].toLowerCase() === name.toLowerCase());
      return crop;
    } else {
      throw new Error(`Product with name ${name} not found.`);
    }
  } catch (error) {
    console.error(`Error fetching product ${name}:`, error);
  }
};
