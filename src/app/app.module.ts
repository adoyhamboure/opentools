import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ToastrModule } from 'ngx-toastr';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: (): Promise<any> => import('highlight.js/lib/core'),
        lineNumbersLoader: (): Promise<any> => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: (): Promise<any> => import('highlight.js/lib/languages/typescript'),
          css: (): Promise<any> => import('highlight.js/lib/languages/css'),
          xml: (): Promise<any> => import('highlight.js/lib/languages/xml'),
        },
      },
    },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {}
