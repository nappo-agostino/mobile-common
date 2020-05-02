/* eslint-disable react/jsx-fragments */
import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import typy from "typy";
import StyledText from "../StyledText";
import theme from "../../../styles/theme";
import icons from "../../../assets/images/reservations";

import { getRoomStatusColor } from "../../../utils/functions";
import { RESERVATION_GROUP_STATUSES } from "../../../constants/allStatuses";

const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const CardContainer = styled.View`
  border-color: ${({ reservationGroup }) =>
    RESERVATION_GROUP_STATUSES[reservationGroup.status].color};
  border-width: ${(props) => props.theme.borderCardWith}px;
  border-radius: 10px;
  padding: 10px;
  z-index: 2;
  background-color: white;
  flex-direction: row;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 5px;
`;

const SpaceBetweenRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardText = styled(StyledText)`
  color: #55595c;
`;

const Svg = styled(SvgXml)`
  margin-right: 5px;
`;

const ReservationGroupCard = ({
  type = "ARRIVALS",
  reservationGroup,
  disabled,
  onPress,
  headerIcon,
}) => {
  const getArrivedOrCheckInnedPax = () => {
    switch (type) {
      case "ARRIVALS":
        return typy(reservationGroup, "arrivedPaxCount").safeArray;
      // return getArrivedPaxOfReservationGroup(
      //   typy(reservationGroup, "reservationGroupArrivals").safeArray
      // );
      case "CHECKIN":
        return typy(reservationGroup, "inHouseGuestCount").safeArray;
      // return getInHousePaxOfReservationGroup(
      //   typy(reservationGroup, "reservations").safeArray
      // );
      default:
        return 0;
    }
  };

  return (
    <Wrapper onPress={onPress} disabled={disabled}>
      <CardContainer reservationGroup={reservationGroup}>
        {headerIcon}

        <Container>
          <SpaceBetweenRow>
            <ReservationGroupInfo icon={icons.userIcon}>
              <CardText
                fontFamily="roboto-bold"
                fontSize={13}
                style={{ textTransform: "capitalize" }}
              >
                {reservationGroup?.contact?.firstName ?? ""}{" "}
                {reservationGroup?.contact?.lastName ?? ""}
              </CardText>
            </ReservationGroupInfo>

            <ReservationGroupInfo icon={icons.peopleIcon}>
              <CardText>
                {`${`${getArrivedOrCheckInnedPax()}/`}${reservationGroup?.expectedPaxCount ??
                  ""}`}
              </CardText>
            </ReservationGroupInfo>
          </SpaceBetweenRow>

          <SpaceBetweenRow style={{ marginVertical: 3 }}>
            <ReservationGroupInfo icon={icons.reservationCodeIcon}>
              <CardText
                fontFamily="roboto-medium"
                fontSize={13}
                style={{ textTransform: "capitalize" }}
              >
                {typy(reservationGroup, "name").safeString}
              </CardText>
            </ReservationGroupInfo>

            {/* <ReservationGroupInfo icon={icons.timeIcon}>
              <CardText
                fontFamily="roboto-medium"
                fontSize={13}
                style={{ textTransform: "capitalize" }}
              >
                {reservationGroup.reservationTime}
              </CardText>
            </ReservationGroupInfo> */}
          </SpaceBetweenRow>

          <SpaceBetweenRow>
            <ReservationGroupInfo icon={icons.roomNumberIcon}>
              <RoomList
                reservations={typy(reservationGroup, "reservations").safeArray}
              />
            </ReservationGroupInfo>
          </SpaceBetweenRow>
        </Container>
      </CardContainer>

      {typy(reservationGroup, "reservations").safeArray.length > 1 && (
        <ExtendedCard
          color={RESERVATION_GROUP_STATUSES[reservationGroup.status].color}
        />
      )}
    </Wrapper>
  );
};

const ExtendedCard = ({ color }) => {
  return (
    <>
      <View
        style={{
          top: -2,
          zIndex: 1,
          height: 6,
          borderWidth: 1.3,
          backgroundColor: "white",
          borderTopWidth: 0,
          borderColor: color,

          borderRadius: 10,
          width: "95%",
        }}
      />
      <View
        style={{
          top: -4,
          zIndex: 0,
          height: 6,
          backgroundColor: "white",

          borderWidth: 1.2,
          borderTopWidth: 0,
          borderColor: color,
          borderRadius: 10,
          width: "90%",
        }}
      />
    </>
  );
};

const RoomList = ({ reservations }) => {
  return reservations.map((reservation, index) => (
    <React.Fragment key={index}>
      <StyledText
        fontFamily="roboto-medium"
        fontSize={13}
        color={getRoomStatusColor(typy(reservation, "room.status").safeString)}
        style={{ textDecorationLine: "underline" }}
      >
        {typy(reservation, "room.number").safeString}
      </StyledText>
      {index !== reservations.length - 1 && (
        <StyledText style={{ paddingHorizontal: 3 }}>-</StyledText>
      )}
    </React.Fragment>
  ));
};

const ReservationGroupInfo = ({ icon, children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
      }}
    >
      <Svg width={10} height={15} xml={icon} fill={theme.colors.greyIcon} />
      {children}
    </View>
  );
};

export default ReservationGroupCard;
