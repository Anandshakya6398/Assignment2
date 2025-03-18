import React from 'react'

const Pricing = () => {
  return (
    <div className='bg-gradient-to-r from-red-100 to-sky-100'>
      <section className="py-12  text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-xl border border-gray-300">
              <h3 className="text-xl font-bold">{plan}</h3>
              <p className="text-2xl font-extrabold text-blue-600 my-4">${index * 10 + 20}/mo</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing;
