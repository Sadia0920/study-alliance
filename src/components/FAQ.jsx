import React from 'react'

export default function FAQ() {
  return (
    <div className="w-10/12 mx-auto my-14">
    <h1 className="text-3xl font-bold text-center mb-9">Help & Support Center</h1>
    <h2 className='text-2xl font-medium mb-3'>For Volunteers</h2>
  <div className="collapse collapse-arrow bg-[rgb(168,224,92,0.2)] mb-3">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title text-xl font-medium">Can I volunteer remotely?</div>
    <div className="collapse-content">
    <p>Absolutely! We offer both in-person and virtual volunteering opportunities. Use the filters to find options that suit your preferences.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(168,224,92,0.2)] mb-3">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">What if I can't make it to a scheduled opportunity?</div>
    <div className="collapse-content">
    <p>Please contact the organization as soon as possible through the messaging feature on your dashboard to notify them.</p>
    </div>
  </div>
  <h2 className='text-2xl font-medium mb-3 mt-6'>For Organizations</h2>
  <div className="collapse collapse-arrow bg-[rgb(255,111,0,0.2)] mb-3">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium"> Can I get reports on volunteer performance?</div>
    <div className="collapse-content">
    <p>Yes! The platform provides analytics and reporting tools to track hours, participation rates, and more.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(255,111,0,0.2)]">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium"> Can I manage multiple events or campaigns?</div>
    <div className="collapse-content">
    <p>Yes, you can create and manage multiple opportunities simultaneously using the platform's event management tools.</p>
    </div>
  </div>
    </div>
  )
}