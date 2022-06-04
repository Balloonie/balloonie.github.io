import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MusicDataProvider {
    peopleRecords: Record[] = [
        {id: 1, question: "Wer ist das?", record: "/assets/Elton.mp3", answer: "Elton"},
        {id: 2, question: "Wer ist das?", record: "/assets/Uli Hoeness.mp3", answer: "Uli Hoeneß"},
        {id: 3, question: "Wer ist das?", record: "/assets/Jens Riewa.mp3", answer: "jens Riewa"},
        {id: 4, question: "Wer ist das?", record: "/assets/Nina Hagen.mp3", answer: "Nina Hagen"},
        {id: 5, question: "Wer ist das?", record: "/assets/Vanessa Mai.mp3", answer: "Vanessa Mai"},
        {id: 6, question: "Wer ist das?", record: "/assets/Arnold Schwarzenegger.mp3", answer: "Arnold Schwarzenegger"},
        {id: 7, question: "Wer ist das?", record: "/assets/Veronica Ferres.mp3", answer: "Veronica Ferres"},
        {id: 8, question: "Wer ist das?", record: "/assets/Olaf Scholz.mp3", answer: "Olaf Scholz"},
        {id: 9, question: "Wer ist das?", record: "/assets/Anke Engelke.mp3", answer: "Anke Engelke"},
        {id: 10, question: "Wer ist das?", record: "/assets/Annemarie Carpendale.mp3", answer: "Annemarie Carpendale"},
        {id: 11, question: "Wer ist das?", record: "/assets/Beatrice Egli.mp3", answer: "Beatrice Egli"},
        {id: 12, question: "Wer ist das?", record: "/assets/Carolin Kebekus.mp3", answer: "Carolin Kebekus"}
      ];

    getRecords(id: string): Record[] {
        switch(id) {
            case "1": {
                return this.peopleRecords;
            }
            default:
                return [];
        }
    }
}

export type Record = {
    id: number;
    question: string;
    record: string;
    answer: string;
}