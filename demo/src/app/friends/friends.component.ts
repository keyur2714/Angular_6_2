import { Component } from '@angular/core';
@Component({
    selector : 'app-friends',
    template: `
        <h1>Hello Friends...!</h1>
        {{friendsNameList}}
        <ul>
            <li *ngFor="let f of friendsNameList;let i=index">
                {{f}} ==> {{i}}
            </li>
        </ul>
    `,
    styles: ['h1{color: red;}']
})
export class FriendsComponent {
    friendsNameList : string[] = [
        "keyur",
        "denish",
        "vinit"
    ];
}