import { Component, Input } from '@angular/core';

import { Data, Header } from 'Input'

@Component({
    selector: 's-table',
    template: '<div>Table for: {{data | json}} and {{header | json}}</div>'
})
export class Table {

    @Input() data: Data;
    @Input() header: Header;

    //Implementation of sorting
}

export const declarations = [ Table ];

export const Input = { Data, Header };