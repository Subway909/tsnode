import { Router } from 'express'

const routes = Router()

function teste (): string {
  const temp = 'Hello World'

  return temp
}

routes.get('/', (req, res) => {
  const num = teste()

  return res.send(num)
})

export default routes
