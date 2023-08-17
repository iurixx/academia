import * as SQLite from 'expo-sqlite'

export const databaseName = 'academia.db'

export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase(databaseName),
  startDatabase: (dbObject) => {
    dbObject.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log(
        'Foreign keys turned on, system is running on a SQLite database!'
      )
    )
  },
}
