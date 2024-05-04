export const getCharacter = async (id: string) => {
    try {
      const resp = await fetch(
        `https://amiiboapi.com/api/amiibo/?tail=${id}`
      );
      const data = await resp.json();
      return data.amiibo[0];
      
    } catch (error) {
      console.error(error);
    }
  };