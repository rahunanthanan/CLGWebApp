import Steps from "@/components/Steps";

import PersonalInformation from "./PersonalInformation";

const Admission = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Steps activeId={1} />

        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Admission Form
          </h1>
        </div>

        <div className="mt-3">
          <PersonalInformation />
        </div>
      </div>
    </div>
  );
};

export default Admission;
