cube(`TFacts`, {
  sql: `SELECT * FROM dbo."T_FACTS"`,

  joins: {
    TUsers: {
      relationship: "hasMany",
      sql: `${TFacts}.ID_USER = ${TUsers}.ID_USER`,
    },

    TSpotifyArtists: {
      relationship: "hasMany",
      sql: `${TFacts}.ID_ARTIST = ${TSpotifyArtists}.ID_ARTIST`,
    },

    TSpotifySongs: {
      relationship: "hasMany",
      sql: `${TFacts}.ID_SONG = ${TSpotifySongs}.ID_SONG`,
    },

    TSpotifyGenres: {
      relationship: "hasMany",
      sql: `${TFacts}.GENRE_NAME = ${TSpotifyGenres}.GENRE_NAME`,
    },

    TDatetimes: {
      relationship: "hasMany",
      sql: `${TFacts}.ID_DATETIME = ${TDatetimes}.ID_DATETIME`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [idFact],
    },

    timesRecommended: {
      type: `count`,
      filters: [
        {
          sql: `${CUBE}.RECOMMENDED = 1`,
        },
      ],
    },

    timesLiked: {
      type: `count`,
      filters: [
        {
          sql: `${CUBE}.LIKED = 1`,
        },
      ],
    },
  },

  dimensions: {
    idFact: {
      sql: `${CUBE}."ID_FACT"`,
      type: `number`,
      primaryKey: true,
      shown: false,
    },

    idUser: {
      sql: `${CUBE}."ID_USER"`,
      type: `number`,
    },

    idArtist: {
      sql: `${CUBE}."ID_ARTIST"`,
      type: `string`,
    },

    idSong: {
      sql: `${CUBE}."ID_SONG"`,
      type: `string`,
    },

    genreName: {
      sql: `${CUBE}."GENRE_NAME"`,
      type: `string`,
    },

    recommended: {
      sql: `${CUBE}."RECOMMENDED"`,
      type: `number`,
    },

    liked: {
      sql: `${CUBE}."LIKED"`,
      type: `number`,
    },

    idDateTime: {
      sql: `${CUBE}."ID_DATETIME"`,
      type: `number`,
      shown: false,
    },
  },
});
