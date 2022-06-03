import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-quiz',
  templateUrl: './music-quiz.component.html',
  styleUrls: ['./music-quiz.component.scss']
})
export class MusicQuizComponent implements OnInit {

  current?: Record;
  showAnswer = false;

  records: Record[] = [
    {id: 1, record: "/assets/test.wav", question: "Hallo", answer: "Bla"},
    {id: 2, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 3, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 4, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 5, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 6, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 7, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 8, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 9, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 10, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 11, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 12, record: "/assets/test.wav", question: "Test", answer: "Bla"},
    {id: 13, record: "/assets/test.wav", question: "Test", answer: "Bla"},
  ];

  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    
  }

  play(): void {
    if (this.current != null) {
      this.audio.play();
    }
  }

  pause(): void {
    if (this.current != null) {
      this.audio.pause();
    }
  }

  stop(): void {
    if (this.current != null) {
      this.audio.load();
    }
  }

  solve(): void {
    this.showAnswer = true;
  }

  load(id: number): void {
    this.showAnswer = false;
    this.stop();
    const record = this.records.find((obj) => {
      return obj.id === id;
    });

    this.current = record;
    this.audio.src = record!.record;
    this.audio.load();
  }
}

type Record = {
  id: number;
  record: string;
  question: string;
  answer: string;
}
