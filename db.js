import { createClient } from '@supabase/supabase-js'
import Database from 'better-sqlite3'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { mkdirSync } from 'node:fs'

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_KEY
const useSupabase = Boolean(url && key)

let supabase = null
let sqlite = null

if (useSupabase) {
  supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false }
  })
  console.log('Base de dados: Supabase')
} else {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const dataDir = join(__dirname, '..', 'data')
  mkdirSync(dataDir, { recursive: true })
  sqlite = new Database(join(dataDir, 'trilha.db'))
  sqlite.pragma('journal_mode = WAL')
  sqlite.exec(`CREATE TABLE IF NOT EXISTS plans (
    id TEXT PRIMARY KEY,
    topic TEXT NOT NULL,
    level TEXT NOT NULL,
    total_days INTEGER NOT NULL,
    title TEXT NOT NULL,
    summary TEXT,
    content TEXT NOT NULL DEFAULT '[]',
    progress TEXT NOT NULL DEFAULT '[]',
    matched TEXT,
    created_at TEXT NOT NULL
  )`)
  console.log('Base de dados: modo local (SQLite)')
}

export const provider = useSupabase ? 'supabase' : 'local'
export { supabase, sqlite }
