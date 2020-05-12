cube(`TUsers`, {
  sql: `SELECT * FROM dbo."T_USERS"`,

  joins: {},

  measures: {
    totalUsers: {
      type: `count`,
      drillMembers: [username, useremail, createdAt],
    },
  },

  dimensions: {
    idUser: {
      sql: `${CUBE}."ID_USER"`,
      type: `number`,
      primaryKey: true,
    },
    username: {
      sql: `${CUBE}."USERNAME"`,
      type: `string`,
    },

    useremail: {
      sql: `${CUBE}."USEREMAIL"`,
      type: `string`,
    },

    userpwd: {
      sql: `${CUBE}."USERPWD"`,
      type: `string`,
      shown: false,
    },

    firstName: {
      sql: `${CUBE}."FIRST_NAME"`,
      type: `string`,
      shown: false,
    },

    lastName: {
      sql: `${CUBE}."LAST_NAME"`,
      type: `string`,
      shown: false,
    },

    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `time`,
      shown: false,
    },
  },
});
