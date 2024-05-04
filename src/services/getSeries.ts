export const getSeries = async () => {
    const response = await fetch("https://www.amiiboapi.com/api/amiiboseries/");
    const {amiibo} = await response.json();
    return amiibo;
}