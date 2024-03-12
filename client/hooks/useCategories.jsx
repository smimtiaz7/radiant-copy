"use client";
import { fetchCatagories } from "@/utils/fetchProducts";
import { useQuery, keepPreviousData } from "react-query";

const useCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchCatagories,
    queryKey: ["Catagories"],
    placeholderData: keepPreviousData,
  });
  const realItems = data?.categories?.data.map((item) => {
    const { id, attributes } = item;
    const { categoryImage, categoryName } = attributes;
    const { url } = categoryImage?.data?.attributes;

    return { id, categoryName, url };
  });

  console.log(data);

  return {
    catagoriesData: realItems,
    catagoriesLoading: isLoading,
    catagoriesError: error,
  };
};

export default useCategories;
