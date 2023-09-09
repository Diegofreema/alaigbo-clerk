'use server';
import prisma from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { MemberRole } from '@prisma/client';

import { NextResponse } from 'next/server';

export async function createMember({
  firstName,
  lastName,
  middleName,
  state,
  lga,
  town,
  placeOfBirth,
  village,
  familyName,
  gender,
  userId,
  interests,
  bio,
  imgUrl,
  dob,
  email,
  number,
  group,
}) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const user = await prisma.profile.findUnique({
    where: { email: email },
  });

  if (user) {
    return new NextResponse('User already exists', { status: 401 });
  }
  try {
    await prisma.profile.create({
      data: {
        email,
        firstName,
        lastName,
        middleName,
        state,
        lga,
        town,
        placeOfBirth,
        village,
        familyName,
        gender,
        role: MemberRole.MEMBER,
        interests,
        bio,
        imgUrl,
        dob,
        userId,
        number,
        isOnboarded: true,
        group: {
          create: { groupName: group },
        },
      },
      include: {
        group: true,
      },
    });
  } catch (error) {
    console.log(error);

    throw new Error('Failed to onboard user');
  }
}
export async function eventBooking(
  firstName,
  lastName,
  email,
  number,
  guest,
  reason,
  update,
  accommodation,
  prefix,
  location,
  participants
) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    await prisma.book.create({
      data: {
        firstName,
        lastName,
        email,
        number,
        guest,
        reason,
        update,
        accommodation,
        userId: id,
        prefix,
        location,
        participants,
      },
    });
  } catch (error) {
    throw new Error('Failed to Book event', 'Book error');
  }
}
export async function createInvestor(
  companyName,
  number,
  representativeName,
  email,
  industry,
  investmentPreference,
  investmentExperience,
  accreditation,
  userId
) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const user = await prisma.profile.findUnique({
    where: { email: email },
  });

  if (user) {
    return new NextResponse('User already exists', { status: 401 });
  }

  await prisma.investor.create({
    data: {
      companyName,
      userId,
      number,
      representativeName,
      email,
      industry,
      investmentPreference,
      investmentExperience,
      accreditation,
      role: MemberRole.INVESTOR,
      isOnboarded: true,
    },
  });

  try {
  } catch (error) {
    console.log(error);
    throw new Error('Failed to onboard', 'Investor error');
  }
}

export const fetchUserMember = async (id) => {
  try {
    const member = await prisma.profile.findUnique({
      where: { userId: id },
    });
    return member;
  } catch (error) {
    console.log(error);
  }
};
export const fetchInvestor = async (id) => {
  try {
    const investor = await prisma.investor.findUnique({
      where: { userId: id },
    });

    return investor;
  } catch (error) {
    console.log(error);
  }
};
