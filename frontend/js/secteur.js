document.addEventListener('DOMContentLoaded', async () => {
  try {
    const secteurs = await fetchData('secteurs');
    console.log(secteurs);
  } catch (e) {
    console.error(e);
  }
});