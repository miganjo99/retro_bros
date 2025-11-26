const BASE = (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/items";

export async function fetchItems() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error("Error fetching items: " + res.status);
  return res.json();
}

export async function createItem(data) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error creating item: " + res.status);
  return res.json();
}

export async function updateItem(id, data) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Error updating item: " + res.status);
  return res.json();
}

export async function deleteItem(id) {
  await fetch(`${BASE}/${id}`, {
    method: "DELETE"
  });
}