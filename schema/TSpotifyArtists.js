cube(`TSpotifyArtists`, {
  sql: `SELECT * FROM dbo."T_SPOTIFY_ARTISTS"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [idArtist, artistName, createdAt]
    }
  },
  
  dimensions: {
    idArtist: {
      sql: `${CUBE}."ID_ARTIST"`,
      type: `string`
    },
    
    artistName: {
      sql: `${CUBE}."ARTIST_NAME"`,
      type: `string`
    },
    
    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `string`
    }
  }
});
