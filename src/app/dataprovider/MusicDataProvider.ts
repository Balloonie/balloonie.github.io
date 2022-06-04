import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MusicDataProvider {
    peopleRecords: Record[] = [
        {id: 1, question: "Wer ist das?", record: "/assets/peoplequiz/Elton.mp3", answer: "Elton"},
        {id: 2, question: "Wer ist das?", record: "/assets/peoplequiz/Uli Hoeness.mp3", answer: "Uli Hoeneß"},
        {id: 3, question: "Wer ist das?", record: "/assets/peoplequiz/Jens Riewa.mp3", answer: "Jens Riewa"},
        {id: 4, question: "Wer ist das?", record: "/assets/peoplequiz/Nina Hagen.mp3", answer: "Nina Hagen"},
        {id: 5, question: "Wer ist das?", record: "/assets/peoplequiz/Vanessa Mai.mp3", answer: "Vanessa Mai"},
        {id: 6, question: "Wer ist das?", record: "/assets/peoplequiz/Arnold Schwarzenegger.mp3", answer: "Arnold Schwarzenegger"},
        {id: 7, question: "Wer ist das?", record: "/assets/peoplequiz/Veronica Ferres.mp3", answer: "Veronica Ferres"},
        {id: 8, question: "Wer ist das?", record: "/assets/peoplequiz/Olaf Scholz.mp3", answer: "Olaf Scholz"},
        {id: 9, question: "Wer ist das?", record: "/assets/peoplequiz/Anke Engelke.mp3", answer: "Anke Engelke"},
        {id: 10, question: "Wer ist das?", record: "/assets/peoplequiz/Annemarie Carpendale.mp3", answer: "Annemarie Carpendale"},
        {id: 11, question: "Wer ist das?", record: "/assets/peoplequiz/Beatrice Egli.mp3", answer: "Beatrice Egli"},
        {id: 12, question: "Wer ist das?", record: "/assets/peoplequiz/Carolin Kebekus.mp3", answer: "Carolin Kebekus"}
      ];

      movieRecords: Record[] = [
        {id: 1, question: "Woher kommt das?", record: "/assets/moviequiz/Herr der Ringe.mp3", answer: "Herr der Ringe"},
        {id: 2, question: "Woher kommt das?", record: "/assets/moviequiz/Oceans Eleven.mp3", answer: "Ocean's Eleven"},
        {id: 3, question: "Woher kommt das?", record: "/assets/moviequiz/Koenig der Loewen.mp3", answer: "König der Löwen"},
        {id: 4, question: "Woher kommt das?", record: "/assets/moviequiz/Avengers.mp3", answer: "Avengers"},
        {id: 5, question: "Woher kommt das?", record: "/assets/moviequiz/Mission Impossible.mp3", answer: "Mission Impossible"},
        {id: 6, question: "Woher kommt das?", record: "/assets/moviequiz/Die Unglaublichen.mp3", answer: "Die Unglaublichen"},
        {id: 7, question: "Woher kommt das?", record: "/assets/moviequiz/Catch me if you can.mp3", answer: "Catch me if you can"},
        {id: 8, question: "Woher kommt das?", record: "/assets/moviequiz/Harry Potter.mp3", answer: "Harry Potter"},
        {id: 9, question: "Woher kommt das?", record: "/assets/moviequiz/Fluch der Karibik.mp3", answer: "Fluch der Karibik"},
        {id: 10, question: "Woher kommt das?", record: "/assets/moviequiz/Star Wars.mp3", answer: "Star Wars"},
        {id: 11, question: "Woher kommt das?", record: "/assets/moviequiz/Mulan.mp3", answer: "Mulan"},
        {id: 12, question: "Woher kommt das?", record: "/assets/moviequiz/Kung Fu Panda.mp3", answer: "Kung Fu Panda"}
      ];

    getRecords(id: string): Record[] {
        switch(id) {
            case "1": {
                return this.peopleRecords;
            }
            case "2": {
                return this.movieRecords;
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