import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import TextComponent from './mantine/TextComponent';
import { format } from 'date-fns';

const IdentityCard = ({
  memberId,
  imgUrl,
  lastName,
  firstName,
  middleName,
  state,
  lga,
  town,
  placeOfBirth,
  village,
  familyName,
  gender,
  dob,
}) => {
  return (
    <div>
      <Card className="w-[500px] bg-[#F4A273] rounded-md">
        <CardHeader>
          <CardTitle className="text-center">ALAIGBO YOUTH FORUM</CardTitle>
        </CardHeader>
        <CardContent className="w-full ">
          <div className="flex space-x-2 w-full ">
            <div className="w-[200px] h-[200px] relative overflow-hidden">
              <Image src={imgUrl} fill priority className="object-cover" />
            </div>
            <div className=" ">
              <div>
                <div className="space-y-1">
                  <span className="text-xs">Surname</span>
                  <TextComponent text={lastName} fw={'bold'} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs">Other names</span>
                  <div className="flex space-x-2">
                    <TextComponent text={`${firstName} `} fw={'bold'} />
                    <TextComponent text={`${middleName} `} fw={'bold'} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs whitespace-nowrap">
                      State of origin
                    </span>
                    <TextComponent text={state} fw={'bold'} />
                  </div>
                  <div>
                    <span className="text-xs">LGA</span>
                    <TextComponent text={lga} fw={'bold'} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs whitespace-nowrap">
                      Member Type
                    </span>
                    <TextComponent fz={'sm'} text={'Executive'} fw={'bold'} />
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-center inline-block">
                      DOB
                    </span>
                    <TextComponent fz={'sm'} text={dob} fw={'bold'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent className="w-full">
          <div className="text-center">
            <p className="text-black uppercase">{`UIN: AYF${memberId}`}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityCard;
