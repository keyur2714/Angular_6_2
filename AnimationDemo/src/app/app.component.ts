import { Component,HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple-state.animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [STATE_ANIMATION,
  ON_OFF_2_ANIMATION,
  ROUND_ANTICLOCK_ANIMATION
]
})
export class AppComponent {
  title = 'app';

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute'; 

  state: string = "start";
  onOffState: string = "on";

  friendsName : string[] = ["keyur","denish","vinit"]; 

  toggleState():void{
    this.state = this.state == 'start' ? 'stop' : 'start';    
  }

  toggleRowState():void{
    this.onOffState = this.onOffState == 'on' ? 'off' : 'on';    
  }

}
