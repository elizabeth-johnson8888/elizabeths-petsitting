// Rules
function RulesSection() {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center">Rules</h3>
      <div className="hidden sm:block">
        <ul className="m-10 ml-15 sm:ml-25 sm:mr-25 list-disc">
          <li className="mb-2 regular-text">If I have to cancel the pet sitting for any reason, I will refund the $20 booking charge.</li>
          <li className="mb-2 regular-text">If you have to cancel the pet sitting for any reason, I will refund the $20 booking charge if I am told 7 days in advance, otherwise the $20 will not be refunded.</li>
          <li className="mb-2 regular-text">The pet sitting will not be confirmed without the initial booking charge. </li>
          <li className="mb-2 regular-text">I have the right to charge extra for any additional services not listed that I agree to and will show it in the receit.</li>
          <li className="mb-2 regular-text">I am not liable for any injuries caused by the animals, and the owner will pay the medical cost.</li>
        </ul>
      </div>

      <div className="sm:hidden h-120 max-w-xl overflow-y-scroll snap-none mt-4 scrollable-area m-5">
        <ul className="m-5 ml-8 mr-8 list-disc">
          <li className="mb-2 regular-text">If I have to cancel the pet sitting for any reason, I will refund the $20 booking charge.</li>
          <li className="mb-2 regular-text">If you have to cancel the pet sitting for any reason, I will refund the $20 booking charge if I am told 7 days in advance, otherwise the $20 will not be refunded.</li>
          <li className="mb-2 regular-text">The pet sitting will not be confirmed without the initial booking charge. </li>
          <li className="mb-2 regular-text">I have the right to charge extra for any additional services not listed that I agree to and will show it in the receit.</li>
          <li className="mb-2 regular-text">I am not liable for any injuries caused by the animals, and the owner will pay the medical cost.</li>
        </ul>
      </div>
    </div>
  );
}

export default RulesSection;