import * as z from 'zod';

export const userValidation = z.object({
  firstName: z.string({ required_error: 'First name is required' }).min(3),
  lastName: z.string({ required_error: 'Last name is required' }).min(3),
  middleName: z.string({ required_error: 'Middle name is required' }).min(3),
  email: z.string({ required_error: 'Email is required' }).min(3).email(),
  number: z
    .string({ required_error: 'Phone number is required' })
    .min(11)
    .max(11),
  state: z.string({ required_error: 'State is required' }),
  lga: z.string({ required_error: 'LGA is required' }).min(3),
  town: z.string({ required_error: 'Town is required' }).min(3),
  placeOfBirth: z
    .string({ required_error: 'Place of birth is required' })
    .min(3),
  village: z.string({ required_error: 'Village is required' }).min(3),
  familyName: z.string({ required_error: 'Family name is required' }).min(3),
  gender: z.string({ required_error: 'Gender is required' }).min(3),

  interests: z.string({ required_error: 'Interests is required' }).min(3),
  bio: z
    .string({ required_error: 'Bio is required' })
    .min(3)
    .max(100)
    .optional(),
  imgUrl: z
    .string({ required_error: 'Image url is required' })
    .min(3)
    .nonempty(),
  dob: z.date({ required_error: 'Date of birth is required' }),
  memberId: z.string({ required_error: 'Member id is required' }),
  group: z.string({ required_error: 'Group is required' }).min(3),
});

export const investorValidation = z.object({
  companyName: z.string({ required_error: 'Company name is required' }).min(3),
  number: z
    .string({ required_error: 'Phone number is required' })
    .min(11)
    .max(11),
  representativeName: z
    .string({ required_error: 'Representative name is required' })
    .min(3),
  email: z.string({ required_error: 'Email is required' }).min(3).email(),
  industry: z.string({ required_error: 'Industry is required' }).min(3),
  investmentPreference: z
    .string({ required_error: 'Investment preference is required' })
    .min(3)
    .optional(),
  investmentExperience: z
    .string({ required_error: 'Investment experience is required' })
    .min(3)
    .optional(),
  accreditation: z
    .string({ required_error: 'Accreditation is required' })
    .min(3),
});

export const bookingValidation = z.object({
  firstName: z.string({ required_error: 'First name is required' }).min(3),
  lastName: z.string({ required_error: 'Last name is required' }).min(3),
  middleName: z.string({ required_error: 'Middle name is required' }).min(3),
  email: z.string({ required_error: 'Email is required' }).min(3).email(),
  number: z
    .string({ required_error: 'Phone number is required' })
    .min(11)
    .max(11),
  location: z
    .string({ required_error: 'Location is required' })
    .min(3)
    .optional(),
  accommodation: z
    .string({ required_error: 'Accommodation is required' })
    .min(2),
  participants: z
    .string({ required_error: 'Participant is required' })
    .min(3)
    .optional(),
  guest: z.string({ required_error: 'Guest is required' }).min(2),
  prefix: z.string({ required_error: 'Prefix is required' }).min(2),
  reason: z.string({ required_error: 'Reason is required' }).min(3).optional(),
  update: z.string({ required_error: 'Update is required' }).min(3),
});
