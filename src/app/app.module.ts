import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DesignModule } from './design/design.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CharacterComponent } from './character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        CharacterComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        DesignModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
