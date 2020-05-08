import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledText from "../StyledText";
import BadgeNew from "./BadgeNew";
import theme from "../../styles/theme";
import { textProps } from "../proptypes";

const Card = styled.TouchableOpacity`
  padding: 10px;
  margin-vertical: 10px;
  padding: 20px;
`;

const SpaceBetweenRow = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-vertical: 5px;
`;

const OrderCard = ({
  order,
  primaryColor,
  badgeStyle,
  badgeTextStyle,
  badgeHeight,
  withBadge,
  badgeText,
}) => {
  return (
    <Card
      style={{
        backgroundColor: "white",
        elevation: 6,
        shadowColor: "rgba(0,0,0, .4)",
        shadowOffset: { height: 2, width: 0.5 },
        shadowOpacity: 5,
        shadowRadius: 4,
      }}
    >
      {withBadge && (
        <BadgeNew
          primaryColor={primaryColor}
          badgeStyle={badgeStyle}
          badgeTextStyle={badgeTextStyle}
          badgeText={badgeText}
          badgeHeight={badgeHeight}
          withBadge={withBadge}
        />
      )}
      <StyledText capitalize fontSize={13}>
        order #{order.number}
      </StyledText>
      <SpaceBetweenRow>
        <StyledText capitalize fontSize={13}>
          {order.data} - {order.time}
        </StyledText>
        <StyledText
          capitalize
          fontSize={13}
          fontFamily="roboto-bold"
          color={primaryColor}
        >
          € {order.price}
        </StyledText>
      </SpaceBetweenRow>
      <StyledText capitalize fontSize={15} fontFamily="roboto-medium">
        {order.restaurant.name}
      </StyledText>
    </Card>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    number: PropTypes.number,
    data: PropTypes.string,
    time: PropTypes.string,
    price: PropTypes.number,
    restaurant: PropTypes.shape({ name: PropTypes.string }),
  }).isRequired,
  primaryColor: PropTypes.string,
  badgeStyle: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
    left: PropTypes.number,
  }),
  badgeTextStyle: PropTypes.shape(textProps),
  badgeHeight: PropTypes.number,
  withBadge: PropTypes.bool,
  badgeText: PropTypes.string,
};

OrderCard.defaultProps = {
  primaryColor: theme.DEFAULT.primaryColor,
  badgeStyle: null,
  badgeTextStyle: null,
  badgeHeight: 29,
  withBadge: false,
  badgeText: "NEW",
};
export default OrderCard;
