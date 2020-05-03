import React, { useContext } from "react";
import { View } from "react-native";
import moment from "moment";

import CalendarPicker from "react-native-calendar-picker";
import { secondaryColor } from "../../../styles/theme";
import { LanguageContext } from "../../../contexts/LanguageContext";

const CalendarDataPicker = ({
  value,
  startDate,
  endDate,
  onChangeDate,
  width,
}) => {
  const languageContext = useContext(LanguageContext);

  const getWeekDays = () => {
    switch (languageContext.language) {
      case "IT":
        return ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
      default:
        return ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    }
  };
  const getMonth = () => {
    switch (languageContext.language) {
      case "IT":
        return [
          "Gennaio",
          "Febbraio",
          "Marzo",
          "Aprile",
          "Maggio",
          "Giugno",
          "Luglio",
          "Agosto",
          "Settembre",
          "Ottobre",
          "Novembre",
          "Dicembre",
        ];
      default:
        return [
          "January",
          "Febraury",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
    }
  };
  return (
    <View style={{ marginTop: -5 }}>
      <CalendarPicker
        width={width}
        startFromMonday
        maxDate={endDate}
        minDate={startDate}
        weekdays={getWeekDays()}
        months={getMonth()}
        previousTitle="<"
        nextTitle=">"
        dayShape="square"
        todayBackgroundColor="transparent"
        nextTitleStyle={{ fontSize: 20 }}
        previousTitleStyle={{ fontSize: 20 }}
        customDatesStyles={[
          {
            date: value || null,
            style: { backgroundColor: secondaryColor },
            // Random colors,
            // style: { backgroundColor: '#' + ('#00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6) },
            // style: { color: 'black' } // sets the font color
            // containerStyle: [{ height: 25 }] // extra styling for day container
          },
        ]}
        selectedDayStyle={{ backgroundColor: secondaryColor }}
        onDateChange={(date) => {
          onChangeDate(moment(date).format("YYYY-MM-DD"));
        }}
      />
    </View>
  );
};

export default CalendarDataPicker;
