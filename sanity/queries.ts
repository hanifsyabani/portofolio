import { defineQuery } from "next-sanity"

export const allAchievementQuery = defineQuery(`
  *[_type == "achievement" && isShow == true]{
    _id,
    name,
    slug,
    credentialId,
    issuingOrganization,
    type,
    category,
    urlCredential,
    issueDate,
    expirationDate,
    image
  } | order(issueDate desc)
`)


export const achievementBySlugQuery = defineQuery(`
  *[_type == "achievement" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    credentialId,
    issuingOrganization,
    type,
    category,
    urlCredential,
    issueDate,
    expirationDate,
    image
  }
`)

export const allCareerQuery = defineQuery(`
  *[_type == "career" && isShow == true]{
    _id,
    position,
    company,
    logo,
    location,
    locationType,
    type,
    startDate,
    endDate,
    industry,
    link,
    responsibilities,
    lessonsLearned,
    impact
  } | order(startDate desc)
`)


export const careerByIdQuery = defineQuery(`
  *[_type == "career" && _id == $id][0]{
    _id,
    position,
    company,
    logo,
    location,
    locationType,
    type,
    startDate,
    endDate,
    industry,
    link,
    responsibilities,
    lessonsLearned,
    impact
  }
`)