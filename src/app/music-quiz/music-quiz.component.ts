import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataProvider, Record } from '../dataprovider/MusicDataProvider';

@Component({
  selector: 'app-music-quiz',
  templateUrl: './music-quiz.component.html',
  styleUrls: ['./music-quiz.component.scss']
})
export class MusicQuizComponent implements OnInit {

  current?: Record;
  showAnswer = false;

  records: Record[] = [];

  audio = new Audio();

  constructor(
    private dataProvider: MusicDataProvider,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameter => {
      console.log(parameter['id']);
      this.records = this.dataProvider.getRecords(parameter['id']);
    })
  };

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