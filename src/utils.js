import moment from "moment";

export const defaultEvent = {
  id: null,
  text: ''
}

export const getID = () => {
  return (Date.now()*Math.random()*1000).toFixed();
}
let index = 0;
export const getRandomItem = (arr) => {
  index++;
  if (index === arr.length) {
    index = 0;
  }

  return arr[index]
}

export const dateFrom = (date) => {
  moment.updateLocale('ru', {
    relativeTime : {
        future: "через %s",
        past:   "%s назад",
        s  : 'несколько секунд',
        ss : '%d секунд',
        m:  "минуту",
        mm: "%d минуты",
        h:  "час",
        hh: "%d часов",
        d:  "день",
        dd: "%d дней",
        w:  "неделю",
        ww: "%d неделей",
        M:  "месяц",
        MM: "%d месяцев",
        y:  "год",
        yy: "%d лет "
    }
});
  
  const time = moment(date).fromNow();
  return time;
}



