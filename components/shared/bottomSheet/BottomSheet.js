import React from "react";
import RBottomSheet from "reanimated-bottom-sheet";

const BottomSheet = ({
  bottomSheetRef,
  children,
  header,
  points,
  initialSnap,
  onCloseEnd,
  enabledGestureInteraction,
}) => {
  return (
    <RBottomSheet
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

export default BottomSheet;
