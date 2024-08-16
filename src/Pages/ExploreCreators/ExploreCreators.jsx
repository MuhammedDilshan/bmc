import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useExploreCreators } from "./useExploreCreators";
import { useDashboardHeader } from "../../components/Dashboard/SubHeader/useDashboardHeader";
import SubHeader from "../../components/Dashboard/SubHeader/SubHeader";
import DataTable from "../../components/Dashboard/DataTable/DataTable";

const ExploreCreators = () => {
  const { isLoading, isPaginationLoading, creators, loadMore, lastElementRef } =
    useExploreCreators();

  const { handleDeleteCreator, handleEditCreator } = useDashboardHeader();

  const columns = ["Name", "Email", "Gender", "Available for chat", "Action"];

  return (
    <>
      <Header admin />
      <div className="wrapper">
        <SubHeader />
        <DataTable
          isLoading={isLoading}
          columns={columns}
          data={creators}
          loadMore={loadMore}
          isPaginationLoading={isPaginationLoading}
          lastElementRef={lastElementRef}
          handleDeleteCreator={handleDeleteCreator}
          handleEditCreator={handleEditCreator}
        />
      </div>
    </>
  );
};

export default ExploreCreators;
