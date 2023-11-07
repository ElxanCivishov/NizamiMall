import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TruncatedHtml from "./TruncatedHtml";
import { RESET, getHelp } from "../features/help/helpSlice";
import Loader from "./Loader";

const HelpText = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, help } = useSelector((state) => state.help);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getHelp());
      dispatch(RESET());
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) return <Loader />;
  // if (isError) return "Error";

  return (
    <div className="p-5 bg-white">
      <div className="text-xs md:text-base tracking-normal">
        <TruncatedHtml
          html={
            help ||
            "Hal-hazırda  kömək üçün heç bir mətn yoxdur! <br/> Qısa zamanda bu məsələ həll olunacaqdır. Əgər müraciətiniz vacibdirsə bizimlə əlaqə saxlayın sizə kömək etməyə hər zaman hazırıq."
          }
        />
      </div>
    </div>
  );
};

export default memo(HelpText);
