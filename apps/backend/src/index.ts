import express from 'express';

const app = express();

app.get('/', (_req: Request, res: any) => {
    res.send('Welcome');
});

const PORT = process.env.PORT || 3008; // Use the port provided by the environment or default to 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
