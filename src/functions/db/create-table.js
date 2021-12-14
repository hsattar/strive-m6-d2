import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import db from './connection.js'

const SQLTablesPath = join(dirname(fileURLToPath(import.meta.url)), 'tables.sql')

export const createTables = async () => {
    try {
        const fileAsBuffer = fs.readFileSync(SQLTablesPath)
        const fileAsString = fileAsBuffer.toString()
        await db.query(fileAsString)
        console.log('Tables Created')
    } catch (error) {
        console.log({error})
    }
}

(async () => {
    await createTables();
})()