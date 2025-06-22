document.addEventListener('DOMContentLoaded', async () => {
  try {
    const catalogues = await fetchData('catalogues');
    console.log(catalogues);
  } catch (e) {
    console.error(e);
  }
});
