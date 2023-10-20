import React from "react";

interface Profile {
  name: string;
  email: string;
  password: string;
  DOB: string;
  gender: "OPTIONAL" | string;
  role: "TRAVELLER" | string;
  contactNo: string;
  address: string;
  isAllFieldGiven: boolean;
  profileImg: string;
}

const UserProfile: React.FC<{ profileData: Profile }> = ({ profileData }) => {
  return (
    <div className="flex flex-col items-center mt-4 sm:mt-8">
      <div className="bg-white p-4 shadow-md rounded-lg sm:w-96">
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <img
              src={profileData.profileImg}
              alt="Profile Image"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mt-4">
          User Profile
        </h2>
        <p className="text-sm">
          <strong>Name:</strong> {profileData.name}
        </p>
        <p className="text-sm">
          <strong>Email:</strong> {profileData.email}
        </p>
        <p className="text-sm">
          <strong>Date of Birth:</strong> {profileData.DOB}
        </p>
        <p className="text-sm">
          <strong>Gender:</strong> {profileData.gender}
        </p>
        <p className="text-sm">
          <strong>Role:</strong> {profileData.role}
        </p>
        <p className="text-sm">
          <strong>Contact Number:</strong> {profileData.contactNo}
        </p>
        <p className="text-sm">
          <strong>Address:</strong> {profileData.address}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
