document.addEventListener('DOMContentLoaded', async () => {
  try {
    const liens = await fetchData('collection-produits');
    console.log(liens);
  } catch (e) {
    console.error(e);
  }
});