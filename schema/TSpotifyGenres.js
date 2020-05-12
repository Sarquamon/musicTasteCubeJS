cube(`TSpotifyGenres`, {
  sql: `SELECT * FROM dbo."T_SPOTIFY_GENRES"`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [genreName, createdAt],
    },
  },

  dimensions: {
    genreName: {
      sql: `${CUBE}."GENRE_NAME"`,
      type: `string`,
      primaryKey: true,
    },

    genreCheckbox: {
      sql: `${CUBE}."GENRE_CHECKBOX"`,
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
