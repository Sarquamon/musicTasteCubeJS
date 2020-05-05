cube(`TUsers`, {
  sql: `SELECT * FROM dbo."T_USERS"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [username, firstName, lastName, createdAt]
    }
  },
  
  dimensions: {
    username: {
      sql: `${CUBE}."USERNAME"`,
      type: `string`
    },
    
    useremail: {
      sql: `${CUBE}."USEREMAIL"`,
      type: `string`
    },
    
    userpwd: {
      sql: `${CUBE}."USERPWD"`,
      type: `string`
    },
    
    firstName: {
      sql: `${CUBE}."FIRST_NAME"`,
      type: `string`
    },
    
    lastName: {
      sql: `${CUBE}."LAST_NAME"`,
      type: `string`
    },
    
    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `string`
    }
  }
});
