import React from "react";
import profileImag from "../../assets/user.png";

function AddNewStudent() {
  return (
    <div className="max-w mx-auto p-20 border">
      <div className="bg-white   border-2 rounded ">
      <div className="bg-gradient-to-b from-white via-rose-50 to-rose-50 p-2 border-b-2 ">
  <h2 className="text-2xl font-bold mb-4 text-cyan-500 px-8">
    Add Student
  </h2>
</div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Admission No.
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="admissionNo"
                  type="text"
                  placeholder="Admission No."
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Father Name
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="fatherName"
                  type="text"
                  placeholder="Father Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mother Name
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="motherName"
                  type="text"
                  placeholder="Mother Name"
                />
              </div>
              <div className=" pb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <textarea
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="address"
                  placeholder="Address"
                  rows="3" // You can adjust the number of rows as needed
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date of Birth
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="dateOfBirth"
                  type="date"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mobile No.
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="mobileNo"
                  type="text"
                  placeholder="Mobile No."
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Class
                </label>
                <select
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="class"
                >
                  <option>Select Class</option>
                  {/* Add options here */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Section
                </label>
                <select
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="section"
                >
                  <option>Select Section</option>
                  {/* Add options here */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date of Admission
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="dateOfAdmission"
                  type="date"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Roll No.
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="rollNo"
                  type="text"
                  placeholder="Roll No."
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Parent
                </label>
                <select
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="parent"
                >
                  <option>Select Parent</option>
                  {/* Add options here */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gender
                </label>
                <div className="flex items-center">
                  <input
                    className="mr-2 leading-tight"
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="male"
                  >
                    Male
                  </label>
                  <input
                    className="ml-4 mr-2 leading-tight"
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="female"
                  >
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Religion
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="religion"
                  type="text"
                  placeholder="Religion"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Caste
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="caste"
                  type="text"
                  placeholder="Caste"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sub-Caste
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="subCaste"
                  type="text"
                  placeholder="Sub-Caste"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nationality
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="nationality"
                  type="text"
                  placeholder="Nationality"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Aadhar No.
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="aadharNo"
                  type="text"
                  placeholder="Aadhar No."
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Aadhar Document
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="aadharDocument"
                  type="file"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Is Disabled
                </label>
                <div className="flex items-center">
                  <input
                    className="mr-2 leading-tight"
                    type="radio"
                    id="disabledYes"
                    name="isDisabled"
                    value="Yes"
                    required
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="disabledYes"
                  >
                    Yes
                  </label>
                  <input
                    className="ml-4 mr-2 leading-tight"
                    type="radio"
                    id="disabledNo"
                    name="isDisabled"
                    value="No"
                    required
                  />
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="disabledNo"
                  >
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Blood Group
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="bloodGroup"
                  type="text"
                  placeholder="Blood Group"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Identification Mark
                </label>
                <input
                  className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
                  id="identificationMark"
                  type="text"
                  placeholder="Identification Mark (Moles)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:col-span-1">
            <img src={profileImag} alt="Profile" className="w-60 h-60 mb-2" />
            <button
              className="border-2 mt-4 w-1/2 hover:bg-gray-400 text-gray-800 text-xl  py-2 px-4 rounded focus:outline-none focus: -outline"
              type="button"
            >
              Browse
            </button>
          </div>
          <div className="col-span-1 md:col-span-3 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus: -outline"
              type="button"
            >
              Add Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewStudent;
