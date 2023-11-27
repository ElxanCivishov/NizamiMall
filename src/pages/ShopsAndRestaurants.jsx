import { useEffect, useState } from "react";
import { ServiceCard } from "../components/cards";
import { Meta } from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { RESET, getServices } from "../features/service/serviceSlice";
import { Loader, ProgressBarLoader, SearchBar } from "../components";
import { NotResult } from "../admin/components";

import { useSearchParams } from "react-router-dom";
import {
  getMainCats,
  RESET as CATSRESET,
} from "../features/mainCategory/mainCategorySlice";

const ShopsAndRestaurants = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const { maincats, isSuccess: catsSuccess } = useSelector(
    (state) => state.mainCats
  );

  const { services, isSuccess, isLoading } = useSelector(
    (state) => state.services
  );

  const parseAndValidateCategory = (category) => {
    const parsedCategory = parseInt(category);
    return maincats.some((item) => item.id === parsedCategory)
      ? parsedCategory
      : 0;
  };

  const [categoryNumber, setCategoryNumber] = useState(
    parseAndValidateCategory(search.get("category"))
  );

  useEffect(() => {
    dispatch(getServices(search));
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(getMainCats());
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [services]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(RESET());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (catsSuccess) {
      dispatch(CATSRESET());
    }
  }, [catsSuccess]);

  useEffect(() => {
    const newCategory = parseAndValidateCategory(search.get("category"));

    if (newCategory !== categoryNumber) {
      setCategoryNumber(newCategory);
    }

    if (newCategory !== parseInt(search.get("category"))) {
      search.delete("category");
      setSearch(search, {
        replace: true,
      });
    }
  }, [search.get("category"), categoryNumber]);

  const handleChangeCategory = (num) => {
    search.set("category", num);
    setSearch(search, {
      replace: true,
    });
  };

  console.log(maincats);

  return (
    <main className="flex flex-col gap-14 pb-10">
      <Meta title="Mağaza və Restoranlar" />
      {isLoading && <ProgressBarLoader isLoading={isLoading} />}
      <section class="container px-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
          <h1 class="mb-4 text-2xl  font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl dark:text-white">
            Mağazalar və Restoranlar
          </h1>
          <p class="md:mb-8 text-sm font-normal text-gray-600 md:text-base  lg:text-xl sm:px-10 lg:px-40 dark:text-gray-200">
            3 mərtəbədən ibarət olan Nizami Mall 100-dən çox mağazaya ev
            sahibliyi edir. Hazırda mall-da təhsil, turizm, gözəllik sahəsində
            xidmət göstərilir. Mall-da yerləşən restorantları ziyarət edərək,
            ləziz təamlardan dada biilərsiniz.
          </p>
        </div>

        <div className="my-5 flex flex-col  sm:flex-row items-center justify-between  gap-2">
          <ul className="flex flex-wrap md:justify-start gap-2 w-full md:w-auto font-medium text-center text-gray-500 select-none">
            <li
              className=" mb-2 cursor-pointer"
              onClick={() => {
                search.delete("category");
                setSearch(search, {
                  replace: true,
                });
              }}
            >
              <p
                className={`${
                  !search.get("category")
                    ? "text-colorPrimary border-colorPrimary"
                    : " text-gray-500 border-transparent"
                } inline-flex items-center justify-center  border-b-2  rounded-t-lg hover:text-colorPrimary hover:border-colorPrimary group gap-1 md:gap-2  text-sm md:text-base transition-all duration-200`}
              >
                <span>Hamısı</span>
              </p>
            </li>
            {maincats?.map((cat, index) => (
              <li
                className=" mb-2 cursor-pointer"
                key={index}
                onClick={() => {
                  handleChangeCategory(cat.id);
                }}
              >
                <p
                  className={`${
                    Number(search.get("category")) === cat.id
                      ? "text-colorPrimary border-colorPrimary"
                      : " text-gray-500 border-transparent"
                  } inline-flex items-center justify-center  border-b-2  rounded-t-lg hover:text-colorPrimary hover:border-colorPrimary group gap-1 md:gap-2  text-sm md:text-base transition-all duration-200`}
                >
                  <span>{cat.name}</span>
                </p>
              </li>
            ))}
          </ul>
          <SearchBar />
        </div>

        <div className="p-4 bg-white ">
          {loading ? (
            <Loader />
          ) : services?.length === 0 ? (
            <NotResult title="Mağaza və ya Restoran tapılmadı" />
          ) : (
            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 my-3 transition-all duration-400">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ShopsAndRestaurants;
