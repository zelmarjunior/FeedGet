import express from 'express'
import { SubmitFeedbackFunction } from './functions/submit-feedback-function';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express();

routes.use(express.json());

routes.post('/feedbacks', async (req, res) => {
    //desetruturação de array
    const { type, comment, screenshot } = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodeMailerMailAdapter = new NodeMailerMailAdapter();

    const submitFeedbackFunction = new SubmitFeedbackFunction(
        prismaFeedbacksRepository,
        nodeMailerMailAdapter
    )

    await submitFeedbackFunction.execute({
        type,
        comment,
        screenshot,
    })
    
    return res.status(201).send("Feedback Criado com Sucesso!");
})