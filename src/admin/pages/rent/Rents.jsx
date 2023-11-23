import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRent, getRents } from "../../../features/rent/rentSlice";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { DeleteModal, NotResult } from "../../components";
import { convertDateTime } from "../../../helper/date-fns";

import { Loader } from "../../../components";
import { Meta } from "../../../components/layout";

const Rents = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rent, setRent] = useState();

  const { rents } = useSelector((state) => state.rents);

  useEffect(() => {
    dispatch(getRents());
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [rents]);

  const handleDelete = ({ id }) => {
    dispatch(deleteRent(id));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Meta title="Icarə müraciətləri" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold md:text-2xl text-gray-600 dark:text-slate-100">
            Icarə müraciətləri
          </h2>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            {loading ? (
              <Loader />
            ) : rents?.length > 0 ? (
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold">#</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Ad</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Soyad</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nömrə</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">
                        Məhsul və ya xidmət
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Əlavə</div>
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
                  {rents.map((rent, index) => (
                    <tr key={rent.id} className="text-xs">
                      <th className="p-2 whitespace-nowrap">{index + 1}</th>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {rent.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {rent.surname}
                          </div>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          {rent.number}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          {rent.service}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">
                          {rent.note.length > 20
                            ? rent.note.substring(0, 20) + "..."
                            : rent.note}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(rent.created_at)}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap ">
                        <div className="flex align-center justify-center gap-2 text-base">
                          <Link
                            className=" text-emerald-500"
                            to={`/admin/rents/${rent.id}`}
                          >
                            <AiOutlineEye />
                          </Link>
                          <button
                            className="text-red-500 bg-transparent border-0"
                            onClick={() => {
                              setRent(rent);
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
              <NotResult title="Hal-hazırda müraciət mövcud deyil :(" />
            )}
          </div>
        </div>
      </div>
      {open && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleClose}
          data={rent}
          text="Icarə müraciətini"
        />
      )}
    </>
  );
};

export default memo(Rents);
