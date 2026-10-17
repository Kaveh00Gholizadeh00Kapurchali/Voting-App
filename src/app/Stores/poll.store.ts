import { Injectable } from "@angular/core";
import { signal } from "@angular/core";

export interface Ioption{
    id : number;
    text: string;
    votes:number;
}

Injectable({providedIn:'root'});

export class PollStore{
    private  _options = signal<Ioption[]>([])

    options = this._options.asReadonly();
}