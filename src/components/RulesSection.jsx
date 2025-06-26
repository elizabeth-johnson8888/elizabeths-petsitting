// Rules
function RulesSection() {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center">Service Terms</h3>
      <div className="hidden sm:block">
        <ul className="m-10 ml-15 sm:ml-25 sm:mr-25 list-disc">
          <li className="mb-2 regular-text">If I need to cancel your pet sitting for any reason, I will refund the $20 booking charge.</li>
          <li className="mb-2 regular-text">If you need to cancel, please let me know at least seven days in advance to receive a full refund of the $20 booking charge. Cancellations made less than seven days before the service will not be refunded.</li>
          <li className="mb-2 regular-text">Your pet sitting is only confirmed once the initial booking charge has been received.</li>
          <li className="mb-2 regular-text">Additional services not listed on the site may incur extra charges, which will always be communicated and included in your receipt.</li>
          <li className="mb-2 regular-text">While I take great care with your pets, I am not responsible for any injuries caused by animals. In such cases, the owner is responsible for any medical costs.</li>
        </ul>
      </div>

      <div className="sm:hidden h-120 max-w-xl overflow-y-scroll snap-none mt-4 scrollable-area m-5">
        <ul className="m-5 ml-8 mr-8 list-disc">
          <li className="mb-2 regular-text">If I need to cancel your pet sitting for any reason, I will refund the $20 booking charge.</li>
          <li className="mb-2 regular-text">If you need to cancel, please let me know at least seven days in advance to receive a full refund of the $20 booking charge. Cancellations made less than seven days before the service will not be refunded.</li>
          <li className="mb-2 regular-text">Your pet sitting is only confirmed once the initial booking charge has been received.</li>
          <li className="mb-2 regular-text">Additional services not listed on the site may incur extra charges, which will always be communicated and included in your receipt.</li>
          <li className="mb-2 regular-text">While I take great care with your pets, I am not responsible for any injuries caused by animals. In such cases, the owner is responsible for any medical costs.</li>
        </ul>
      </div>
    </div>
  );
}

export default RulesSection;