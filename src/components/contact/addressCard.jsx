import Reveal from "../animations/reveal";

function AddressCard() {
  return (
    <Reveal>
    <div className="bg-white rounded-lg shadow-2xl p-16">
      <h2 className="text-lg font-semibold text-sky-600 mb-4">Address</h2>
      <p className="mb-4">
        Near Empire Kammanahalli, Eduprajna #93, Nehru Rd, St Thomas Town, Kammanahalli, Bengaluru, Karnataka 560084, India
      </p>
      <div className="flex items-center mb-4">
        <a href="https://maps.google.com/?cid=11260815980147726854" className="text-sky-600 hover:underline mr-4">
          View on Google Maps
        </a>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 text-yellow-400 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-gray-700">4.5 stars on Google Maps</span>
      </div>
    </div>
    </Reveal>
  );
}

export default AddressCard;