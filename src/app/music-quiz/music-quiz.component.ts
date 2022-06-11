import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MusicDataProvider, Record } from '../dataprovider/MusicDataProvider';

@Component({
  selector: 'app-music-quiz',
  templateUrl: './music-quiz.component.html',
  styleUrls: ['./music-quiz.component.scss']
})
export class MusicQuizComponent implements OnInit, OnDestroy {

  current?: Record;
  showAnswer = false;

  records: Record[] = [];
  audioAnswer = false;

  audio = new Audio();

  constructor(
    private dataProvider: MusicDataProvider,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.stop();
        this.unload();
        this.showAnswer = false;
      }
    })
    this.activatedRoute.params.subscribe(parameter => {
      this.audioAnswer = parameter['id'] === "3";
      this.records = this.dataProvider.getRecords(parameter['id']);
    })
  };

  ngOnDestroy(): void {
    this.stop();
    this.unload();
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

  unload(): void {
    this.audio.src = "";
    this.current = undefined;
  }

  solve(): void {
    this.showAnswer = true;
    if (this.audioAnswer) {
      this.loadAnswer();
      this.play();
    }
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

  loadAnswer(): void {
    this.stop();
    this.audio.src = this.current!.link;
    this.audio.load();
  }
}