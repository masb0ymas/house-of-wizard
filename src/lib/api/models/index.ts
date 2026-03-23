/* eslint-disable @typescript-eslint/no-namespace */
import type {
  Webinar as WebinarModel,
  WebinarBatchEntity as WebinarBatchEntityModel,
  WebinarPrivatePlan as WebinarPrivatePlanModel,
} from './webinar'

export namespace Models {
  export type Webinar = WebinarModel
  export type WebinarPrivatePlan = WebinarPrivatePlanModel
  export type WebinarBatchEntity = WebinarBatchEntityModel
}
