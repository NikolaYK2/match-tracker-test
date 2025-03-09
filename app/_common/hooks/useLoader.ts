"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";

export const useLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done(); // Завершаем при загрузке страницы
    return () => {
      NProgress.start(); // запускаем при изменении пути (начало загрузки)
    };
  }, [pathname]);
};
