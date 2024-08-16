import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./Spotlight.scss"; // Updated import for Sass
import PhoneScreen from "../PhoneScreen/PhoneScreen";
import Banner from "../Banner/Banner";

const Spotlight = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: async (values, { setErrors, setFieldValue }) => {
      if (values?.phone?.length === 0) {
        toast.error("Please enter a mobile number");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const validation = /^[6-9]\d{9}$/;

      if (validation.test(values?.phone)) {
        toast.success("We will contact you soon!");
        setFieldValue("phone", "");
      } else {
        toast.error("Invalid mobile number");
      }
    },
  });

  return (
    <>
      <Header />
      <main className="home">
        <div className="wrapper">
          <h4 className="title">
            Stay close to your <br /> <span>favorite people.</span>
          </h4>

          <div className="inputBox">
            <form onSubmit={formik.handleSubmit}>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                aria-label="Phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                minLength={10}
                maxLength={10}
              />
              <button type="submit">
                {formik.isSubmitting ? <Loader /> : "Get started"}
              </button>
            </form>
          </div>
        </div>

        <PhoneScreen />
      </main>
      <Banner />
    </>
  );
};

export default Spotlight;
