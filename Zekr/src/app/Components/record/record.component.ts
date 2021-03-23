import { Component, OnInit , ElementRef} from '@angular/core';
import { AudioRecordingService } from "src/app/Services/AudioRecordingService";

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {


  isRecording = false;
  recordedTime;
  blobUrl;
  stopRec :boolean = true;
  numberRec = 1;
  constructor(private audioRecordingService: AudioRecordingService, private sanitizer: DomSanitizer,private elementRef:ElementRef) {



    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
      if(!this.isRecording){
        setInterval(()=>{
          alert('End' + this.recordedTime)
        }, 2 * this.recordedTime)
      }
    });
    // this.elementRef.nativeElement.querySelector('myaudio')
    // .addEventListener('ended', this.onendedFun.bind(this));
    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
    });
  }
  ngOnInit(){

  }
  onendedFun(){
    debugger
    this.numberRec+=1;
    if(this.numberRec == 2)
    this.audioRecordingService.stopRecording();
  }
  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();


    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }


}
