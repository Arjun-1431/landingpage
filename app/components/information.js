export default function Information() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="mx-auto max-w-lg px-4 py-20 lg:max-w-screen-lg">
       
        <div className="mb-10">
          <div className="mb-8 text-3xl font-semibold leading-normal sm:text-4xl sm:leading-relaxed">
            Introducing
            <span className="rounded-xl bg-blue-600 px-3 py-0.5 text-white">
              Your CRM Dashboard
            </span>
          </div>
          <div className="max-w-xl text-gray-300">
            Streamline your sales, marketing, and support workflows with one unified platform — powerful insights, full customer visibility, and real-time team collaboration.
          </div>
        </div>

        
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
          <div className="flex-1">
            <div className="text-xl font-medium mb-3">
              Centralized Customer Data
            </div>
            <div className="text-gray-400">
              Access all customer interactions in one place — emails, calls, notes, and tasks — so your team is always aligned and informed.
            </div>
          </div>

          <div className="flex-1">
            <div className="text-xl font-medium mb-3">
              Sales Pipeline Automation
            </div>
            <div className="text-gray-400">
              Automate deal stages, follow-ups, and lead scoring to close more deals faster and never miss an opportunity.
            </div>
          </div>

          <div className="flex-1">
            <div className="text-xl font-medium mb-3">
              Real-Time Insights
            </div>
            <div className="text-gray-400">
              Track performance with live analytics — from revenue trends to individual rep KPIs — to make data-driven decisions.
            </div>
          </div>

          <div className="flex-1">
            <div className="text-xl font-medium mb-3">
              Team Collaboration
            </div>
            <div className="text-gray-400">
              Assign tasks, leave internal comments, and sync calendars — all from within the CRM — for smooth teamwork.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
