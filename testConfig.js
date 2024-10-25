import dotenv from 'dotenv'
dotenv.config({
    path: `.env`,
    override: true
})

const testConfig = {
    baseURL: process.env.URL

}
export default testConfig