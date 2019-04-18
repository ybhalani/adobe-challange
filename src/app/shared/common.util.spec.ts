import { TestBed, async } from '@angular/core/testing';
import { CommonUtil } from './common.util';
import * as moment from 'moment';

describe('Common util', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
    }).compileComponents();
  }));

  it('should return true when date1 is less than date2', function () {
    var date1 = moment('2019-11-04');
    var date2 = moment('2019-12-04');
    expect(CommonUtil.checkIsBeforeDate(date1, date2)).toEqual(true);
  });

  it('should return false when date1 is gretter than date2', function () {
    var date1 = moment('2019-12-04');
    var date2 = moment('2019-11-04');
    expect(CommonUtil.checkIsBeforeDate(date1, date2)).toEqual(false);
  });

  it('should return true when the date1 is the same as date2', function () {
    var date1 = moment('2019-11-04');
    var date2 = moment('2019-11-04');
    expect(CommonUtil.checkIsSameDate(date1, date2)).toEqual(true);
  });

  it('should return false when the date1 is not the same as date2', function () {
    var date1 = moment('2019-12-04');
    var date2 = moment('2019-11-04');
    expect(CommonUtil.checkIsSameDate(date1, date2)).toEqual(false);
  });

  it('should return expected data when match with passed arguments', function () {
    const expectedUnique = [{ "_id": "jkj238238jdsnfsj23", "email": "bill@bar.com", "firstName": "John", "lastName": "Smith", "address": "888 Mayberry St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "belr28238jdsnfsj23", "email": "mae@bar.com", "firstName": "Tallulah", "lastName": "Smith", "address": "123 Water St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "wuj08238jdsnfsj23", "email": "foo@bar.com", "firstName": "Micah", "lastName": "Valmer", "address": "123 Street St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "vug789238jdsnfsj23", "email": "foo1@bar.com", "firstName": "Blake", "lastName": "Douglas", "address": "123 Reach St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "qest38238jdsnfsj23", "email": "foo@bar.com", "firstName": "John", "lastName": "Smith", "address": "123 Street St", "entryDate": "2014-05-07T17:32:20+00:00" }, { "_id": "sel045238jdsnfsj23", "email": "foo@bar.com", "firstName": "John", "lastName": "Smith", "address": "123 Street St", "entryDate": "2014-05-07T17:32:20+00:00" }, { "_id": "wabaj238238jdsnfsj23", "email": "bog@bar.com", "firstName": "Fran", "lastName": "Jones", "address": "8803 Dark St", "entryDate": "2014-05-07T17:31:20+00:00" }, { "_id": "edu45238jdsnfsj23", "email": "mae@bar.com", "firstName": "Ted", "lastName": "Masters", "address": "44 North Hampton St", "entryDate": "2014-05-07T17:31:20+00:00" }];
    expect(CommonUtil.cloneDeep(expectedUnique)).toEqual(expectedUnique);
  });

  it('should not return expected data when match with blank array', function () {
    const expectedUnique = [{ "_id": "jkj238238jdsnfsj23", "email": "bill@bar.com", "firstName": "John", "lastName": "Smith", "address": "888 Mayberry St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "belr28238jdsnfsj23", "email": "mae@bar.com", "firstName": "Tallulah", "lastName": "Smith", "address": "123 Water St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "wuj08238jdsnfsj23", "email": "foo@bar.com", "firstName": "Micah", "lastName": "Valmer", "address": "123 Street St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "vug789238jdsnfsj23", "email": "foo1@bar.com", "firstName": "Blake", "lastName": "Douglas", "address": "123 Reach St", "entryDate": "2014-05-07T17:33:20+00:00" }, { "_id": "qest38238jdsnfsj23", "email": "foo@bar.com", "firstName": "John", "lastName": "Smith", "address": "123 Street St", "entryDate": "2014-05-07T17:32:20+00:00" }, { "_id": "sel045238jdsnfsj23", "email": "foo@bar.com", "firstName": "John", "lastName": "Smith", "address": "123 Street St", "entryDate": "2014-05-07T17:32:20+00:00" }, { "_id": "wabaj238238jdsnfsj23", "email": "bog@bar.com", "firstName": "Fran", "lastName": "Jones", "address": "8803 Dark St", "entryDate": "2014-05-07T17:31:20+00:00" }, { "_id": "edu45238jdsnfsj23", "email": "mae@bar.com", "firstName": "Ted", "lastName": "Masters", "address": "44 North Hampton St", "entryDate": "2014-05-07T17:31:20+00:00" }];
    expect(CommonUtil.cloneDeep(expectedUnique)).not.toBe([]);
  });

  it('should return unique data but empty return duplicate data when all unique data passed', function () {
    const leads = [
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "entryDate": "2014-05-07T17:30:20+00:00"
      },
      {
        "_id": "wabaj238238jdsnfsj23",
        "email": "bog@bar.com",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];
    const expectedDuplicate = [];
    const expectedUnique = [
      {
        "_id": "wabaj238238jdsnfsj23",
        "email": "bog@bar.com",
        "entryDate": "2014-05-07T17:31:20+00:00"
      },
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "entryDate": "2014-05-07T17:30:20+00:00"
      }
    ];
    const result = CommonUtil.checkDupesData(leads, [], '_id');
    expect(result.duplicateData).toEqual(expectedDuplicate);
    expect(result.duplicateData.length).toEqual(0);
    expect(result.duplicateData.length).toBeLessThan(1); //true
    expect(result.uniqueData).toEqual(expectedUnique);
  });

  it('should return duplicate and unique data when duplicate data passed', function () {
    let leads: any = [
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "foo@bar.com",
        "entryDate": "2014-05-07T17:30:20+00:00"
      },
      {
        "_id": "jkj238238jdsnfsj23",
        "email": "bog@bar.com",
        "entryDate": "2014-05-07T17:31:20+00:00"
      }
    ];

    const expectedUnique = [{
      "_id": "jkj238238jdsnfsj23",
      "email": "bog@bar.com",
      "entryDate": "2014-05-07T17:31:20+00:00"
    }];

    const expectedDuplicate = [{
      "_id": "jkj238238jdsnfsj23",
      "email": "foo@bar.com",
      "entryDate": "2014-05-07T17:30:20+00:00",
      "reason": "Same _id already exists."
    }];

    const result = CommonUtil.checkDupesData(leads, [], '_id');

    expect(result.uniqueData).toEqual(expectedUnique);
    expect(result.duplicateData).toEqual(expectedDuplicate);

    expect(result.uniqueData.length).toEqual(1);
    expect(result.duplicateData.length).toBeLessThan(2); //true
    expect(typeof result).toEqual('object');
  });

});
