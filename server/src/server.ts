import express from 'express'
import cors from 'cors'
import { routes } from './routes';

//instalar https://www.npmjs.com/package/express-async-errors para tratar os erros da chamada da minha rota
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3334, () => {
    console.log('Server is already!')
})