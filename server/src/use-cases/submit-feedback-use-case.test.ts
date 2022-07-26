import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbeck = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        
        await expect(submitFeedbeck.execute({
            type: "BUG",
            comment: "comment exemple",
            screenshot: 'data:image/png;base64,askjdhfoiawbekjadwiuwahrewbruhauybejhgbew4'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    
    it('should not be able to submit feedback without type', async () => {
        
        await expect(submitFeedbeck.execute({
            type: "",
            comment: "comment exemple",
            screenshot: 'data:image/png;base64,askjdhfoiawbekjadwiuwahrewbruhauybejhgbew4'
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without comment', async () => {
        
        await expect(submitFeedbeck.execute({
            type: "BUG",
            comment: "",
            screenshot: 'data:image/png;base64,askjdhfoiawbekjadwiuwahrewbruhauybejhgbew4'
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback with an invalid screenshot', async () => {
        
        await expect(submitFeedbeck.execute({
            type: "BUG",
            comment: "comment exemple",
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })

})