import {
  AnimationTriggerMetadata,
  animate,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const expand: AnimationTriggerMetadata = trigger('expand', [
  state('void', style({ height: '0px' })),
  transition(':enter, :leave', animate('.3s 0s ease-in-out'))
]);
