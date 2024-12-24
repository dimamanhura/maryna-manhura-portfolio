import { Fragment } from "react";
import Image from "next/image";
import { fetchCompanies } from "@/db/queries/companies";
import DownloadButton from "@/components/DownloadButton";
import BannerWrapper from "@/components/BannerWrapper";

const PortfolioBanner = async () => {
  const companies = await fetchCompanies();

  return (
    <BannerWrapper>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-medium">My Portfolio</h1>
          <p className="text-2xl">Selected works from 2020 to the present.</p>
          <div>
            <DownloadButton />
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
    </BannerWrapper>
  );
};

export default PortfolioBanner;
