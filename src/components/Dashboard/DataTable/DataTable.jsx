import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import Loader from "../../Loader/Loader";
import "./DataTable.scss";

const DataTable = ({
  isLoading,
  isPaginationLoading,
  columns,
  data,
  loadMore,
  lastElementRef,
  handleDeleteCreator,
  handleEditCreator,
}) => {
  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className={`th ${
                  columns?.length === index + 1 ? "th_action" : ""
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array(5)
                .fill(null)
                .map((_, index) => (
                  <tr key={index}>
                    <td className="td">
                      <div className="shimmer" />
                    </td>
                    <td className="td">
                      <div className="shimmer" />
                    </td>
                    <td className="td">
                      <div className="shimmer" />
                    </td>
                    <td className="td">
                      <div className="shimmer" />
                    </td>
                    <td className="td">
                      <div className="shimmer" />
                    </td>
                  </tr>
                ))
            : data?.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="trHover"
                  ref={rowIndex === data.length - 1 ? lastElementRef : null}
                >
                  <td className="td">{row?.name}</td>
                  <td className="td">{row?.email}</td>
                  <td className="td" style={{ textTransform: "capitalize" }}>
                    {row?.gender}
                  </td>
                  <td
                    className="td"
                    style={{
                      textTransform: "capitalize",
                      color: row?.status === "active" ? "green" : "red",
                      fontWeight: "600",
                    }}
                  >
                    {row?.status}
                  </td>
                  <td className="td">
                    <div className="button_group">
                      <button
                        className="edit"
                        onClick={() => handleEditCreator(row)}
                      >
                        Edit
                      </button>
                      <button
                        className="trash"
                        onClick={() => handleDeleteCreator(row?.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      {!isLoading && (
        <div className="bottom">
          <button
            className="loadMore"
            onClick={(e) => loadMore(e)}
            disabled={isPaginationLoading}
          >
            {isPaginationLoading ? (
              <Loader />
            ) : (
              <>
                Load More <FaAngleDown />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
