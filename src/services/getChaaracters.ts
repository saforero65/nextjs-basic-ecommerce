

export const getCharacters = async () => {
    const resp = await fetch("https://amiiboapi.com/api/amiibo");
    const data = await resp.json();
    return data.amiibo.slice(0, 20);
  };

