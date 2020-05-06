import React from "react";
import PropTypes from "prop-types";
import BottomSheet from "./BottomSheet";
import PreviewHeader from "./PreviewHeader";
import PreviewContent from "./PreviewContent";
import Button from "../button/components/Button";

const PreviewContainer = ({
  children,
  bottomSheetRef,
  headerText,
  buttonText,
  isPreviewOpen,
  closePreview,
  onSubmit,
}) => {
  return (
    <BottomSheet
      bottomSheetRef={bottomSheetRef}
      points={[480, 0]}
      initialSnap={1}
      header={
        isPreviewOpen && (
          <PreviewHeader headerText={headerText} closePreview={closePreview} />
        )
      }
      onCloseEnd={closePreview}
    >
      <PreviewContent buttonText={buttonText} onSubmit={onSubmit}>
        {children}
      </PreviewContent>
    </BottomSheet>
  );
};

PreviewContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    Button,
  ]),
  bottomSheetRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  headerText: PropTypes.string,
  buttonText: PropTypes.string,
  isPreviewOpen: PropTypes.bool.isRequired,
  closePreview: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

PreviewContainer.defaultProps = {
  children: null,
  headerText: "preview",
  buttonText: "confirm",
  onSubmit: null,
};
export default PreviewContainer;
