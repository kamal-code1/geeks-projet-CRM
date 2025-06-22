document.addEventListener('DOMContentLoaded', async () => {
  try {
    const clients = await fetchData('clients');
    console.log(clients);
  } catch (e) {
    console.error(e);
  }
});