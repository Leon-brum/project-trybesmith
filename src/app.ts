import express from 'express';
import productRouter from './routes/product.routs';
import orderRouter from './routes/order.routs';
import loginRouter from './routes/login.routs';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
