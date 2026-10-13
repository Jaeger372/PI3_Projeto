import { supabase, sqlite, provider } from './db.js'

function toApi(row) {
  return {
    id: row.id,
    topic: row.topic,
    level: row.level,
    totalDays: row.total_days,
    title: row.title,
    summary: row.summary,
    matched: row.matched,
    createdAt: row.created_at,
    progress: Array.isArray(row.progress) ? row.progress : safeParse(row.progress, []),
    days: Array.isArray(row.content) ? row.content : safeParse(row.content, [])
  }
}

function safeParse(value, fallback) {
  try {
    return typeof value === 'string' ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export async function savePlan(plan) {
  if (provider === 'supabase') {
    const { error } = await supabase.from('plans').insert({
      id: plan.id,
      topic: plan.topic,
      level: plan.level,
      total_days: plan.totalDays,
      title: plan.title,
      summary: plan.summary,
      content: plan.days,
      progress: [],
      matched: plan.matched,
      created_at: new Date().toISOString()
    })
    if (error) throw new Error(error.message)
    return
  }
  sqlite
    .prepare(
      `INSERT INTO plans (id, topic, level, total_days, title, summary, content, progress, matched, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      plan.id,
      plan.topic,
      plan.level,
      plan.totalDays,
      plan.title,
      plan.summary,
      JSON.stringify(plan.days),
      '[]',
      plan.matched,
      new Date().toISOString()
    )
}

export async function listPlans() {
  if (provider === 'supabase') {
    const { data, error } = await supabase
      .from('plans')
      .select('id, topic, level, total_days, title, summary, matched, progress, created_at')
      .order('created_at', { ascending: false })
    if (error) throw new Error(error.message)
    return (data || []).map((row) => ({
      ...row,
      progress: Array.isArray(row.progress) ? row.progress : []
    }))
  }
  return sqlite
    .prepare(
      `SELECT id, topic, level, total_days, title, summary, matched, progress, created_at
       FROM plans ORDER BY created_at DESC`
    )
    .all()
    .map((row) => ({
      ...row,
      progress: safeParse(row.progress, [])
    }))
}

export async function getPlan(id) {
  if (provider === 'supabase') {
    const { data, error } = await supabase.from('plans').select('*').eq('id', id).maybeSingle()
    if (error) throw new Error(error.message)
    return data ? toApi(data) : null
  }
  const row = sqlite.prepare(`SELECT * FROM plans WHERE id = ?`).get(id)
  return row ? toApi(row) : null
}

export async function updateProgress(id, progress) {
  if (provider === 'supabase') {
    const { data, error } = await supabase
      .from('plans')
      .update({ progress })
      .eq('id', id)
      .select('id')
    if (error) throw new Error(error.message)
    return (data || []).length > 0
  }
  const info = sqlite
    .prepare(`UPDATE plans SET progress = ? WHERE id = ?`)
    .run(JSON.stringify(progress), id)
  return info.changes > 0
}

export async function deletePlan(id) {
  if (provider === 'supabase') {
    const { error } = await supabase.from('plans').delete().eq('id', id)
    if (error) throw new Error(error.message)
    return
  }
  sqlite.prepare(`DELETE FROM plans WHERE id = ?`).run(id)
}
