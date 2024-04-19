const truncateText = (details, maxLength) => {
  if (details.length <= maxLength) return details;
  const separationOfDetails = details.split(". ");
  const concatDetails = separationOfDetails.slice(0, 2).join(". ") + "...";
  return concatDetails;
};

export default truncateText;
