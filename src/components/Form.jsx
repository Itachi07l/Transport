import { useState } from "react";
import axios from "axios";

export default function ShippingForm() {
  const today = new Date().toISOString().split("T")[0];

  const [data, setData] = useState({
    shippingFrom: "",
    shippingTo: "",
    shippingOn: today,
    containerType: "",
    containerAmount: "",
    loadingHelp: "",
    containerStatus: "",
    loadDescription: "",
    shippingFrequency: "",
    homeMovingEstimate: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save to localStorage
      localStorage.setItem("shippingBooking", JSON.stringify(data));

      // Send to backend
      const res = await axios.post(
        "http://localhost:8000/auth/booking",
        { data },
      );

      console.log("Booking Success:", res.data);
      alert("Booking submitted successfully!");
    } catch (error) {
      console.error("Booking Error:", error,data);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className=" py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-extrabold mb-8">
          Shipping Request Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Input
            label="Shipping From"
            name="shippingFrom"
            value={data.shippingFrom}
            onChange={handleChange}
          />

          <Input
            label="Shipping To"
            name="shippingTo"
            value={data.shippingTo}
            onChange={handleChange}
          />

          <Input
            label="Shipping On"
            type="date"
            name="shippingOn"
            value={data.shippingOn}
            onChange={handleChange}
          />

          <Select
            label="Type of Container"
            name="containerType"
            value={data.containerType}
            onChange={handleChange}
            options={[
              "20ft Container",
              "40ft Container",
              "High Cube",
              "Refrigerated",
              "Open Top",
            ]}
          />

          <Input
            label="Amount of Container(s)"
            type="number"
            name="containerAmount"
            value={data.containerAmount}
            onChange={handleChange}
          />

          <Select
            label="Shipping Frequency"
            name="shippingFrequency"
            value={data.shippingFrequency}
            onChange={handleChange}
            options={["One-time", "Weekly", "Monthly", "Quarterly"]}
          />

          <RadioGroup
            label="Do you need help loading?"
            name="loadingHelp"
            value={data.loadingHelp}
            onChange={handleChange}
            options={["Yes", "No"]}
          />

          <Select
            label="Container(s) Status"
            name="containerStatus"
            value={data.containerStatus}
            onChange={handleChange}
            options={["Empty", "Loaded", "Partial Load", "Mixed"]}
          />

          <div className="md:col-span-2">
            <Textarea
              label="Load Description"
              name="loadDescription"
              value={data.loadDescription}
              onChange={handleChange}
            />
          </div>

          <RadioGroup
            label="Would you like a home moving estimate?"
            name="homeMovingEstimate"
            value={data.homeMovingEstimate}
            onChange={handleChange}
            options={["Yes", "No"]}
          />

          <Input
            label="Full Name"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all hover:-translate-y-0.5 shadow-md"
            >
              Submit Booking →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <select
        {...props}
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <textarea
        {...props}
        rows="4"
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function RadioGroup({ label, options, value, name, onChange }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">{label}</p>
      <div className="flex gap-6">
        {options.map((opt) => (
          <label key={opt} className="flex gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              className="accent-blue-900"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
