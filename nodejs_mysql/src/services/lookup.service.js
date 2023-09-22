const db = require("../database/db");

module.exports = class Product {
  constructor(reqObj) {}

  static async retrieveLookupList() {
    const [rows] = await db.execute(`
    SELECT * FROM lookupType 
    LEFT JOIN lookup ON lookuptype.id = lookup.lookupTypeId;
    `);

    const lookupTypeListWithLookup = [];

    rows?.forEach((item) => {
      const existingLookupTypeItem = lookupTypeListWithLookup.find(
        (element) => element.lookupTypeId == item.lookupTypeId
      );

      if (existingLookupTypeItem) {
        existingLookupTypeItem.lookups.push({
          id: item.id,
          label: item.label,
        });
      } else {
        lookupTypeListWithLookup.push({
          name: item.name,
          lookupTypeId: item.lookupTypeId,
          lookups: [{ id: item.id, label: item.label }],
        });
      }
    });

    return {
      lookupData: lookupTypeListWithLookup,
    };
  }
};
