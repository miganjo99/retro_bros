const API = import.meta.env.VITE_API_URL + "/api/items";

export async function createItem(data) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateItem(id, data) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteItem(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
}
