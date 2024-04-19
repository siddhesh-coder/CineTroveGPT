import { LANGUAGE } from "../utils/constants";

const useLang = (identifier) => {
  const langObject = LANGUAGE.find(
    (langInfo) => langInfo.identifier === identifier
  );
  return langObject;
};

export default useLang;
