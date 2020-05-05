cube(`TUserArtists`, {
  sql: `SELECT * FROM dbo."T_USER_ARTISTS"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [idArtist]
    }
  },
  
  dimensions: {
    idArtist: {
      sql: `${CUBE}."ID_ARTIST"`,
      type: `string`
    }
  }
});
