export type StudentAnswers = Record<string, any>; // Maps question IDs/types to answers

export interface AdditionalData {
    isSubmitted: boolean;
    isGenerated: boolean;
    receivedCode: boolean;
    studentAnswers: StudentAnswers;
}
