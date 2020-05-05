cube(`TUserGenres`, {
  sql: `SELECT * FROM dbo."T_USER_GENRES"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [genreName]
    }
  },
  
  dimensions: {
    genreName: {
      sql: `${CUBE}."GENRE_NAME"`,
      type: `string`
    }
  }
});
