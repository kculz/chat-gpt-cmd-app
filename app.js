const {Configaration, OpenAIApi, Configuration} = require('openai')
const readline = require('readline')
const dotenv = require('dotenv')
dotenv.config()

const   openai = new OpenAIApi(
    new Configuration({
        apiKey: process.env.API_KEY
    })
)

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.prompt()
interface.on("line", async input => {
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: input
        }]
    })
    console.log(res.data.choices[0].message.content)
    interface.prompt()
})