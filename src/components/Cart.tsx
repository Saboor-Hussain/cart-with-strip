"use client";

export default function Cart() {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center"> Your Cart </h2>
      <ul>
        {/* Product 1 */}
        <li className="flex justify-between items-center mb-2">
          <div>
            <p className="font-semibold">Product 1</p>
            <p className="text-gray-400">$25.09 x 4</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => {}}
              className="px-2 py-1 text-white bg-red-600 hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              -
            </button>

            <button
              onClick={() => {}}
              className="px-2 py-1 text-white bg-blue-600 hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              +
            </button>
          </div>
        </li>

        {/* Product 2 */}
        <li className="flex justify-between items-center mb-2">
          <div>
            <p className="font-semibold">Product 2</p>
            <p className="text-gray-400">$56.60 x 3</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => {}}
              className="px-2 py-1 text-white bg-red-600 hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              -
            </button>

            <button
              onClick={() => {}}
              className="px-2 py-1 text-white bg-blue-600 hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              +
            </button>
          </div>
        </li>
      </ul>

      {/* Purchase Button */}
      <div className="mt-4">
        <p className="text-lg font-semibold">Total Amount: $234.123</p>
      </div>
      <button
        onClick={() => {}}
        className="mt-4 px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"      >
        Buy Now
      </button>
    </div>
  );
}
