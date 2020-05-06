import { Directive, HostListener } from '@angular/core';

import { Subject } from 'rxjs';

@Directive({
    selector: 'input[appInput]',
})
export class InputDirective {

    public changes: Subject<void> = new Subject<void>();
    public focus: Subject<boolean> = new Subject<boolean>();

    @HostListener('focus')
    public triggerFocus(): void {
        this.focus.next(true);
    }

    @HostListener('blur')
    public triggerBlur(): void {
        this.changes.next();
        this.focus.next(false);
    }

}
