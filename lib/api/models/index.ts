/* eslint-disable @typescript-eslint/no-namespace */

import type { Role as RoleModel } from './role'
import type { Session as SessionModel } from './session'
import type { User as UserModel } from './user'
import type {
  WebinarBatchEntity as WebinarBatchEntityModel,
  Webinar as WebinarModel,
  WebinarPrivatePlan as WebinarPrivatePlanModel,
} from './webinar'

export namespace Models {
  export type User = UserModel
  export type Role = RoleModel
  export type Session = SessionModel
  export type Webinar = WebinarModel
  export type WebinarPrivatePlan = WebinarPrivatePlanModel
  export type WebinarBatchEntity = WebinarBatchEntityModel
}
