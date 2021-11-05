module.exports = {
  format_date: (date) => {
    date = date.toString()
    date = date.substring(0, date.length - 33);
    return date;
  }
};
