/* tslint:disable */
/* eslint-disable */
import { OwnerSkillStatusEntity } from './owner-skill-status-entity';
import { SkillOwnerGenderEntity } from './skill-owner-gender-entity';
import { SkillOwnerMaritalStatusEntity } from './skill-owner-marital-status-entity';
import { SkillOwnerPortfolio } from './skill-owner-portfolio';
import { SkillPartnerEntity } from './skill-partner-entity';
import { VisaEntity } from './visa-entity';
export interface SkillOwnerEntity {
  aboutMe?: string;
  accountStatus?: boolean;
  address?: string;
  alternateEmail?: string;
  alternatePhoneNumber?: string;
  changedAt?: string;
  changedBy?: number;
  city?: string;
  createdAt?: string;
  createdBy?: number;
  deletedAt?: string;
  dob?: string;
  endDate?: string;
  expMonths?: number;
  expYears?: number;
  firstName?: string;
  gender?: SkillOwnerGenderEntity;
  image?: Array<string>;
  lastName?: string;
  linkedIn?: string;
  maritalStatus?: SkillOwnerMaritalStatusEntity;
  onBoardingDate?: string;
  ownerSkillStatusEntity?: OwnerSkillStatusEntity;
  permanentAddress?: string;
  phoneNumber?: string;
  portfolioUrl?: Array<SkillOwnerPortfolio>;
  primaryEmail: string;
  rateCard?: number;
  resume?: Array<string>;
  skillOwnerEntityId?: number;
  skillPartnerEntity?: SkillPartnerEntity;
  ssn?: string;
  startDate?: string;
  state?: string;
  status?: string;
  visaStatus?: VisaEntity;
}
