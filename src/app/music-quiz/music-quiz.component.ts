import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-quiz',
  templateUrl: './music-quiz.component.html',
  styleUrls: ['./music-quiz.component.scss']
})
export class MusicQuizComponent implements OnInit {

  songs = [
    {id: 1, song: "/assets/test.wav"},
    {id: 2, song: "/assets/test2.wav"}
  ];

  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    
  }

  play(): void {
    this.audio.play();
  }

  pause(): void {
    this.audio.pause();
  }

  stop(): void {
    this.audio.load();
  }

  load(id: number): void {
    this.stop();
    const song = this.songs.find((obj) => {
      return obj.id === id;
    });
    this.audio.src = song!.song;
    this.audio.load();
  }

}
