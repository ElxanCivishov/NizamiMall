import { memo } from "react";
import FloorTable from "./FloorTable";

const FloorTwo = () => {
  return <FloorTable text="iki" floor={2} />;
};

export default memo(FloorTwo);
