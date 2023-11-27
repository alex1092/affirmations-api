import { Hono } from 'hono'
import { getAffirmations } from './util/getAffirmations'

const app = new Hono()

app.get('/affirmation/:affirmationType', (ctx) => {    
    const {affirmationType} = ctx.req.param()
    return ctx.text(getAffirmations(affirmationType))
})

export default app
