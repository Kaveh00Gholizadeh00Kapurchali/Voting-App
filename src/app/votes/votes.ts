import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PollStore } from '../Stores/poll.store';

@Component({
  imports: [FormsModule],
  selector: 'app-votes',
  styleUrl: './votes.css',
  templateUrl: './votes.html',
})
export class Votes {
  newOption = '';

  store = inject(PollStore);
  
  addOption(){
    if(!this.newOption.trim()) return;
    this.store.addOption(this.newOption);
    this.newOption = ''; 
  }

  getPercentage(votes: number){
    const total = this.store.totalVotes();
    return total ? (votes / total) * 100 : 0 ;
  }
}
