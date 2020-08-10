import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MissionServiceService } from '../mission-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent implements OnInit, OnDestroy {

  @Input() astronaut: string;

  mission = '<no mission announced>';

  confirmed = false;
  announced = false;

  subscription: Subscription;

  constructor(private missionService: MissionServiceService) {
    this.subscription = missionService.missionAnnounced$.subscribe(//subject => asObservable => subscribe 得到 subscription
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnInit(): void {
  }

}
