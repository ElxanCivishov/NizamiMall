import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { MdAddCircle } from "react-icons/md";
import moment from "moment";
import {
  createAMotoModel,
  deleteAMotoModel,
  getMotoModels,
  updateAMotoModel,
} from "../../features/motoModel/motoModelSlice";
import { DeleteModal } from "../../components";
import ModelModal from "./ModelModal";

const Models = () => {
  const dispatch = useDispatch();
  const {
    motoModels,
    isLoading,
    createdMotoModel,
    updatedMotoModel,
    deletedMotoModel,
  } = useSelector((state) => state.motoModels);

  const [openGeneralModal, setOpenGeneralModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [model, setModel] = useState();

  useEffect(() => {
    dispatch(getMotoModels());
  }, [createdMotoModel, updatedMotoModel, deletedMotoModel, dispatch]);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setModel("");
  };

  const handleCloseAddModal = () => {
    setOpenGeneralModal(false);
    setModel("");
  };

  const handleDelete = ({ id }) => {
    dispatch(deleteAMotoModel(id));
    handleCloseDeleteModal();
  };

  const handleUpdate = (data) => {
    dispatch(updateAMotoModel(data));
    handleCloseAddModal();
  };

  const handleCreate = (data) => {
    dispatch(createAMotoModel(data));
    setOpenGeneralModal(false);
  };

  return (
    <>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Model list
          </h2>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
            onClick={() => setOpenGeneralModal(true)}
          >
            <MdAddCircle className="me-2 text-xl" /> Add Model
          </button>
        </header>
        {isLoading ? (
          <span className="w-full  m-5 flex">Loading...</span>
        ) : (
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">#</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Model</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Brand</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Created</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Updated</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                  {motoModels &&
                    motoModels.map((model, i) => {
                      return (
                        <tr key={model._id}>
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
                                {model.title}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-semibold text-slate-800 dark:text-slate-100">
                                {model.brand?.title}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text text-center">
                              {model.createdAt &&
                                moment(model.createdAt.toString()).format(
                                  "lll"
                                )}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text text-center">
                              {model.createdAt &&
                                moment(model.updatedAt.toString()).format(
                                  "lll"
                                )}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center justify-center gap-3 text-[18px]">
                              <button
                                className="text-yellow-500 bg-transparent border-0"
                                onClick={() => {
                                  setModel(model);
                                  setOpenGeneralModal(true);
                                }}
                              >
                                <BiEdit />
                              </button>
                              <button
                                className="text-red-500 bg-transparent border-0"
                                onClick={() => {
                                  setOpenDeleteModal(true);
                                  setModel(model);
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
        )}
      </div>
      {openGeneralModal && (
        <ModelModal
          data={model}
          title="model"
          handleClose={handleCloseAddModal}
          handleUpdate={handleUpdate}
          handleCreate={handleCreate}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          handleClose={handleCloseDeleteModal}
          data={model}
          text="blog"
        />
      )}
    </>
  );
};

export default Models;
