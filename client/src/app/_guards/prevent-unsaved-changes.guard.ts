import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReviewEditComponent } from '../reviews/review-edit/review-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: ReviewEditComponent): boolean {
    // if(component.editForm.dirty){
    if(component){
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
    }
    return true;
  }


}