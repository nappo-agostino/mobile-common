import React from "react";
import BottomSheet from "reanimated-bottom-sheet";

const CustomBottomSheet = ({
  bottomSheetRef,
  children,
  header,
  points,
  initialSnap,
  onCloseEnd,
  enabledGestureInteraction
}) => {
  return (
    <BottomSheet
      enabledGestureInteraction={enabledGestureInteraction}
      enabledContentTapInteraction={false}
      ref={bottomSheetRef}
      initialSnap={initialSnap}
      snapPoints={points || [500, 100]}
      renderContent={() => children}
      renderHeader={() => header}
      onCloseEnd={onCloseEnd}
    />
  );
};

export default CustomBottomSheet;
