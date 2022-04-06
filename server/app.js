
const express     = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const schema      = require('./schema/schema')
const mongoose    = require('mongoose')
var cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect("mongodb+srv://utkarsh-graphql-demo:utkarsh-graphql-demo@cluster0.2gvbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connection.once('open', () => {
    console.log("connected to database")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}) )

app.listen(5000, ()=>{
    console.log("listing for requests")
} )