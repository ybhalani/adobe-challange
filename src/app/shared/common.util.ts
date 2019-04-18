import * as moment from 'moment';

export class CommonUtil {

  // checkIsBeforeDate
  static checkIsBeforeDate(date1, date2) {
    return moment(date1).isBefore(date2);
  }

  // checkIsBeforeDate
  static checkIsSameDate(date1, date2) {
    return moment(date1).isSame(date2);
  }

  // cloneDeep
  static cloneDeep(data) {
    return JSON.parse(JSON.stringify(data));
  }

  // check for dupesF
  static checkDupesData(data, logs, key) {
    let outputData = {
      'duplicateData': [],
      'uniqueData': [],
      'logs': logs,
    }

    data.forEach((item) => {
      logs.push({ text: `${item[key]} dupes checking start`, item: item });
      const find = outputData.uniqueData.find(val => val[key] === item[key]);
      if (find) {
        if (this.checkIsBeforeDate(find.entryDate, item.entryDate) || this.checkIsBeforeDate(find.entryDate, item.entryDate)) {
          find.reason = `Same ${key} already exists.`;
          outputData.duplicateData.unshift(find);
          logs.push({ text: `${find[key]} dupes found with ${key} and entryDate of duplicate item: ${find.entryDate}, Compared most recent item ${item[key]} with ${key} and entryDate : ${item.entryDate}`, item: { mostRecent: item, duplicate: find } });
          // remove old data;
          outputData.uniqueData = outputData.uniqueData.filter(val => val[key] !== item[key]);
          // push new data;
          outputData.uniqueData.unshift(item);
        } else {
          item.reason = `Same ${key} already exists.`;
          logs.push({ text: `${item[key]} dupes found with ${key} and entryDate of duplicate item: ${item.entryDate}, Compared most recent item ${find[key]} with ${key} and entryDate : ${find.entryDate}`, item: { mostRecent: find, duplicate: item } });
          outputData.duplicateData.unshift(item);
        }
      } else {
        logs.push({ text: `${item[key]} dupes not found`, item: item });
        outputData.uniqueData.unshift(item);
      }
    });

    return outputData;
  }

}
