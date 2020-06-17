cube(`TDatetimes`, {
  sql: `SELECT * FROM dbo."T_DATETIMES"`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [idDateTime],
    },
  },

  dimensions: {
    idDateTime: {
      sql: `${CUBE}.ID_DATETIME`,
      type: `number`,
      primaryKey: true,
      shown: false,
    },

    msg: {
      sql: `${CUBE}."MSG"`,
      type: `string`,
      shown: false,
    },

    date: {
      sql: `${CUBE}."DATETIME"`,
      type: `time`,
    },
  },
});
