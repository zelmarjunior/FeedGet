import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbaks-repository";

interface SubmitFeedbackFunctionRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackFunction {

  constructor(
    private feedbacksReposytory: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) { }
  async execute(request: SubmitFeedbackFunctionRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required.')
    }

    if (!comment) {
      throw new Error('Comment is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Ivalid Screenshot Format.')
    }

    await this.feedbacksReposytory.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family: sans-serif, font-size: 16px, color: #111">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`
      ].join('')
    })
  }
}