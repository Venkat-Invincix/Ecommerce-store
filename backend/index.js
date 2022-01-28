const app = require('./app')
const configureDB = require('./config/database')
const dotenv = require('dotenv')

dotenv.config({ path: 'backend/config/config.env' })

const PORT = process.env.PORT || 3050;
configureDB()

app.listen(PORT, () => {
    console.log('app is running on PORT', PORT)
})