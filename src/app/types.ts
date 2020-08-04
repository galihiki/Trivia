export interface Questions {
    results: Array<QuestionData>;
  }
  
  export interface QuestionData {
    correct_answer: string;
    incorrect_answers: Array<string>;
    isLastQuestion: boolean;
    question: string;
    index: number;
  }

  export interface GameOverDialogData{
    correctAnswers: number;
    totalQuestions: number;
  }