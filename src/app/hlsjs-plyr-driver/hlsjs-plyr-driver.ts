import * as Hls from 'hls.js';
import Plyr from 'plyr';
import {PlyrDriver, PlyrDriverCreateParams, PlyrDriverDestroyParams, PlyrDriverUpdateSourceParams} from 'ngx-plyr';

export class HlsjsPlyrDriver implements PlyrDriver {
  private loaded = false;
  // @ts-ignore
  hls = new Hls();

  constructor(private autoload: boolean) {}

  create(params: PlyrDriverCreateParams) {
    this.hls.attachMedia(params.videoElement);

    return new Plyr(params.videoElement, params.options);
  }

  updateSource(params: PlyrDriverUpdateSourceParams) {
    if (this.autoload) {
      this.load(params.source.sources[0].src);
    } else {
      // poster does not work with autoload
      params.videoElement.poster = params.source.poster;
    }
  }

  destroy(params: PlyrDriverDestroyParams) {
    params.plyr.destroy();
    this.hls.detachMedia();
  }

  load(src: string) {
    if (!this.loaded) {
      this.loaded = true;
      this.hls.loadSource(src);
    }
  }

}
