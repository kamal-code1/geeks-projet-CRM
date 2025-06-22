document.addEventListener('DOMContentLoaded', async () => {
  try {
    const lignes = await fetchData('ligneoffres');
    console.log(lignes);
  } catch (e) {
    console.error(e);
  }
});