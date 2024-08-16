import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { useExploreCreators } from "../../../Pages/ExploreCreators/useExploreCreators";
import CommonModal from "../../Modal/Modal";
import { useDashboardHeader } from "./useDashboardHeader";
import Loader from "../../Loader/Loader";
import Chart from "../../Chart/Chart";
import "./SubHeader.scss";

const SubHeader = () => {
  const {
    status,
    isEdit,
    formik,
    showStats,
    showEditModal,
    handleStatsModal,
    handleEditModal,
    handleSaveEditCreator,
  } = useDashboardHeader();

  const {
    options,
    genderData,
    handleChange,
    selectedOption,
    chatAvailability,
  } = useExploreCreators();
  return (
    <div className="subHead">
      <h4>Manage creators</h4>
      <div className="buttonGroup">
        <button className="status_btn" onClick={handleStatsModal}>
          <MdOutlineInsertChartOutlined />
          View Stats
        </button>
        <button className="add_btn" onClick={handleEditModal}>
          <GoPlus />
          Add a new creator
        </button>
      </div>
      <CommonModal
        heading={"Stats"}
        isSelect
        show={showStats}
        handleClose={handleStatsModal}
        handleShow={handleStatsModal}
        handleChange={handleChange}
        options={options}
        body={
          <>
            {selectedOption?.value === "male" ? (
              <Chart
                data={genderData}
                color={["#9bdfc4", "#62b2fd"]}
                heading="Gender Distribution"
              />
            ) : (
              <Chart
                data={chatAvailability}
                color={["#9bdfc4", "#98cb82"]}
                heading="Gender Distribution"
              />
            )}
          </>
        }
      />
      <CommonModal
        heading={"Add a new creator"}
        handleClose={handleEditModal}
        handleShow={handleEditModal}
        show={showEditModal}
        body={
          <>
            <div className="form_item">
              <label htmlFor="name">Creator Name</label>
              <div
                className={`right ${
                  formik?.errors?.name &&
                  formik?.touched?.name &&
                  "form_item_error"
                }`}
              >
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  value={formik?.values?.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik?.errors?.name && formik?.touched?.name && (
                  <span className="error">{formik?.errors?.name}</span>
                )}
              </div>
            </div>
            <div className="form_item">
              <label htmlFor="email">Email</label>
              <div
                className={`right ${
                  formik?.errors?.email &&
                  formik?.touched?.email &&
                  "form_item_error"
                }`}
              >
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={formik?.values?.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik?.errors?.email && formik?.touched?.email && (
                  <span className="error">{formik?.errors?.email}</span>
                )}
              </div>
            </div>
            <div className="form_item">
              <label htmlFor="gender" name="gender" id="gender">
                Gender
              </label>
              <div className="right">
                <select
                  name="gender"
                  id="gender"
                  value={formik?.values?.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${
                    formik?.errors?.gender &&
                    formik?.touched?.gender &&
                    "form_item_error"
                  }`}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {formik?.errors?.gender && formik?.touched?.gender && (
                  <span className="error">{formik?.errors?.gender}</span>
                )}
              </div>
            </div>
            <div className="form_item">
              <span htmlFor="chat" name="chat" id="chat">
                Available for chat
              </span>
              <div className="right">
                <div className="radio">
                  <div className="radio_item">
                    <input
                      type="radio"
                      name="status"
                      id="active"
                      value="active"
                      className="custom_radio"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik?.values?.status === "active"}
                    />
                    <label htmlFor="active" className="custom_label">
                      Active
                    </label>
                  </div>
                  <div className="radio_item">
                    <input
                      type="radio"
                      name="status"
                      id="inactive"
                      value="inactive"
                      className="custom_radio"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik?.values?.status === "inactive"}
                    />
                    <label htmlFor="inactive" className="custom_label">
                      Inactive
                    </label>
                  </div>
                  {formik?.errors?.status && formik?.touched?.status && (
                    <span className="error">{formik?.errors?.status}</span>
                  )}
                </div>
              </div>
            </div>
            <button
              disabled={status === "loading"}
              className="add_btn"
              onClick={() => {
                if (isEdit) {
                  handleSaveEditCreator();
                } else {
                  formik?.handleSubmit();
                }
              }}
            >
              {status === "loading" ? (
                <Loader />
              ) : (
                <>
                  <AiOutlinePlus />
                  {isEdit ? "Edit Creator" : "Add creator"}
                </>
              )}
            </button>
          </>
        }
      />
    </div>
  );
};

export default SubHeader;
