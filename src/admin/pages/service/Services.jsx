import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiFillDelete } from "react-icons/ai";
import { DeleteModal, NotResult } from "../../components";
import { convertDateTime } from "../../../helper/date-fns";

import { Loader } from "../../../components";
import {
  RESET,
  deleteService,
  getServices,
} from "../../../features/service/serviceSlice";
import TruncatedHtml from "../../../components/TruncatedHtml";
import { FaEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

import notImage from "/images/noImage.png";
import { Meta } from "../../../components/layout";

const Services = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState();

  const { services, isSuccess } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServices());
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [services]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  const handleDelete = ({ id }) => {
    dispatch(deleteService(id));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Meta title="Servislər" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Servislər
          </h2>
          <Link
            to="/admin/service"
            className="text-white bg-emerald-500  shadow-lg shadow-gray-500/50  font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
          >
            <FaCirclePlus className="me-2 " /> Yeni
          </Link>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            {loading ? (
              <Loader />
            ) : services?.length > 0 ? (
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
                      <div className="font-semibold text-left">Mərtəbə</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Başlıq</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Kateqoriya</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Alt kateqoriya
                      </div>
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
                  {services.map((service, index) => (
                    <tr key={service.id} className="text-xs">
                      <th className="p-2 whitespace-nowrap">{index + 1}</th>
                      <td className="p-2 whitespace-nowrap  min-w-[60px]">
                        <div className="w-10 shrink-0 relative">
                          <img
                            className="w-full h-full"
                            src={service.logo || notImage}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap te">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100 ">
                            {service.floor}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {service.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {service?.category_name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {service?.subcategory_name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          <div className="text-left ">
                            <TruncatedHtml
                              html={service.description || ""}
                              maxLength={60}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(service.created_at)}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex align-center justify-center gap-2 text-sm">
                          <Link
                            className=" text-emerald-500"
                            to={`/admin/service/${service.id}`}
                          >
                            <FaEdit />
                          </Link>
                          <button
                            className="text-red-500 bg-transpaservice border-0"
                            onClick={() => {
                              setService(service);
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
              <NotResult title="Hal-hazırda servis mövcud deyil :(" />
            )}
          </div>
        </div>
      </div>
      {open && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleClose}
          data={service}
          text="Servisi"
        />
      )}
    </>
  );
};

export default memo(Services);
