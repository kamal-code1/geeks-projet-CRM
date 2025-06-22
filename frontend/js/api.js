const BASE_URL = 'http://localhost:5001/api';

async function fetchData(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`Erreur API : ${res.status}`);
  return await res.json();
}

async function postData(endpoint, data) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}