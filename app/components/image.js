export default function Image() {
  return (
    <>
      <section className="bg-gray-800 text-white px-4 py-10 mx-auto w-full max-w-screen-xl flex flex-col lg:flex-row">
        <div className="max-w-md pr-20 lg:pt-28">
          <img
            src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png"
            alt="CRM Illustration"
          />
        </div>
        <div>
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
            
          </div>
          <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
            Just getting started on your <span className="text-indigo-500">CRM</span> journey?
          </h2>
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
            <div>
              <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                Understand CRM Basics
              </p>
              <p className="text-lg text-gray-300">
                Learn what CRM is, how it works, and why it's essential for building long-term customer relationships.
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                Build Customer Trust
              </p>
              <p className="text-lg text-gray-300">
                Discover tools to help you track interactions, personalize communication, and improve customer satisfaction.
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                Streamline Sales
              </p>
              <p className="text-lg text-gray-300">
                Use CRM automation to manage leads, close deals faster, and never miss a follow-up opportunity.
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                Retain More Customers
              </p>
              <p className="text-lg text-gray-300">
                Track customer behavior and provide proactive support to build loyalty and reduce churn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
