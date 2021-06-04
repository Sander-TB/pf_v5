import emailjs from 'emailjs-com';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_template', e.target, 'user_elMRQKtplFEQlmxiOOhfa')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col mt-5">
      <div className="flex flex-col md:flex-row w-full md:w-95 lg:w-85">
        <input type="text" placeholder="Name" name="name" className="p-3 mr-5 mb-5 w-85 md:w-1/2 bg-lightgray" />
        <input type="text" placeholder="Email" name="email" className="p-3 mr-5 mb-5 w-85 md:w-1/2 bg-lightgray" />
      </div>
      <input type="text" placeholder="Subject" name="subject" className="p-3 mb-5 w-85 md:w-90 lg:w-82 bg-lightgray" />
      <textarea placeholder="Message" rows={10} name="message" className="w-85 md:w-90 lg:w-82 p-3 bg-lightgray" />
      <button className="border border-green text-green px-5 py-3 w-85 md:w-90 mt-5"> Send Email</button>
    </form>
  )
}
