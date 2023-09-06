const Feedback = require('../services/feedback.service');


exports.postCreateFeedback = async (req, res, next) => {
    try {
        reqObj = req.body
        const feedbackObject = new Feedback(reqObj)
        const createdFeedbackData = await feedbackObject.createFeedback()
        await res.status(200).send(createdFeedbackData);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};


exports.getRetrieveAllFeedback = async (req, res, next) => {
    try {
        const allFeedbackData = await Feedback.retrieveAllFeedback()
        await res.status(200).send(allFeedbackData);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};
