cube(`TUserArtists`, {
  sql: `SELECT * FROM dbo."T_USER_ARTISTS"`,

  joins: {
    TUsers: {
      relationship: "hasMany",
      sql: `${TUserArtists}.ID_USER = ${TUsers}.ID_USER`,
    },
    TSpotifyArtists: {
      relationship: "hasMany",
      sql: `${TUserArtists}.ID_ARTIST = ${TSpotifyArtists}.ID_ARTIST`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [idArtistUser],
    },
  },

  dimensions: {
    idArtistUser: {
      sql: `${CUBE}."ID_ARTIST_USER"`,
      type: `number`,
      primaryKey: true,
      shown: false,
    },
    idArtist: {
      sql: `${CUBE}."ID_ARTIST"`,
      type: `string`,
      shown: false,
    },
    idUser: {
      sql: `${CUBE}."ID_USER"`,
      type: `number`,
      shown: false,
    },
  },
});
