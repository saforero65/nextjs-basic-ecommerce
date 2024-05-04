const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getFaqs = async () => {
  try {
    const resp = await fetch(`${API_URL}/faqs`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
