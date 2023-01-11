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

import { MsaStatus } from '../models/msa-status';
import { SeekerAdminMsa } from '../models/seeker-admin-msa';
import { SkillSeekerMsaDto } from '../models/skill-seeker-msa-dto';

@Injectable({
  providedIn: 'root',
})
export class SeekerMsaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation uploadFile1
   */
  static readonly UploadFile1Path = '/v1/skillSeekerMSAController/uploadMSA';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFile1()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFile1$Response(params: {
    skillSeekerId: number;
    skillSeekerProjectId: number;
    jobId: string;
    ownerId: number;
    context?: HttpContext
    body?: {
'document': Array<Blob>;
}
  }
): Observable<StrictHttpResponse<SkillSeekerMsaDto>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.UploadFile1Path, 'post');
    if (params) {
      rb.query('skillSeekerId', params.skillSeekerId, {});
      rb.query('skillSeekerProjectId', params.skillSeekerProjectId, {});
      rb.query('jobId', params.jobId, {});
      rb.query('ownerId', params.ownerId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillSeekerMsaDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadFile1$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFile1(params: {
    skillSeekerId: number;
    skillSeekerProjectId: number;
    jobId: string;
    ownerId: number;
    context?: HttpContext
    body?: {
'document': Array<Blob>;
}
  }
): Observable<SkillSeekerMsaDto> {

    return this.uploadFile1$Response(params).pipe(
      map((r: StrictHttpResponse<SkillSeekerMsaDto>) => r.body as SkillSeekerMsaDto)
    );
  }

  /**
   * Path part for operation getMsaStatus
   */
  static readonly GetMsaStatusPath = '/v1/skillSeekerMSAController/msaStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMsaStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMsaStatus$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MsaStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.GetMsaStatusPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MsaStatus>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMsaStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMsaStatus(params?: {
    context?: HttpContext
  }
): Observable<Array<MsaStatus>> {

    return this.getMsaStatus$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MsaStatus>>) => r.body as Array<MsaStatus>)
    );
  }

  /**
   * Path part for operation getSkillSeekerMsaTemplate
   */
  static readonly GetSkillSeekerMsaTemplatePath = '/v1/skillSeekerMSAController/getSkillSeekerMsaTemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillSeekerMsaTemplate$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSeekerMsaTemplate$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.GetSkillSeekerMsaTemplatePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillSeekerMsaTemplate$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSeekerMsaTemplate$Json(params?: {
    context?: HttpContext
  }
): Observable<Blob> {

    return this.getSkillSeekerMsaTemplate$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillSeekerMsaTemplate$Pdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSeekerMsaTemplate$Pdf$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.GetSkillSeekerMsaTemplatePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/pdf',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillSeekerMsaTemplate$Pdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSeekerMsaTemplate$Pdf(params?: {
    context?: HttpContext
  }
): Observable<Blob> {

    return this.getSkillSeekerMsaTemplate$Pdf$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getMsaDetails
   */
  static readonly GetMsaDetailsPath = '/v1/skillSeekerMSAController/getMsaDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMsaDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMsaDetails$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SeekerAdminMsa>>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.GetMsaDetailsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SeekerAdminMsa>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMsaDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMsaDetails(params?: {
    context?: HttpContext
  }
): Observable<Array<SeekerAdminMsa>> {

    return this.getMsaDetails$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SeekerAdminMsa>>) => r.body as Array<SeekerAdminMsa>)
    );
  }

  /**
   * Path part for operation getMsaDetailsBySeeker
   */
  static readonly GetMsaDetailsBySeekerPath = '/v1/skillSeekerMSAController/getMsaDetailsBySeeker';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMsaDetailsBySeeker()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMsaDetailsBySeeker$Response(params: {
    skillSeekerId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SeekerAdminMsa>>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.GetMsaDetailsBySeekerPath, 'get');
    if (params) {
      rb.query('skillSeekerId', params.skillSeekerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SeekerAdminMsa>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMsaDetailsBySeeker$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMsaDetailsBySeeker(params: {
    skillSeekerId: number;
    context?: HttpContext
  }
): Observable<Array<SeekerAdminMsa>> {

    return this.getMsaDetailsBySeeker$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SeekerAdminMsa>>) => r.body as Array<SeekerAdminMsa>)
    );
  }

  /**
   * Path part for operation downloadAgreement
   */
  static readonly DownloadAgreementPath = '/v1/skillSeekerMSAController/downloadAgreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadAgreement$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadAgreement$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.DownloadAgreementPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `downloadAgreement$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadAgreement$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Blob> {

    return this.downloadAgreement$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadAgreement$Pdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadAgreement$Pdf$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SeekerMsaControllerService.DownloadAgreementPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/pdf',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `downloadAgreement$Pdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadAgreement$Pdf(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Blob> {

    return this.downloadAgreement$Pdf$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
