import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InputDirective } from './input.directive';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
})
export class InputComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {

    public currentValue: string;
    public hasFocus = false;
    public isDisabled = false;

    private isDestroyed = new Subject();

    @Input()
    public label: string;

    @Input()
    public placeholder = '';

    @Input()
    public name: string;

    @ViewChild(InputDirective, { static: false })
    private control: InputDirective;

    private hasChange: (value: string) => void = () => { };
    private isTouched = () => { };

    set value(value: string) {
        this.currentValue = value;
        this.hasChange(this.currentValue);
        this.isTouched();
    }

    get value(): string {
        return this.currentValue;
    }

    constructor(
        public input: NgControl,
    ) {
        this.input.valueAccessor = this;
    }

    public ngAfterViewInit(): void {
        this.control.changes
            .pipe(takeUntil(this.isDestroyed))
            .subscribe(() => this.isTouched());

        this.control.focus
            .pipe(takeUntil(this.isDestroyed))
            .subscribe((focus) => this.hasFocus = focus);
    }

    public ngOnDestroy(): void {
        this.isDestroyed.next();
        this.isDestroyed.complete();
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.hasChange = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: any): void {
        this.currentValue = value;
    }

}
