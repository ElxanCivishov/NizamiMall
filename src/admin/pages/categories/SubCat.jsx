import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { MdAddCircle } from "react-icons/md";
import GeneralModal from "./GeneralModal";
import { DeleteModal } from "../../components";
import {
  RESET,
  createSubCat,
  deleteSubCat,
  getSubCats,
  updateASubCat,
} from "../../../features/subCategory/subCategorySlice";
import { convertDateTime } from "../../../helper/date-fns";
import { Meta } from "../../../components/layout";

const SubCat = () => {
  const dispatch = useDispatch();
  const { subcats, isSuccess } = useSelector((state) => state.subCats);

  const [openGeneralModal, setOpenGeneralModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [subCat, setSubCat] = useState();

  useEffect(() => {
    dispatch(getSubCats());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSubCat("");
  };

  const handleCloseAddModal = () => {
    setOpenGeneralModal(false);
    setSubCat("");
  };

  const handleDelete = ({ id }) => {
    dispatch(deleteSubCat(id));
    handleCloseDeleteModal();
  };

  const handleUpdate = (data) => {
    dispatch(updateASubCat(data));
    handleCloseAddModal();
  };

  const handleCreate = (data) => {
    dispatch(createSubCat(data));
    setOpenGeneralModal(false);
  };

  return (
    <>
      <Meta title="Alt kateqoriyalar" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Alt kateqoriyalar
          </h2>
          <button
            type="button"
            className="text-white bg-emerald-500  shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
            onClick={() => setOpenGeneralModal(true)}
          >
            <MdAddCircle className="me-2 text-xl" /> Yeni
          </button>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">#</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Kateqoriya</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Y.Tarixi</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">D.Tarixi</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center"></div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                {subcats?.map((subcat, i) => {
                  return (
                    <tr key={subcat.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-semibold text-slate-800 dark:text-slate-100">
                            {i + 1}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-semibold text-slate-800 dark:text-slate-100">
                            {subcat.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(subcat.created_at)}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text text-center">
                          {convertDateTime(subcat.updated_at)}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-3 text-[18px]">
                          <button
                            className="text-emerald-500 bg-transparent border-0"
                            onClick={() => {
                              setSubCat(subcat);
                              setOpenGeneralModal(true);
                            }}
                          >
                            <BiEdit />
                          </button>
                          <button
                            className="text-red-500 bg-transparent border-0"
                            onClick={() => {
                              setOpenDeleteModal(true);
                              setSubCat(subcat);
                            }}
                          >
                            <AiFillDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openGeneralModal && (
        <GeneralModal
          data={subCat}
          title="Alt kateqoriya"
          handleClose={handleCloseAddModal}
          handleUpdate={handleUpdate}
          handleCreate={handleCreate}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleCloseDeleteModal}
          data={subCat}
          text="Alt kateqoriyanı"
        />
      )}
    </>
  );
};

export default SubCat;
