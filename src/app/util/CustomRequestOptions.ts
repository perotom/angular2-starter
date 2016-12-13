import { Injectable } from '@angular/core';
import {BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';

export const baseUrlApi = 'http://localhost:8080';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

  merge(options?:RequestOptionsArgs):RequestOptions {
    if (!options.headers) {
      options.headers = new Headers();
    }
    options.headers.append('Accept', 'application/json');
    options.headers.append('Content-Type', 'application/json');
    options.url = baseUrlApi + options.url;
    return super.merge(options);
  }

}
