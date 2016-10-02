import { Injectable } from '@angular/core';

import { TextToSpeech, NativeAudio, Vibration } from 'ionic-native';

@Injectable()
export class NativeService { 
  tts(text: string): void {
    TextToSpeech.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log('tts: ' + text));
  }

  playAudio(fileName: string): void {
    NativeAudio.preloadSimple(fileName, 'audio/' + fileName + '.mp3')
      .then(() => {
        NativeAudio.play(fileName, () => {
          NativeAudio.unload(fileName);
        });
      })
      .catch((reason: any) => {
        var audio = new Audio('audio/' + fileName + '.mp3');
        audio.play();
      });
  }

  vibrate(): void {
    Vibration.vibrate(200);
  }
}
