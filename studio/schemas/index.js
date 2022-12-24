import {availabilitySchema} from './availability'
import {experienceSchema} from './experience'
import {industrySchema} from './industry'
import {publicationSchema} from './publication'
import {reviewSchema} from './review'
import {roleSchema} from './role'
import {skillSchema} from './skill'
import {socialProfileSchema} from './socialProfile'
import {specializationSchema} from './specialization'
import {userSchema} from './userSchema'

export const schemaTypes = [
  userSchema,
  specializationSchema,
  socialProfileSchema,
  skillSchema,
  roleSchema,
  reviewSchema,
  industrySchema,
  experienceSchema,
  publicationSchema,
  availabilitySchema,
]
