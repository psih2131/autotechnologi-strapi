require('dotenv').config()
const { Client } = require('pg')
const crypto = require('crypto')

const c = new Client({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: Number(process.env.DATABASE_PORT || 5432),
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

async function ensurePermission(action, roleId) {
  const existing = await c.query(
    `SELECT p.id
     FROM up_permissions p
     JOIN up_permissions_role_lnk l ON l.permission_id = p.id
     WHERE p.action = $1 AND l.role_id = $2`,
    [action, roleId],
  )
  if (existing.rows.length) {
    console.log('exists', action)
    return
  }

  const inserted = await c.query(
    `INSERT INTO up_permissions (document_id, action, created_at, updated_at, published_at, locale)
     VALUES ($1, $2, NOW(), NOW(), NOW(), NULL)
     RETURNING id`,
    [crypto.randomBytes(16).toString('hex'), action],
  )
  const permissionId = inserted.rows[0].id
  await c.query(
    `INSERT INTO up_permissions_role_lnk (permission_id, role_id, permission_ord)
     VALUES ($1, $2, $3)`,
    [permissionId, roleId, 1],
  )
  console.log('created', action, permissionId)
}

;(async () => {
  await c.connect()

  const roles = await c.query(`SELECT id, name, type FROM up_roles WHERE type = 'public'`)
  console.log('public role', roles.rows)
  const roleId = roles.rows[0]?.id
  if (!roleId) throw new Error('Public role not found')

  const sample = await c.query(
    `SELECT action FROM up_permissions WHERE action LIKE '%page-contact%' LIMIT 10`,
  )
  console.log('sample contact perms', sample.rows)

  await ensurePermission('api::new.new.find', roleId)
  await ensurePermission('api::new.new.findOne', roleId)

  const check = await c.query(
    `SELECT p.action FROM up_permissions p
     JOIN up_permissions_role_lnk l ON l.permission_id = p.id
     WHERE l.role_id = $1 AND p.action LIKE 'api::new.new%'`,
    [roleId],
  )
  console.log('news perms now', check.rows)

  await c.end()
})().catch(async (e) => {
  console.error(e)
  try { await c.end() } catch {}
  process.exit(1)
})
