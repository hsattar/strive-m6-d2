import pg from 'pg'

const { Pool } = pg
const db = new Pool()

export const testDbConnection = async () => {
    try {
      await db.query("SELECT NOW()")
      console.log("DB Connected")
    } catch (error) {
      console.log("DB Failed", error)
    }
}

export default db