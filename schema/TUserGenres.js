cube(`TUserGenres`, {
  sql: `SELECT * FROM dbo."T_USER_GENRES"`,

  joins: {
    TUsers: {
      relationship: "hasMany",
      sql: `${TUserGenres}.ID_USER = ${TUsers}.ID_USER`,
    },
    TSpotifyGenres: {
      relationship: "hasMany",
      sql: `${TUserGenres}.GENRE_NAME = ${TSpotifyGenres}.GENRE_NAME`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [idGenreUser],
    },
  },

  dimensions: {
    idGenreUser: {
      sql: `${CUBE}."ID_GENRE_USER"`,
      type: `number`,
      primaryKey: true,
      shown: false,
    },
    idUser: {
      sql: `${CUBE}."ID_USER"`,
      type: `number`,
      shown: false,
    },
    genreName: {
      sql: `${CUBE}."GENRE_NAME"`,
      type: `string`,
      shown: false,
    },
  },
});
