document.addEventListener('DOMContentLoaded', async () => {
  try {
    const produits = await fetchData('produits');
    console.log(produits);
  } catch (e) {
    console.error(e);
  }
});