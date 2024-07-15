import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const RDatePicker: React.FC<{
  label?: string;
  onChange?: any;
  value: Date;
  dateFormatCalendar: string;
  dateFormat: string;
  yearPlaceholder?: string;
}> = ({ label, onChange, value, dateFormatCalendar, dateFormat }) => {
  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(
    (
      {
        value,
        onClick,
      }: {
        value?: any;
        onClick?: any;
      },
      ref: any
    ) => (
      <div
        className="w-[300px] py-2 text-sm rounded-md pl-2 border border-gray-300 text-gray-500"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </div>
    )
  );
  return (
    <div className="w-full">
      <label className="block w-full mb-1 text-sm text-gray-500">{label}</label>
      <div className="w-full">
        <DatePicker
          selected={value}
          showYearPicker
          onChange={onChange}
          dateFormatCalendar={dateFormatCalendar}
          dateFormat={dateFormat}
          customInput={<ExampleCustomInput />}
        />
      </div>
    </div>
  );
};

export default RDatePicker;
