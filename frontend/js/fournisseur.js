document.addEventListener('DOMContentLoaded', async () => {
  try {
    const fournisseurs = await fetchData('fournisseurs');
    console.log(fournisseurs);
  } catch (e) {
    console.error(e);
  }
});