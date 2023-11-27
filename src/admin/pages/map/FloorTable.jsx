import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMaps } from "../../../features/map/mapSlice";
import { NotResult } from "../../components";
import { convertDateTime } from "../../../helper/date-fns";
import notImage from "/images/noImage.png";
import { Loader } from "../../../components";
import { Meta } from "../../../components/layout";
import { FaEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const FloorTable = ({ floor, text }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { maps } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(getMaps(`floor=${floor}`));
  }, [floor]);

  useEffect(() => {
    setLoading(false);
  }, [maps]);

  return (
    <>
      <Meta title={`Mərtəbə ${text}`} />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <h2 className="font-semibold md:text-2xl text-gray-600 dark:text-slate-100">
            Mərtəbə {text}
          </h2>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            {loading ? (
              <Loader />
            ) : maps?.length > 0 ? (
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold">#</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Logo</div>
                    </th>

                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Servis</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">x1</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">x2</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">y1</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">y2</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Y.Tarix</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">D.Tarix</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Əməliyyat</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                  {maps.map((map, index) => (
                    <tr key={map.id} className="text-xs">
                      <th className="p-2 whitespace-nowrap">{index + 1}</th>
                      <td className="p-2 whitespace-nowrap  min-w-[60px]">
                        <div className="w-10 shrink-0 relative">
                          <img
                            className="w-full h-full"
                            src={map.company_logo || notImage}
                            alt=""
                          />
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {map.company_name || (
                              <span className="text-red-400">Boş zona</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {map.x1}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{map.x2}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{map.y1}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{map.y2}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(map.created_at)}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(map.updated_at)}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex align-center justify-center gap-2 text-xs">
                          <Link
                            className=" text-emerald-500"
                            to={`/admin/map/${map.id}`}
                          >
                            <FaEdit />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <NotResult title={`Mərtəbə ${text} boşdur :(`} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(FloorTable);
