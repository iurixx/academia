import { DatabaseConnection } from '../components/Database/DatabaseConnection'

const useDatabaseConnection = () => {
  const dbObject = DatabaseConnection.getConnection()
  DatabaseConnection.startDatabase(dbObject)

  return { dbObject }
}

export default useDatabaseConnection
