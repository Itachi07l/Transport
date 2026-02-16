import { useState } from "react";
import axios from "axios";

export default function TrackByEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bookings, setBookings] = useState([]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setBookings([]);

    try {
      const res = await axios.post(
        "http://localhost:8000/auth/track",
        { email },
        { withCredentials: true }
      );

      setBookings(res.data.bookings);
    } catch (err) {
      setError(err.response?.data?.message || "No data found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-3">
          Track Your Shipments
        </h2>
        <p className="text-gray-600 mb-10">
          View all shipments linked to your email.
        </p>

        {/* Form */}
        <form
          onSubmit={handleTrack}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-md border focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            {loading ? "Tracking..." : "Track"}
          </button>
        </form>

        {error && <p className="text-red-500">{error}</p>}

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((item) => (
            <ShipmentCard
              key={item._id}
              item={item}
              onView={() => setSelectedBooking(item)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedBooking && (
          <ShipmentModal
            data={selectedBooking}
            onClose={() => setSelectedBooking(null)}
          />
        )}

      </div>
    </section>
  );
}
const ShipmentCard = ({ item, onView }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md p-6 border 
      hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
        {item.containerStatus}
      </span>

      <h4 className="text-lg font-bold mb-3">
        {item.shippingFrom} → {item.shippingTo}
      </h4>

      <div className="text-sm text-gray-600 space-y-1">
        <p><strong>Container:</strong> {item.containerType}</p>
        <p><strong>Qty:</strong> {item.containerAmount}</p>
        <p><strong>Date:</strong> {new Date(item.shippingOn).toDateString()}</p>
      </div>

      <button
        onClick={onView}
        className="mt-6 w-full py-2 rounded-md bg-gray-900 text-white 
        hover:bg-black transition"
      >
        View Details
      </button>
    </div>
  );
};

const ShipmentModal = ({ data, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-8 max-w-2xl w-full animate-scaleIn"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Shipment Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <Detail label="Full Name" value={data.fullName} />
          <Detail label="Email" value={data.email} />
          <Detail label="Phone" value={data.phone} />
          <Detail label="Shipping From" value={data.shippingFrom} />
          <Detail label="Shipping To" value={data.shippingTo} />
          <Detail label="Container Type" value={data.containerType} />
          <Detail label="Amount" value={data.containerAmount} />
          <Detail label="Status" value={data.containerStatus} />
          <Detail label="Loading Help" value={data.loadingHelp} />
          <Detail label="Frequency" value={data.shippingFrequency} />
        </div>

        {data.loadDescription && (
          <div className="mt-6">
            <p className="font-semibold">Load Description</p>
            <p className="text-gray-600">{data.loadDescription}</p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-8 w-full py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);