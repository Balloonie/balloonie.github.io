import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-tracker',
  templateUrl: './player-tracker.component.html',
  styleUrls: ['./player-tracker.component.scss']
})
export class PlayerTrackerComponent implements OnInit {

  players = [
    {id: 1, name: "Nancy", points: 0},
    {id: 2, name: "Mama", points: 0},
    {id: 3, name: "Minidudi", points: 0}
  ];

  constructor() { }

  ngOnInit(): void {
    for (var player of this.players) {
      player.points = 0;
    }
  }

  addPoint(id: number) {
    const player = this.players.find((obj) => {
      return obj.id === id;
    });
    player!.points += 1; 
  }

  removePoint(id: number) {
    const player = this.players.find((obj) => {
      return obj.id === id;
    });
    if (player!.points > 0) {
      player!.points -= 1; 
    }
  }

}
