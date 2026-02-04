import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = new Hono()

app.get('/todos', async (c) => {
  const todos = await prisma.todo.findMany(
    { orderBy: { createdAt: 'desc' } }
  )
  return c.json(todos)
})

app.post('/todos', async (c) => {
  const body = await c.req.json()
  const newTodo = await prisma.todo.create({
    data: {
      title: body.title,
    },
  })
  return c.json(newTodo)
})

app.put('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()
  const updatedTodo = await prisma.todo.update({
  where: { id: id },
    data: {
      completed: body.completed,
    },
  })
  return c.json(updatedTodo)
})

app.delete('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const deletedTodo = await prisma.todo.delete({
    where: {  id: id },
  })
  return c.json(deletedTodo)
})

app.get('/', (c) => {
  return c.text('Hola! Hello Hono!!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
