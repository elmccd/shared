import { Component, Input } from '@angular/core';

import { Text } from 'Input'

@Component({
    selector: 's-hint',
    template: '<span>Hint: {{text}}</span>'
})
export class Hint {
    
    @Input() text: Text = '';
}

export const declarations = [ Hint ];

export const Input = { Text };