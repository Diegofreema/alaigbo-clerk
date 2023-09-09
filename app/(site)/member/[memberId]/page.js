import EventCard from '@/components/Events/EventCard';
import IdentityCard from '@/components/IdentityCard';
import MemberSidebar from '@/components/MemberSidebar';
import { fetchInvestor, fetchUserMember } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const MemberPage = async () => {
  const { id } = await currentUser();
  const member = await fetchUserMember(id);

  const isCompany = await fetchInvestor(id);
  console.log(isCompany?.isOnboarded, member?.isOnboarded);
  if (!isCompany?.isOnboarded && !member?.isOnboarded) redirect('/accountType');
  console.log(member);
  return (
    <div className="h-[100vh] w-full relative grid grid-cols-12  ">
      <div className="hidden md:!flex col-span-2">
        <MemberSidebar imgUrl={member?.imgUrl} />
      </div>
      <div className=" col-span-10">
        <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
          <h1 className="text-3xl font-bold text-start mt-24">{`Welcome ${member?.firstName}`}</h1>
          <div className="flex space-x-16">
            <IdentityCard {...member} />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
