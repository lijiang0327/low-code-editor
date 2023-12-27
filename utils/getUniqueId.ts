let uniqueId = 0;

const getUniqueId = () => {
  return uniqueId++;
}

export default getUniqueId;
