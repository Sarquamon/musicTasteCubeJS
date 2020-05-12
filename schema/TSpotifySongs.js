cube(`TSpotifySongs`, {
  sql: `SELECT * FROM dbo."T_SPOTIFY_SONGS"`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [idSong, songName, createdAt],
    },
  },

  dimensions: {
    idSong: {
      sql: `${CUBE}."ID_SONG"`,
      type: `string`,
      primaryKey: true,
    },

    songName: {
      sql: `${CUBE}."SONG_NAME"`,
      type: `string`,
    },

    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `time`,
      shown: false,
    },
  },
});
