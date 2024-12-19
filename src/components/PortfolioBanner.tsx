import { fetchCompanies } from "@/db/queries/companies";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Fragment } from "react";
import { FaDownload } from "react-icons/fa";

const PortfolioBanner = async () => {
  const companies = await fetchCompanies();

  return (
    <div className="bg-[#DEE3FF] py-16 px-20 rounded-3xl mb-16 grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-medium">My Portfolio</h1>
        <p className="text-2xl">Selected works from 2020 to the present.</p>
        <div>
          <Button startContent={<FaDownload />} className="bg-white">
            CV / Resume
          </Button>  
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {companies.map((company, index) => (
          <Fragment key={company.id}>
            {(index + 1) % 2 === 1 && (<div />)}
            <div className="h-10 w-3/4 relative">
              <Image
                className="object-contain object-left"
                fill
                src={`${company.logoBlack}`}
                alt={company.name}
              />
            </div>
            {(index + 1) % 2 === 0 && (<div />)}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default PortfolioBanner;
