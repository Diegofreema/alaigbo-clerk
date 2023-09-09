import AccountProfile from '@/components/form/AccountProfile';
import InvestorProfile from '@/components/form/InvestorProfile';
import { currentUser } from '@clerk/nextjs';
import React from 'react';

const Investor = async () => {
  const user = await currentUser();

  return (
    <div className="min-h-screen py-[150px] w-[95%] md:w-[85%] mx-auto">
      <h1 className="text-5xl font-bold text-start">Onboarding</h1>
      <h5 className="font-semibold text-2xl  text-start">
        Complete your profile to continue
      </h5>
      <div>
        <InvestorProfile user={user} />
      </div>
    </div>
  );
};

export default Investor;
