export const fetchDataFromAPI = async (userId, server) => {
  const url = `https://id-game-checker.p.rapidapi.com/mobile-legends/${userId}/${server}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3144ba9be2msh006f63520665a33p15e041jsnf441c167da6c",
      "X-RapidAPI-Host": "id-game-checker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.success) {
      return data.data.username;
    } else {
      throw new Error("Gagal mendapatkan data. Pastikan ID dan Server valid.");
    }
  } catch (error) {
    throw new Error("Terjadi kesalahan saat mengambil data.");
  }
};
