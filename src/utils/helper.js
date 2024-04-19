const truncateText = (details, maxLength) => {
  if (details.length <= maxLength) return details;
  const separationOfDetails = details.split(". ");
  const concatDetails = separationOfDetails.slice(0, 2).join(". ") + "...";
  return concatDetails;
};

const giveYearOfRelease = (date) => {
   const dateArr = date.split('-');
   return dateArr[0];
}

const getDirecting = (crew) => {
   const director = crew.find((person) => person?.department === "Directing");
   return director?.original_name;
}

const getGenres = (genres) => {
  return genres.map((genre) => genre?.name).join(", ");
}

export { giveYearOfRelease, getDirecting, getGenres };

export default truncateText;

