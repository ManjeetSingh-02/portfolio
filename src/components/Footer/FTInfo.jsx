import FTIDev from "./FTIDev";
import FTIContact from "./FTIContact";
import { footerContact } from "../../libraries/constants";

const FTInfo = () => {
  return (
    <div className="flex text-center flex-col items-start justify-center gap-1">
      <FTIDev devname={footerContact.devname} />
      <FTIContact devmail={footerContact.devmail} />
    </div>
  );
};

export default FTInfo;
