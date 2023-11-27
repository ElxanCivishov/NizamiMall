import { memo } from "react";
import FloorTable from "./FloorTable";

const FloorOne = () => {
  return <FloorTable text="bir" floor={1} />;
};

export default memo(FloorOne);
