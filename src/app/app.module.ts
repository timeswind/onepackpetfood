import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { isPlatformBrowser } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HomePageComponent } from './pages/home/home.page';

const appRoutes: Routes = [
  { path: 'test', component: HomePageComponent }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule.withServerTransition({ appId: 'onepackpetfood' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
      const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
      console.log(`Running ${platform} with appId=${appId}`);
    }
  }
