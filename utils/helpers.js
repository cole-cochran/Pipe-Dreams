module.exports = {
  get_date: () => {
    let now = new Date();
    now = now.toString()
    now = now.substring(0, now.length - 33);
    return now;
  }
};
