import './env.js'
import express from 'express'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import crypto from 'node:crypto'
import { generatePlan, listSubjects } from './planos/index.js'
import { savePlan, listPlans, getPlan, updateProgress, deletePlan } from './repo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json({ limit: '200kb' }))

app.get('/api/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() })
})

app.get('/api/subjects', (req, res) => {
  res.json({ subjects: listSubjects() })
})

app.post('/api/plans', async (req, res) => {
  try {
    const topic = String(req.body?.topic || '').trim()
    if (topic.length < 2) {
      return res.status(400).json({ error: 'Escreve o que queres aprender.' })
    }
    if (topic.length > 160) {
      return res.status(400).json({ error: 'Tema demasiado longo.' })
    }
    const days = Number(req.body?.days) || 7
    const level = String(req.body?.level || 'iniciante')

    const plan = generatePlan({ topic, days, level })
    const id = crypto.randomBytes(4).toString('hex')

    await savePlan({ id, ...plan })
    res.json({ id, ...plan })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Não foi possível criar o plano.' })
  }
})

app.get('/api/plans', async (req, res) => {
  try {
    const plans = await listPlans()
    res.json({ plans })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Não foi possível carregar os planos.' })
  }
})

app.get('/api/plans/:id', async (req, res) => {
  try {
    const plan = await getPlan(req.params.id)
    if (!plan) {
      return res.status(404).json({ error: 'Plano não encontrado' })
    }
    res.json(plan)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Não foi possível carregar o plano.' })
  }
})

app.post('/api/plans/:id/progress', async (req, res) => {
  try {
    const progress = Array.isArray(req.body?.progress) ? req.body.progress : []
    const ok = await updateProgress(req.params.id, progress)
    if (!ok) {
      return res.status(404).json({ error: 'Plano não encontrado' })
    }
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Não foi possível guardar o progresso.' })
  }
})

app.delete('/api/plans/:id', async (req, res) => {
  try {
    await deletePlan(req.params.id)
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Não foi possível apagar o plano.' })
  }
})

const distDir = join(__dirname, '..', 'dist')
app.use(express.static(distDir))
app.get('*', (req, res) => {
  res.sendFile(join(distDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Trilha a correr em http://localhost:${PORT}`)
})
