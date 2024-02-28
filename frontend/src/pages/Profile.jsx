// src/components/UserProfile.js
import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md w-full">
        <div className="p-4">
          <div className="flex justify-center">
            <img
              src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png"
              alt="Profile Picture"
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-gray-600 mt-2">john.doe@example.com</p>
          </div>
          <div className="border-t border-gray-300 mt-4"></div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">User Information</h2>
            <div className="mt-2">
              <p>
                <span className="font-semibold">Username:</span> johndoe123
              </p>
              <p>
                <span className="font-semibold">Date of Birth:</span> January 1,
                1990
              </p>
              <p>
                <span className="font-semibold">Address:</span> 123 Main Street,
                City, Country
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-4"></div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Additional Information</h2>
            <div className="mt-2">
              <p>
                <span className="font-semibold">Interests:</span> Reading,
                Hiking, Photography
              </p>
              <p>
                <span className="font-semibold">Bio:</span> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Phasellus eget ultrices
                justo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
