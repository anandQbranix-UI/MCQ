/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { OwnerTimeSheet } from '../models/owner-time-sheet';
import { SkillSeekerProject } from '../models/skill-seeker-project';
import { TimeSheet } from '../models/time-sheet';
import { TimeSheetResponse } from '../models/time-sheet-response';

@Injectable({
  providedIn: 'root',
})
export class OwnerTimeSheetControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateTimeSheet
   */
  static readonly UpdateTimeSheetPath = '/v1/OwnerSkillTimeSheet/updateTimeSheet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTimeSheet()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTimeSheet$Response(params: {
    context?: HttpContext
    body: TimeSheetResponse
  }
): Observable<StrictHttpResponse<TimeSheetResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OwnerTimeSheetControllerService.UpdateTimeSheetPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TimeSheetResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTimeSheet$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTimeSheet(params: {
    context?: HttpContext
    body: TimeSheetResponse
  }
): Observable<TimeSheetResponse> {

    return this.updateTimeSheet$Response(params).pipe(
      map((r: StrictHttpResponse<TimeSheetResponse>) => r.body as TimeSheetResponse)
    );
  }

  /**
   * Path part for operation insertTimeSheet
   */
  static readonly InsertTimeSheetPath = '/v1/OwnerSkillTimeSheet/insertTimeSheet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insertTimeSheet()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertTimeSheet$Response(params: {
    context?: HttpContext
    body: Array<OwnerTimeSheet>
  }
): Observable<StrictHttpResponse<Array<TimeSheetResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, OwnerTimeSheetControllerService.InsertTimeSheetPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TimeSheetResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `insertTimeSheet$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertTimeSheet(params: {
    context?: HttpContext
    body: Array<OwnerTimeSheet>
  }
): Observable<Array<TimeSheetResponse>> {

    return this.insertTimeSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TimeSheetResponse>>) => r.body as Array<TimeSheetResponse>)
    );
  }

  /**
   * Path part for operation getTimeSheet
   */
  static readonly GetTimeSheetPath = '/v1/OwnerSkillTimeSheet/getTimeSheet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeSheet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeSheet$Response(params: {
    weekStartDate: string;
    ownerId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<TimeSheetResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, OwnerTimeSheetControllerService.GetTimeSheetPath, 'get');
    if (params) {
      rb.query('weekStartDate', params.weekStartDate, {});
      rb.query('ownerId', params.ownerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TimeSheetResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeSheet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeSheet(params: {
    weekStartDate: string;
    ownerId: number;
    context?: HttpContext
  }
): Observable<Array<TimeSheetResponse>> {

    return this.getTimeSheet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TimeSheetResponse>>) => r.body as Array<TimeSheetResponse>)
    );
  }

  /**
   * Path part for operation getProjectDetails
   */
  static readonly GetProjectDetailsPath = '/v1/OwnerSkillTimeSheet/getSkillOwnerProjectDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjectDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectDetails$Response(params: {
    skillOwnerId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SkillSeekerProject>>> {

    const rb = new RequestBuilder(this.rootUrl, OwnerTimeSheetControllerService.GetProjectDetailsPath, 'get');
    if (params) {
      rb.query('skillOwnerId', params.skillOwnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SkillSeekerProject>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjectDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectDetails(params: {
    skillOwnerId: number;
    context?: HttpContext
  }
): Observable<Array<SkillSeekerProject>> {

    return this.getProjectDetails$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillSeekerProject>>) => r.body as Array<SkillSeekerProject>)
    );
  }

  /**
   * Path part for operation getOwnerTimeSheetDetails
   */
  static readonly GetOwnerTimeSheetDetailsPath = '/v1/OwnerSkillTimeSheet/getOwnerTimeSheetDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerTimeSheetDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerTimeSheetDetails$Response(params: {
    skillOwnerId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<TimeSheet>>> {

    const rb = new RequestBuilder(this.rootUrl, OwnerTimeSheetControllerService.GetOwnerTimeSheetDetailsPath, 'get');
    if (params) {
      rb.query('skillOwnerId', params.skillOwnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TimeSheet>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnerTimeSheetDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerTimeSheetDetails(params: {
    skillOwnerId: number;
    context?: HttpContext
  }
): Observable<Array<TimeSheet>> {

    return this.getOwnerTimeSheetDetails$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TimeSheet>>) => r.body as Array<TimeSheet>)
    );
  }

  /**
   * Path part for operation deleteTimeSheetData
   */
  static readonly DeleteTimeSheetDataPath = '/v1/OwnerSkillTimeSheet/deleteData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTimeSheetData()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTimeSheetData$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OwnerTimeSheetControllerService.DeleteTimeSheetDataPath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTimeSheetData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTimeSheetData(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.deleteTimeSheetData$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
