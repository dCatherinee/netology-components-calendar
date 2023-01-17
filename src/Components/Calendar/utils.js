const MONTH_NAME = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const MONTH_NAME_GENITIVE = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WEEK_NAME = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const DAYS_IN_WEEK = 7;

export function getMonthName(month) {
    return MONTH_NAME[month];
};

export function getMonthNameGenitive(month) {
    return MONTH_NAME_GENITIVE[month];
};

export function getNameDayOfWeek(day) {
    if (day === 0) {
        return WEEK_NAME[6];
    } else {
        return WEEK_NAME[day - 1];
    }
};

export function getDayOfWeek(day) {
    if (day === 0) {
        return 6;
    } else {
        return day - 1;
    }
};

export function getMonthDays(month, year) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = DAYS_IN_MONTH[month];
    const monthStartsOn = getDayOfWeek(date.getDay());
    let day = 1;
    let dayInNextMonth = 1;
    let daysInPrevMonth = 0;

    if (month - 1 < 0) {
        daysInPrevMonth = DAYS_IN_MONTH[11];
    } else {
        daysInPrevMonth = DAYS_IN_MONTH[month - 1];
    }

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];
        
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if (i === 0 && j < monthStartsOn) {
                result[i][j] = {
                    day: daysInPrevMonth - monthStartsOn + 1,
                    notCurrentMonth: true
                };
                daysInPrevMonth++;
            } else if (day > daysInMonth) {
                result[i][j] = {
                    day: dayInNextMonth,
                    notCurrentMonth: true
                };
                dayInNextMonth++;
            } else {
                result[i][j] = {
                    day: day,
                    notCurrentMonth: false
                };
                day++;
            }
            
        }
    }

    return result;
};