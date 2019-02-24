import routes from './routes'

const Router = ({ hash }) => routes[hash]

export default Router