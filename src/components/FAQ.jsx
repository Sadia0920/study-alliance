export default function FAQ() {
    return (
        <div className="w-10/12 mx-auto my-14">

  <div className="collapse collapse-arrow  bg-[rgb(222,238,251)] mb-3">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title text-xl font-medium text-black">How do I enroll in a course?</div>
    <div className="collapse-content text-gray-800">
    <p>To enroll in a course, simply browse our Courses section, select a course that interests you, and click the "Enroll Now" button. If the course is paid, you’ll need to complete the payment process before gaining access.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(222,238,251)] mb-3">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium text-black">Can I access courses on my mobile device?</div>
    <div className="collapse-content text-gray-800">
    <p>Yes! Our platform is fully mobile-friendly, allowing you to learn anytime, anywhere. You can access courses through your web browser on any device.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(222,238,251)] mb-3">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium text-black">What payment methods do you accept?</div>
    <div className="collapse-content text-gray-800">
    <p>We accept major credit/debit cards, PayPal, Stripe, and UPI. If you face any issues with payment, feel free to contact our support team.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-[rgb(222,238,251)]">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium text-black"> How do I become an instructor?</div>
    <div className="collapse-content text-gray-800">
    <p>To become an instructor, go to the "Teach with Us" section, fill out the instructor application form, and submit it for review. Our admin team will verify your details and approve your request within 24-48 hours.</p>
    </div>
  </div>
    </div>
    )
}