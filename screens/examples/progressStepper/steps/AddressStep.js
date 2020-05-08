import React from "react";
import RadioCard from "../../../../components/cards/RadioCard";
import theme from "../../../../styles/theme";

const AddressStep = ({ selectedAddress, onAddressPress }) => {
  return addresses.map((address, index) => (
    <RadioCard
      key={index}
      primaryColor={theme.APP_MOH.primaryColor}
      secondaryColor={theme.APP_MOH.radioCardBackgroundColor}
      title={`${address.firstName} ${address.lastName}`}
      line1={`${address.line1}`}
      line2={`${address.city}, ${address.region} ${address.postalCode}`}
      onPress={() => onAddressPress(address)}
      isSelected={selectedAddress?.id === address.id}
    />
  ));
};

const addresses = [
  {
    id: 1,
    firstName: "pasquale",
    lastName: "potenza",
    line1: "Via roma 12",
    city: "Fasano",
    region: "BR",
    postalCode: "72015",
  },
  {
    id: 2,
    firstName: "francesco",
    lastName: "cofano",
    line1: "Via roma 12",
    city: "torre canne",
    region: "BR",
    postalCode: "72015",
  },
];

export default AddressStep;
