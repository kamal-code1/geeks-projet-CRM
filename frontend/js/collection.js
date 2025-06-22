document.addEventListener('DOMContentLoaded', async () => {
  try {
    const collections = await fetchData('collections');
    console.log(collections);
  } catch (e) {
    console.error(e);
  }
});