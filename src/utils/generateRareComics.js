export default function generateRareComics(comics, total_items) {
  const randomNumbers = [];

  for (let i = 0; i < total_items * 0.1; i++) {
    randomNumbers.push(Math.floor(Math.random() * total_items) + 1);
  }

  const comicsData = JSON.parse(JSON.stringify(comics));
  Object.preventExtensions(comicsData);

  comicsData.map((item, index) => {
    if (randomNumbers.includes(index)) {
      item.comicType = "raro";
    } else {
      item.comicType = "comum";
    }

    return item;
  });

  return comicsData;
}
