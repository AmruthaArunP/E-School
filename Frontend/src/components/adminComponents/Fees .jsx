import React, { useState, useContext, useEffect } from "react";
import { StudentFormContext } from "../../context/StudentFormContext";

function Fees({ onPrevious }) {
  const { formData, updateFormData } = useContext(StudentFormContext);
  const [data, setData] = useState(
    Array.isArray(formData.fees) && formData.fees.length > 0
      ? formData.fees
      : [{ feeType: "", amount: "" }]
  );

  useEffect(() => {
    setData(
      Array.isArray(formData.fees) && formData.fees.length > 0
        ? formData.fees
        : [{ feeType: "", amount: "" }]
    );
  }, [formData.fees]);

  const handleChange = (e, index) => {
    const { id, value } = e.target;
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], [id]: value };
    setData(updatedData);
  };

  const handleAddFee = () => {
    setData([...data, { feeType: "", amount: "" }]);
  };

  const handleRemoveFee = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleSubmit = () => {
    updateFormData("fees", data);
    alert("Data submitted successfully!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4">
      <div className="md:col-span-2">
        {data.map((fee, index) => (
          <div key={index} className="grid grid-cols-3 gap-6 mb-4">
            <div className="form-group col-span-1">
              <label className="all_label">Fee Type</label>
              <select
                className="form-control"
                id="feeType"
                value={fee.feeType || ""}
                onChange={(e) => handleChange(e, index)}
              >
                <option value="">Select Fee Type</option>
                <option value="Tuition">Tuition ($2000)</option>
                <option value="Transportation">Transportation ($500)</option>
                <option value="Special">Special ($200)</option>
                <option value="Uniform">Uniform ($100)</option>
              </select>
            </div>

            <div className="form-group col-span-1">
              <label className="all_label">Amount</label>
              <input
                className="form-control"
                id="amount"
                type="text"
                placeholder="Amount"
                value={fee.amount || ""}
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            {data.length > 1 && (
              <button
                className="text-red-500 text-sm mt-8 ml-4 focus:outline-none font-bold "
                type="button"
                onClick={() => handleRemoveFee(index)}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="md:col-span-1 flex items-center justify-center">
        <button
          className="bg-cyan-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddFee}
        >
          +
        </button>
      </div>

      <div className="col-span-3 flex justify-between mt-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          className="bg-cyan-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Fees;
