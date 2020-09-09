import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements AfterViewInit {
  @ViewChild('loaderCanvas') loaderCanvas: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.loaderCanvas.nativeElement.height = '100';
    this.loaderCanvas.nativeElement.width = '100';
    this.createLoader();
  }

  createLoader() {
    const context: CanvasRenderingContext2D = this.loaderCanvas.nativeElement.getContext(
      '2d'
    );
    context.strokeStyle = '#e2e8f0';
    context.lineWidth = 10;
    context.arc(50, 50, 40, 0, Math.PI * 2, true);
    context.stroke();
    context.beginPath();
    context.strokeStyle = '#2b6cb0';
    context.arc(50, 50, 40, 0, 30, true);
    context.stroke();
  }
}
