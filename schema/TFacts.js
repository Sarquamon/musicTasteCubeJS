cube(`TFacts`, {
  sql: `SELECT * FROM dbo."T_FACTS"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [idArtist, idSong, genreName]
    }
  },
  
  dimensions: {
    idArtist: {
      sql: `${CUBE}."ID_ARTIST"`,
      type: `string`
    },
    
    idSong: {
      sql: `${CUBE}."ID_SONG"`,
      type: `string`
    },
    
    genreName: {
      sql: `${CUBE}."GENRE_NAME"`,
      type: `string`
    }
  }
});
