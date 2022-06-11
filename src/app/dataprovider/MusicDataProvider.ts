import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MusicDataProvider {
    peopleRecords: Record[] = [
        {id: 1, question: "Wer ist das?", record: "/assets/peoplequiz/Elton.mp3", answer: "Elton", link: ""},
        {id: 2, question: "Wer ist das?", record: "/assets/peoplequiz/Uli Hoeness.mp3", answer: "Uli Hoeneß", link: ""},
        {id: 3, question: "Wer ist das?", record: "/assets/peoplequiz/Jens Riewa.mp3", answer: "Jens Riewa", link: ""},
        {id: 4, question: "Wer ist das?", record: "/assets/peoplequiz/Nina Hagen.mp3", answer: "Nina Hagen", link: ""},
        {id: 5, question: "Wer ist das?", record: "/assets/peoplequiz/Vanessa Mai.mp3", answer: "Vanessa Mai", link: ""},
        {id: 6, question: "Wer ist das?", record: "/assets/peoplequiz/Arnold Schwarzenegger.mp3", answer: "Arnold Schwarzenegger", link: ""},
        {id: 7, question: "Wer ist das?", record: "/assets/peoplequiz/Veronica Ferres.mp3", answer: "Veronica Ferres", link: ""},
        {id: 8, question: "Wer ist das?", record: "/assets/peoplequiz/Olaf Scholz.mp3", answer: "Olaf Scholz", link: ""},
        {id: 9, question: "Wer ist das?", record: "/assets/peoplequiz/Anke Engelke.mp3", answer: "Anke Engelke", link: ""},
        {id: 10, question: "Wer ist das?", record: "/assets/peoplequiz/Annemarie Carpendale.mp3", answer: "Annemarie Carpendale", link: ""},
        {id: 11, question: "Wer ist das?", record: "/assets/peoplequiz/Beatrice Egli.mp3", answer: "Beatrice Egli", link: ""},
        {id: 12, question: "Wer ist das?", record: "/assets/peoplequiz/Carolin Kebekus.mp3", answer: "Carolin Kebekus", link: ""}
      ];

      movieRecords: Record[] = [
        {id: 1, question: "Woher kommt das?", record: "/assets/moviequiz/Herr der Ringe.mp3", answer: "Herr der Ringe", link: ""},
        {id: 2, question: "Woher kommt das?", record: "/assets/moviequiz/Oceans Eleven.mp3", answer: "Ocean's Eleven", link: ""},
        {id: 3, question: "Woher kommt das?", record: "/assets/moviequiz/Koenig der Loewen.mp3", answer: "König der Löwen", link: ""},
        {id: 4, question: "Woher kommt das?", record: "/assets/moviequiz/Avengers.mp3", answer: "Avengers", link: ""},
        {id: 5, question: "Woher kommt das?", record: "/assets/moviequiz/Mission Impossible.mp3", answer: "Mission Impossible", link: ""},
        {id: 6, question: "Woher kommt das?", record: "/assets/moviequiz/Die Unglaublichen.mp3", answer: "Die Unglaublichen", link: ""},
        {id: 7, question: "Woher kommt das?", record: "/assets/moviequiz/Catch me if you can.mp3", answer: "Catch me if you can", link: ""},
        {id: 8, question: "Woher kommt das?", record: "/assets/moviequiz/Harry Potter.mp3", answer: "Harry Potter", link: ""},
        {id: 9, question: "Woher kommt das?", record: "/assets/moviequiz/Fluch der Karibik.mp3", answer: "Fluch der Karibik", link: ""},
        {id: 10, question: "Woher kommt das?", record: "/assets/moviequiz/Star Wars.mp3", answer: "Star Wars", link: ""},
        {id: 11, question: "Woher kommt das?", record: "/assets/moviequiz/Mulan.mp3", answer: "Mulan", link: ""},
        {id: 12, question: "Woher kommt das?", record: "/assets/moviequiz/Kung Fu Panda.mp3", answer: "Kung Fu Panda", link: ""}
      ];

      reverseRecords: Record[] = [
        {id: 1, question: "Welcher Song ist das?", record: "/assets/songquiz/YouSpinMeRoundReverse.mp3", answer: "Dead or Alive - You spin me round", link: "/assets/songquiz/YouSpinMeRoundAnswer.mp3"},
        {id: 2, question: "Welcher Song ist das?", record: "/assets/songquiz/SateliteReverse.mp3", answer: "Lena Meyer-Landrut - Satelite", link: "/assets/songquiz/SateliteAnswer.mp3"},
        {id: 3, question: "Welcher Song ist das?", record: "/assets/songquiz/ShesGotThatLightReverse.mp3", answer: "Orange Blue - Shes Got That Light", link: "/assets/songquiz/ShesGotThatLightAnswer.mp3"},
        {id: 4, question: "Welcher Song ist das?", record: "/assets/songquiz/HelloReverse.mp3", answer: "Adele - Hello", link: "/assets/songquiz/HelloAnswer.mp3"},
        {id: 5, question: "Welcher Song ist das?", record: "/assets/songquiz/ShakeItOffReverse.mp3", answer: "Taylor Swift - Shake it off", link: "/assets/songquiz/ShakeItOffAnswer.mp3"},
        {id: 6, question: "Welcher Song ist das?", record: "/assets/songquiz/ScatmanReverse.mp3", answer: "Scatman - Ski Ba Bop Ba Dop Bop", link: "/assets/songquiz/ScatmanAnswer.mp3"},
        {id: 7, question: "Welcher Song ist das?", record: "/assets/songquiz/FinalCountdownReverse.mp3", answer: "Europe - The Final Countdown", link: "/assets/songquiz/FinalCountdownAnswer.mp3"},
        {id: 8, question: "Welcher Song ist das?", record: "/assets/songquiz/PerfectReverse.mp3", answer: "Ed Sheeran - Perfect", link: "/assets/songquiz/PerfectAnswer.mp3"},
        {id: 9, question: "Welcher Song ist das?", record: "/assets/songquiz/StayinAliveReverse.mp3", answer: "Bee Gees - Stayin Alive", link: "/assets/songquiz/StayinAliveAnswer.mp3"},
        {id: 10, question: "Welcher Song ist das?", record: "/assets/songquiz/DancingQueenReverse.mp3", answer: "Abba - Dancing Queen", link: "/assets/songquiz/DancingQueenAnswer.mp3"},
        {id: 11, question: "Welcher Song ist das?", record: "/assets/songquiz/WeWillRockYouReverse.mp3", answer: "Queen - We will rock you", link: "/assets/songquiz/WeWillRockYouAnswer.mp3"},
        {id: 12, question: "Welcher Song ist das?", record: "/assets/songquiz/LetMeEntertainYouReverse.mp3", answer: "Robbie Williams - Let me entertain you", link: "/assets/songquiz/LetMeEntertainYouAnswer.mp3"}
      ];

    getRecords(id: string): Record[] {
        switch(id) {
            case "1": {
                return this.peopleRecords;
            }
            case "2": {
                return this.movieRecords;
            }
            case "3": {
                return this.reverseRecords
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
    link: string;
}