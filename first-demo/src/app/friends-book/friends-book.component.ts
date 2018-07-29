import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-book',
  templateUrl: './friends-book.component.html',
  styleUrls: ['./friends-book.component.css']
})
export class FriendsBookComponent implements OnInit {

  selectedFriend : string = '';
  friendsList: string[] = ["keyur","denish","vinit"];

  constructor() { }

  ngOnInit() {
    this.friendsList.push("sandip");
    this.friendsList.push("amit");
  }

  setSelectedFriend(friend):void{
    console.log("==="+friend);
    this.selectedFriend = friend;
  }
}
