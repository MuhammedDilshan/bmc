import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import {
  fetchCreators,
  loadMoreCreators,
} from "../../store/slices/creatorsSlice";

export const useExploreCreators = () => {
  const api = process.env.REACT_APP_DASHBOARD_CREATORS_API;
  const dispatch = useDispatch();

  const [loadMoreParams, setLoadMoreParams] = useState({
    page: 1,
    per_page: 10,
  });
  const lastElementRef = useRef(null);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "male",
    label: "Male",
  });

  const {
    isLoading,
    creators,
    isPaginationLoading,
    maleCount,
    femaleCount,
    avtiveMales,
    activeFemales,
  } = useSelector((state) => state.creators);
  const genderData = {
    label: "Gender Distribution",
    firstData: maleCount,
    secondData: femaleCount,
    firstPercentage: ((maleCount / creators?.length) * 100).toFixed(2),
    secondPercentage: ((femaleCount / creators?.length) * 100).toFixed(2),
  };

  const chatAvailability = {
    label: "Availability for Chat",
    firstData: avtiveMales,
    secondData: activeFemales,
    firstPercentage: ((avtiveMales / creators?.length) * 100).toFixed(2),
    secondPercentage: ((activeFemales / creators?.length) * 100).toFixed(2),
  };

  useEffect(() => {
    if (isLoadMore && lastElementRef.current) {
      lastElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [creators, isLoadMore]);

  useEffect(() => {
    if (creators?.length === 0) {
      dispatch(fetchCreators(api));
    }
  }, []);

  const loadMore = async (e) => {
    setIsLoadMore(true);
    const nextPage = loadMoreParams.page + 1;
    let obj = {
      api,
      page: nextPage,
      per_page: loadMoreParams?.per_page,
    };
    dispatch(loadMoreCreators(obj));
    setLoadMoreParams((prev) => ({
      ...prev,
      page: nextPage,
    }));
  };

  const options = [
    { value: "male", label: "Male" },
    { value: "availability for Chat", label: "Availability for Chat" },
  ];
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return {
    isLoading,
    isPaginationLoading,
    creators,
    loadMore,
    lastElementRef,
    options,
    handleChange,
    selectedOption,
    maleCount,
    femaleCount,
    fetchCreators,
    genderData,
    chatAvailability,
  };
};
