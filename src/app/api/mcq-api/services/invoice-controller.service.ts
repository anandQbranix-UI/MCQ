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

import { InvoiceDetailResponse } from '../models/invoice-detail-response';
import { InvoiceListingData } from '../models/invoice-listing-data';
import { InvoiceRequest } from '../models/invoice-request';
import { InvoiceResponse } from '../models/invoice-response';
import { InvoiceStatus } from '../models/invoice-status';
import { WorkEfforts } from '../models/work-efforts';

@Injectable({
  providedIn: 'root',
})
export class InvoiceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateInvoiceStatus
   */
  static readonly UpdateInvoiceStatusPath = '/v1/invoice/updatePartnerInvoiceStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateInvoiceStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateInvoiceStatus$Response(params: {
    invoiceId: string;
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<InvoiceResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.UpdateInvoiceStatusPath, 'put');
    if (params) {
      rb.query('invoiceId', params.invoiceId, {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateInvoiceStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateInvoiceStatus(params: {
    invoiceId: string;
    id: number;
    context?: HttpContext
  }
): Observable<InvoiceResponse> {

    return this.updateInvoiceStatus$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceResponse>) => r.body as InvoiceResponse)
    );
  }

  /**
   * Path part for operation saveInvoiceDetailsByPartner
   */
  static readonly SaveInvoiceDetailsByPartnerPath = '/v1/invoice/savePartnerInvoice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveInvoiceDetailsByPartner()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInvoiceDetailsByPartner$Response(params: {
    context?: HttpContext
    body: InvoiceRequest
  }
): Observable<StrictHttpResponse<InvoiceResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.SaveInvoiceDetailsByPartnerPath, 'post');
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
        return r as StrictHttpResponse<InvoiceResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveInvoiceDetailsByPartner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInvoiceDetailsByPartner(params: {
    context?: HttpContext
    body: InvoiceRequest
  }
): Observable<InvoiceResponse> {

    return this.saveInvoiceDetailsByPartner$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceResponse>) => r.body as InvoiceResponse)
    );
  }

  /**
   * Path part for operation getInvoices
   */
  static readonly GetInvoicesPath = '/v1/invoice/submittedInvoices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoices()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoices$Response(params: {
    partnerId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<InvoiceListingData>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetInvoicesPath, 'get');
    if (params) {
      rb.query('partnerId', params.partnerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InvoiceListingData>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInvoices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoices(params: {
    partnerId: number;
    context?: HttpContext
  }
): Observable<Array<InvoiceListingData>> {

    return this.getInvoices$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InvoiceListingData>>) => r.body as Array<InvoiceListingData>)
    );
  }

  /**
   * Path part for operation getInvoiceStatus
   */
  static readonly GetInvoiceStatusPath = '/v1/invoice/invoiceStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoiceStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceStatus$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<InvoiceStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetInvoiceStatusPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<InvoiceStatus>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInvoiceStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceStatus(params?: {
    context?: HttpContext
  }
): Observable<Array<InvoiceStatus>> {

    return this.getInvoiceStatus$Response(params).pipe(
      map((r: StrictHttpResponse<Array<InvoiceStatus>>) => r.body as Array<InvoiceStatus>)
    );
  }

  /**
   * Path part for operation getOwnersByPartners
   */
  static readonly GetOwnersByPartnersPath = '/v1/invoice/getOwnersByPartnerId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnersByPartners()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnersByPartners$Response(params: {
    partnerId: number;
    startDate: string;
    endDate: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WorkEfforts>>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetOwnersByPartnersPath, 'get');
    if (params) {
      rb.query('partnerId', params.partnerId, {});
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WorkEfforts>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnersByPartners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnersByPartners(params: {
    partnerId: number;
    startDate: string;
    endDate: string;
    context?: HttpContext
  }
): Observable<Array<WorkEfforts>> {

    return this.getOwnersByPartners$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WorkEfforts>>) => r.body as Array<WorkEfforts>)
    );
  }

  /**
   * Path part for operation getInvoiceByInvoiceId
   */
  static readonly GetInvoiceByInvoiceIdPath = '/v1/invoice/getInvoiceDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInvoiceByInvoiceId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceByInvoiceId$Response(params: {
    invoiceId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<InvoiceDetailResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InvoiceControllerService.GetInvoiceByInvoiceIdPath, 'get');
    if (params) {
      rb.query('invoiceId', params.invoiceId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InvoiceDetailResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInvoiceByInvoiceId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInvoiceByInvoiceId(params: {
    invoiceId: string;
    context?: HttpContext
  }
): Observable<InvoiceDetailResponse> {

    return this.getInvoiceByInvoiceId$Response(params).pipe(
      map((r: StrictHttpResponse<InvoiceDetailResponse>) => r.body as InvoiceDetailResponse)
    );
  }

}
