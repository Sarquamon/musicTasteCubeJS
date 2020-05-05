cube(`TUserSongs`, {
  sql: `SELECT * FROM dbo."T_USER_SONGS"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [idSong]
    }
  },
  
  dimensions: {
    idSong: {
      sql: `${CUBE}."ID_SONG"`,
      type: `string`
    }
  }
});
