import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addCreators,
  deleteCreators,
  editMode,
  handleModal,
  saveCurrentData,
} from "../../../store/slices/creatorsSlice";

export const useDashboardHeader = () => {
  const api = process.env.REACT_APP_DASHBOARD_CREATORS_API;

  const dispatch = useDispatch();
  const { status, showEditModal, currentCreator, isEdit } = useSelector(
    (state) => state.creators
  );
  const [showStats, setShowStats] = useState(false);
  const handleStatsModal = () => setShowStats(!showStats);

  const handleEditModal = () => {
    dispatch(handleModal());
    formik?.resetForm();
    dispatch(saveCurrentData());
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    status: Yup.string()
      .oneOf(["active", "inactive"], "Invalid status")
      .required("Status is required"),
  });
  const initialValues = {
    name: isEdit ? currentCreator?.name : "",
    email: isEdit ? currentCreator?.email : "",
    gender: isEdit ? currentCreator?.gender : "male",
    status: isEdit ? currentCreator?.status : "active",
  };
  const formik = useFormik({
    validationSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    initialValues,
    onSubmit: async (values, { setErrors, setFieldValue, resetForm }) => {
      let data = {
        values,
        api,
        page: 1,
        per_page: 10,
        token:
          "e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb",
      };

      const resultAction = await dispatch(addCreators(data));

      if (addCreators.fulfilled.match(resultAction)) {
        toast.success("Creators added successfully!");
        resetForm();
        handleEditModal();
      } else if (addCreators.rejected.match(resultAction)) {
        if (resultAction.payload === "Failed to fetch creators") {
          toast.error("This email is already taken!");
        } else {
          toast.error(resultAction.payload || "Something went wrong!");
        }
      } else {
        toast.error("Something went wrong!");
      }
    },
  });
  const handleSaveEditCreator = async () => {
    let data = {
      values: formik?.values,
      api,
      page: 1,
      per_page: 10,
      token: "e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb",
    };

    const resultAction = await dispatch(addCreators(data));

    if (addCreators.fulfilled.match(resultAction)) {
      toast.success("Creators added successfully!");
      formik?.resetForm();
      handleEditModal();
    } else if (addCreators.rejected.match(resultAction)) {
      if (resultAction.payload === "Failed to fetch creators") {
        toast.error("This email is already taken!");
      } else {
        toast.error(resultAction.payload || "Something went wrong!");
      }
    } else {
      toast.error("Something went wrong!");
    }
  };
  const handleDeleteCreator = (id) => {
    let data = {
      api,
      id,
      page: 1,
      per_page: 10,
      token: "e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb",
    };
    dispatch(deleteCreators(data));
  };

  const handleEditCreator = (data) => {
    handleEditModal();
    dispatch(saveCurrentData(data));
    dispatch(editMode(true));
  };

  return {
    isEdit,
    formik,
    status,
    showStats,
    showEditModal,
    currentCreator,
    handleEditModal,
    handleStatsModal,
    handleEditCreator,
    handleDeleteCreator,
    handleSaveEditCreator,
  };
};
