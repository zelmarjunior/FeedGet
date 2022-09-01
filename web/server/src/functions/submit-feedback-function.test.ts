import { SubmitFeedbackFunction } from "./submit-feedback-function";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackFunction(
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
  //Teste 1
  it('should be able to submit a feeback', async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "exemple a comment",
      screenshot: "data:image/png;base64assdasdasadsads",
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();

  });

  //Teste 2
  it('should not be able to submit feedback without type', async () => {

    await expect(submitFeedback.execute({
      type: "",
      comment: "exemple a comment",
      screenshot: "data:image/png;base64assdasdasadsads",
    })).rejects.toThrow();
  });

  //Teste 3
  it('should not be able to submit feedback without comment', async () => {

    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64assdasdasadsads",
    })).rejects.toThrow();
  });

  //Teste 4
  it('should not be able to submit feedback with invalid screenshot', async () => {

    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "Está tudo bugado!",
      screenshot: "teste.jpg",
    })).rejects.toThrow();
  });
});