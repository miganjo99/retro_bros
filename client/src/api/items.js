export const fetchItems = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/items`);
  const data = await response.json();
  return data;
};