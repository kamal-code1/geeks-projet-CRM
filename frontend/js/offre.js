document.addEventListener('DOMContentLoaded', async () => {
  try {
    const offres = await fetchData('offres');
    console.log(offres);
  } catch (e) {
    console.error(e);
  }
});