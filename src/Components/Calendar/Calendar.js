import React from 'react';
import * as calendar from './utils';

const Calendar = (props) => {
  const {date} = props;
  const monthName = calendar.getMonthName(date.getMonth());
  const monthNameGenitive = calendar.getMonthNameGenitive(date.getMonth());
  const dayOfWeek = calendar.getNameDayOfWeek(date.getDay());
  const month = calendar.getMonthDays(date.getMonth(), date.getFullYear());

  console.log(month);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayOfWeek}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthNameGenitive}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthName}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {
            month.map((week, index) =>
              <tr key={index}>
                {
                  week.map((day) =>
                    <td className={day.notCurrentMonth ? 'ui-datepicker-other-month' : ''} key={day.day}>{day.day}</td>
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;