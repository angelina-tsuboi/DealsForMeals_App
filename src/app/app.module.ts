import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MaterialModule } from './shared/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { HomePage } from './components/home/home.page';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SideNavComponent } from './components/navs/side-nav/side-nav.component';
import { BaseNavComponent } from './components/navs/base-nav/base-nav.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CreatePostComponent } from './components/modals/create-post/create-post.component';
import { EditPostComponent } from './components/modals/edit-post/edit-post.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { FoodbanksComponent } from './components/foodbanks/foodbanks.component';
import { LocationsComponent } from './components/locations/locations.component';
import { StoresComponent } from './components/stores/stores.component';

// Material Imports
import { ViewBuisnessComponent } from './components/view-buisness/view-buisness.component';
import { ViewDealComponent } from './components/view-deal/view-deal.component';
import { AgmCoreModule } from '@agm/core';
import { AvatarModule } from 'ngx-avatar';
import { SettingsComponent } from './components/settings/settings.component';
import { ChipsSelectComponent } from './components/chips-select/chips-select.component';



@NgModule({
  declarations: [AppComponent, HomePage, SignUpComponent, SignInComponent, ProfileComponent, SideNavComponent, BaseNavComponent, EditProfileComponent, CreatePostComponent, EditPostComponent, BottomBarComponent, FoodbanksComponent, LocationsComponent, StoresComponent, ViewBuisnessComponent, ViewDealComponent, SettingsComponent, CreatePostComponent, ChipsSelectComponent],
  entryComponents: [CreatePostComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule, AngularFireStorageModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, MaterialModule, AgmCoreModule.forRoot({
    apiKey: environment.googleMapsAPIKey
  }), AvatarModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AngularFirestore, NativeGeocoder, Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}
