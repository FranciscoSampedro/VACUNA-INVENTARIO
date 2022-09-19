import axios from 'axios'
import urlsBackends from 'components/constans/urlsBackends'

const clientBakendCore = axios.create({
    baseURL: urlsBackends.core
})
const clientBakendCore2 = axios.create({
    baseURL: urlsBackends.core2
})
const clientApp = axios.create({
  baseURL: urlsBackends.app
})
export default{
    clientBakendCore,
    clientBakendCore2,
    clientApp
}