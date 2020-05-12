cube(`TUserSongs`, {
  sql: `SELECT * FROM dbo."T_USER_SONGS"`,

  joins: {
    TUsers: {
      relationship: "hasMany",
      sql: `${TUserSongs}.ID_USER = ${TUsers}.ID_USER`,
    },
    TSpotifySongs: {
      relationship: "hasMany",
      sql: `${TUserSongs}.ID_SONG = ${TSpotifySongs}.ID_SONG`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [idSong],
    },
  },

  dimensions: {
    idSongUser: {
      sql: `${CUBE}."ID_SONG_USER"`,
      type: `number`,
      primaryKey: true,
      shown: false,
    },
    idUser: {
      sql: `${CUBE}."ID_USER"`,
      type: `number`,
      shown: false,
    },
    idSong: {
      sql: `${CUBE}."ID_SONG"`,
      type: `string`,
      shown: false,
    },
  },
});
