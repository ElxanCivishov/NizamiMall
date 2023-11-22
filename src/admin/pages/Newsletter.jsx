import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNewsletter,
  getNewsletters,
} from "../../features/newsletter/newsletterSlice";
import { AiFillDelete } from "react-icons/ai";
import { DeleteModal, NotResult } from "../components";
import { convertDateTime } from "../../helper/date-fns";

import { Loader } from "../../components";

const Newsletter = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newsletter, setNewsletter] = useState();

  const { newsletters } = useSelector((state) => state.newsletters);

  useEffect(() => {
    dispatch(getNewsletters());
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [newsletters]);

  const handleDelete = ({ id }) => {
    dispatch(deleteNewsletter(id));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold md:text-2xl text-gray-600 dark:text-slate-100">
            Abone olanlar
          </h2>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            {loading ? (
              <Loader />
            ) : newsletters?.length > 0 ? (
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold">#</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
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
                  {newsletters.map((newsletter, index) => (
                    <tr key={newsletter.id}>
                      <th className="p-2 whitespace-nowrap">{index + 1}</th>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">
                            {newsletter.email}
                          </div>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(newsletter.created_at)}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap text-center">
                        <button
                          className="text-red-500 bg-transpanewsletter border-0"
                          onClick={() => {
                            setNewsletter(newsletter);
                            setOpen(true);
                          }}
                        >
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <NotResult title="Hal-hazırda subscribe mövcud deyil :(" />
            )}
          </div>
        </div>
      </div>
      {open && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleClose}
          data={newsletter}
          text="Subscribı"
        />
      )}
    </>
  );
};

export default memo(Newsletter);
