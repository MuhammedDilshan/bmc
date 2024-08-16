import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import "./modal.scss";

const CommonModal = ({
  show,
  handleClose,
  selectedOption,
  handleChange,
  options,
  body,
  heading,
  isSelect,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header>
        <div className="header-left">
          <Modal.Title>{heading}</Modal.Title>
          {isSelect && (
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              defaultValue={options[0]}
            />
          )}
        </div>
        <Button
          variant="link"
          className="custom-close-button"
          onClick={handleClose}
        >
          <IoMdClose />
        </Button>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default CommonModal;
