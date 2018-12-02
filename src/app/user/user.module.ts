import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ProfileComponent, UserAvatarComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
