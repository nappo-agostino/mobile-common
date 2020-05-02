import React from "react";
// import React, { useEffect, useState, useRef } from "react";
// import { View, Platform } from "react-native";
// import { animated, useSpring } from "react-spring/native";
// import styled, { css } from "styled-components/native";

// const Container = styled(animated(View))`
//   overflow: hidden;
//   top: -20px;
// `;

// const Content = styled.View`
//   ${({ expanded }) => {
//     if (!expanded) {
//       return css`
//         top: -20px;
//       `;
//     }
//   }}
//   border-bottom-left-radius: 25px;
//   border-bottom-right-radius: 25px;
//   padding-top: 30px;
//   padding-bottom: ${Platform.OS === "android" ? "10px" : "20px"};
//   padding-horizontal: 15px;
//   border-left-width: 1px;
//   border-right-width: 1px;
//   border-top-width: 0px;
//   border-bottom-width: 1px;
//   border-color: ${({ theme: { colors } }) => colors.borderColor};
// `;

const ExpandableCard = ({ children, renderHeader, expanded }) => {
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (contentRef && contentRef.current) {
  //     contentRef.current.measure((x, y, width, height) => {
  //       setHeight(height);
  //     });
  //   }
  // }, [contentRef]);

  // const animation = useSpring({ height: expanded ? height : 0 });

  // const contentRef = useRef(null);

  return (
    <>
      {renderHeader()}
      {expanded && children}
      {/* <Container style={{ ...animation }}>
        <Content
          ref={contentRef}
          expanded={expanded}
          // onLayout={layout => {
          //   const h = layout.nativeEvent.layout.height;
          //   setHeight(h);
          // }}
        >
          {children}
        </Content>
      </Container> */}
      {/* <Container style={{ ...animation }}>
        <Content
          expanded={expanded}
          onLayout={layout => console.log(layout.nativeEvent.layout.height)}
        >
          {children}
        </Content>
      </Container> */}

      {/* <Container style={animation}>{children}</Container> */}
    </>
  );
};

export default ExpandableCard;
