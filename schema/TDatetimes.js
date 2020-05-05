cube(`TDatetimes`, {
  sql: `SELECT * FROM dbo."T_DATETIMES"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datetime]
    }
  },
  
  dimensions: {
    msg: {
      sql: `${CUBE}."MSG"`,
      type: `string`
    },
    
    datetime: {
      sql: `${CUBE}."DATETIME"`,
      type: `string`
    }
  }
});
