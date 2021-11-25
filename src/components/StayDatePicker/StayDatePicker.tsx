import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IStayDatePicker {
  startDate?: Date;
  setStartDate?: any;
  endDate?: null | Date;
  setEndDate?: any;
  selected?: Date;
  onChange?: any;
  selectsRange?: boolean;
  minDate?: any;
  placeholderText?: string;
  inline?: boolean;
  dateFormat?: string;
  className?: string;
  calendarClassName?: string;
}

const StyledDatePicker = styled(DatePicker)<IStayDatePicker>`
  &.stay-date-picker {
    border: none;
    background: inherit;
  }
`;

const StayDatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selected,
  onChange,
  selectsRange,
  minDate,
  placeholderText,
  inline,
  dateFormat,
}: IStayDatePicker) => {
  return (
    <StyledDatePicker
      placeholderText={placeholderText}
      endDate={endDate}
      setEndDate={setEndDate}
      startDate={startDate}
      setStartDate={setStartDate}
      onChange={onChange}
      selectsRange={selectsRange}
      minDate={minDate}
      selected={selected}
      inline={inline}
      dateFormat={dateFormat}
      className="stay-date-picker"
      calendarClassName="stay-date-calendar"
    />
  );
};

export default StayDatePicker;
