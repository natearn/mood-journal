// Define the basic interface

// TODO: implement these in separate modules
// TODO: figure out how firebase sessions work

// Register
export const register = (email, password) => {
  // return a session
  return Promise.reject(new Error('not implemented'));
};

// Login
export const login = (email, password) => {
  // return a session
  return Promise.reject(new Error('not implemented'));
};

// Get survey questions
export const getSurvey = (session) => {
  // return a survey
  return Promise.reject(new Error('not implemented'));
};

// Submit survey answers
export const submitSurvey = (session, surveyId, answers) => {
  // return confirmation
  return Promise.reject(new Error('not implemented'));
};

// Add a question
export const addQuestion = (session, surveyId, question) => {
  // return confirmation
  return Promise.reject(new Error('not implemented'));
};

// Remove a question
export const addQuestion = (session, surveyId, question) => {
  // return confirmation
  return Promise.reject(new Error('not implemented'));
};

// TODO: define analytics api
