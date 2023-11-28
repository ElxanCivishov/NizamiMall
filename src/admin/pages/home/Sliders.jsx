import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiFillDelete } from "react-icons/ai";
import { DeleteModal, NotResult } from "../../components";
import { convertDateTime } from "../../../helper/date-fns";

import { Loader } from "../../../components";

import TruncatedHtml from "../../../components/TruncatedHtml";
import { FaEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import {
  RESET,
  deleteSlider,
  getSliders,
} from "../../../features/home/slider/sliderSlice";
import { Meta } from "../../../components/layout";

const Sliders = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [slider, setSlider] = useState();

  const { sliders, isSuccess } = useSelector((state) => state.homeSlider);

  useEffect(() => {
    dispatch(getSliders());
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [sliders]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  const handleDelete = ({ id }) => {
    dispatch(deleteSlider(id));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Meta title="Sliders" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Sliders
          </h2>
          <Link
            to="/admin/home/slider"
            className="text-white bg-emerald-500  shadow-lg shadow-gray-500/50  font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
          >
            <FaCirclePlus className="me-2 " /> Yeni
          </Link>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            {loading ? (
              <Loader />
            ) : sliders?.length > 0 ? (
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold">#</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Şəkil</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Content</div>
                    </th>

                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Vaxt</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Əməliyyat</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                  {sliders.map((slider, index) => (
                    <tr key={slider.id} className="text-xs">
                      <th className="p-2 whitespace-nowrap">{index + 1}</th>

                      <td className="p-2 whitespace-nowrap  min-w-[60px]">
                        <div className="w-10 shrink-0 relative">
                          <img
                            className="w-full h-full"
                            src={slider.image}
                            alt=""
                          />
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          <div className="text-left ">{slider.title}</div>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(slider.created_at)}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex align-center justify-center gap-2 text-base">
                          <Link
                            className=" text-emerald-500"
                            to={`/admin/home/slider/${slider.id}`}
                          >
                            <FaEdit />
                          </Link>
                          <button
                            className="text-red-500 bg-transpaslider border-0"
                            onClick={() => {
                              setSlider(slider);
                              setOpen(true);
                            }}
                          >
                            <AiFillDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <NotResult title="Slider mövcud deyil :(" />
            )}
          </div>
        </div>
      </div>
      {open && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleClose}
          data={slider}
          text="Slaydı"
        />
      )}
    </>
  );
};

export default memo(Sliders);
