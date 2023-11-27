import { memo } from "react";
import FloorTable from "./FloorTable";

const FloorThree = () => {
  return <FloorTable text="üç" floor={3} />;
};

export default memo(FloorThree);
