import React, { useState, useEffect } from "react";
import HeaderBar from "../components/header/headerBar";
import { home as homeService } from "../apis";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const DashboardPage = () => {
  const { getMe } = AuthContext();
  const [home, setHome] = useState({});
  const [totalCar, setTotalCar] = useState(0);
  const [me, setMe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    initState();
    getHome();
  }, []);

  const initState = async () => {
    var res = await getMe();
    setMe(res);
  };

  const getHome = async () => {
    try {
      var res = await homeService.user({});
      setHome(
        res.rows.reduce((acc, iter) => {
          return {
            ...acc,
            [iter.code]: iter.count,
          };
        }, {})
      );
      setTotalCar(res.count);
    } catch (err) {}
  };

  return (
    <section className="items-top flex min-h-screen justify-center bg-gray-200">
      <div className="container mx-auto my-4 max-w-screen-lg rounded-lg">
        <HeaderBar />
        <div className="mt-8 grid grid-flow-row-dense grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-4 gap-6">
              <div
                onClick={() =>
                  navigate(`/cargo/crud?id=&action=createCargo&type=PARCEL`)
                }
                className="group cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-primary-700"
              >
                <img
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/APP/upload/63a12bd3-5560-4ecc-bab0-450521733b43/63a12bd3-5560-4ecc-bab0-450521733b43.png"
                  alt="parcel"
                  className="mx-auto mb-4 h-20"
                />
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  Гараас гарт
                </p>
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  илгээмж хүргэлт
                </p>
              </div>
              <div
                onClick={() =>
                  navigate(`/cargo/crud?id=&action=createCargo&type=CITY`)
                }
                className=" group cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-primary-700"
              >
                <img
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/APP/upload/89a77d46-4666-4f61-a8e3-ae94564ab07f/89a77d46-4666-4f61-a8e3-ae94564ab07f.png"
                  alt="parcel"
                  className="mx-auto mb-4 h-20"
                />
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  Хот дотор
                </p>
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  ачаа тээвэр
                </p>
              </div>
              <div
                onClick={() =>
                  navigate(`/cargo/crud?id=&action=createCargo&type=PROVINCE`)
                }
                className="group cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-primary-700"
              >
                <img
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/APP/upload/ab53c1f9-5ee0-488b-ba0b-fb10df152236/ab53c1f9-5ee0-488b-ba0b-fb10df152236.png"
                  alt="parcel"
                  className="mx-auto mb-4 h-20"
                />
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  Хот хоорондын
                </p>
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  ачаа тээвэр
                </p>
              </div>
              <div
                onClick={() => navigate(`/cargo_int/?&action=step1`)}
                className="group cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-primary-700"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2272/2272247.png"
                  alt="parcel"
                  className="mx-auto mb-4 h-20"
                />
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  Олон улсын
                </p>
                <p className="text-center text-secondary-700 group-hover:text-primary-700">
                  ачаа тээвэр
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/cargo/crud?id=&action=createCargo`)}
              className="mt-5 w-full rounded-lg  border-2 bg-third-700 py-3 text-secondary-700 duration-300 hover:scale-105"
            >
              Ачааны зар оруулах
            </button>
            <div className="mt-6 rounded-lg bg-white px-4 py-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="h-auto max-w-full object-cover"
                  alt="banner1"
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/BANNER/banner2.png"
                />
                <img
                  className="h-auto max-w-full object-cover"
                  alt="banner1"
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/BANNER/banner3.png"
                />
                <img
                  className="h-auto max-w-full object-cover"
                  alt="banner1"
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/BANNER/banner4.png"
                />
                <img
                  className="h-auto max-w-full object-cover"
                  alt="banner1"
                  src="https://sin1.contabostorage.com/64f26aa826d446448cf810e91d8e5953:papa/BANNER/banner5.png"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div
              className="mb-6 flex cursor-pointer flex-row items-center justify-between rounded-lg bg-white px-4 py-4 shadow-sm hover:shadow-md"
              onClick={() => navigate("/cargo")}
            >
              <p className=" font-semibold text-primary-700">Миний ачаа</p>
              <span className="ml-2 inline-flex items-center justify-center rounded-lg bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800">
                {me.count_cargo || 0}
              </span>
            </div>
            <div className="rounded-lg bg-white px-6 py-6">
              <p className="mb-6 text-lg font-semibold text-secondary-700">
                Тээвэр хийх боломжтой
              </p>
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
                        <span className="text-md font-semibold text-white">
                          С
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-700 dark:text-white">
                        Суудлын автомашин
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm font-semibold text-secondary-700 dark:text-white">
                      {home["PASSANGER_CAR"] || 0}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-400">
                        <span className="text-md font-semibold text-white">
                          З
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium  text-gray-700 dark:text-white">
                        Задгай тэвштэй
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm font-semibold  text-secondary-700 dark:text-white">
                      {home["OPEN_BODY_TRUCK"] || 0}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400">
                        <span className="text-md font-semibold text-white">
                          Б
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium  text-gray-700 dark:text-white">
                        Бүхээгтэй
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm font-semibold text-secondary-700 dark:text-white">
                      {home["CAB_TRUCK"] || 0}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-400">
                        <span className="text-md font-semibold text-white">
                          Х
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium  text-gray-700 dark:text-white">
                        Хөргүүртэй
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm font-semibold text-secondary-700 dark:text-white">
                      {home["REFRIGERATED_TRUCK"] || 0}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-400">
                      <span className="text-md font-semibold text-white">
                        Ө
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium  text-gray-700 dark:text-white">
                        Өөрөө өргөгчтэй кран
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm font-semibold text-secondary-700 dark:text-white">
                      {home["LIFTING_TRUCK"] || 0}
                    </div>
                  </div>
                </li>
                <li className="pb-0 pt-3 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-400">
                      <span className="text-md font-semibold text-white">
                        Т
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium  text-gray-700 dark:text-white">
                        Тэвшээ өргөгчтэй
                      </p>
                    </div>
                    <div className="inline-flex items-center text-sm font-semibold text-secondary-700 dark:text-white">
                      {home["TIPPER_TRUCK"] || 0}
                    </div>
                  </div>
                </li>
              </ul>
              <p className=" mt-8 text-center text-sm  italic text-gray-500">
                Нийт тээвэр хийх боломжтой{" "}
                <span className="font-semibold text-primary-700">
                  {totalCar}
                </span>{" "}
                автомашин таны ачааг хүссэн газарт хүргэж үйлчлэхэд бэлэн байна.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
