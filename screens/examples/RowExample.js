import React from "react";
import { ScrollView } from "react-native";
import { WithIconRow } from "../../components";
import filterIcon from "../../assets/images/filter/filter-icon.svg";

const RowExample = () => {
  return (
    <ScrollView style={{ flex: 1, margin: 15 }}>
      <WithIconRow icon={filterIcon} label="label" value="value" colon />
      <WithIconRow
        icon={filterIcon}
        label="label"
        value="value"
        colon
        spaceBetween
      />
      <WithIconRow icon={filterIcon} label="label" value={loremIpsum} colon />

      <WithIconRow
        icon={filterIcon}
        label="label"
        value={loremIpsum}
        colon
        spaceBetween
      />
    </ScrollView>
  );
};

export default RowExample;

const loremIpsum =
  "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.";
