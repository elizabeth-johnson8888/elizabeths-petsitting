import emailjs from '@emailjs/browser';

// sends me a request email for the pet's owner to get my services
export function sendRequestEmail( templateParams ) {
    emailjs.send('service_jocqgz6', 'template_5y31myr', templateParams,{
        publicKey: '3QAqhQAL6l8kcJE-j',
      }).then(
      (response) => {
        console.log('Success!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
}

export function sendClientEmail( templateParams ) {
    emailjs.send('service_jocqgz6', 'template_2ozz52x', templateParams,{
        publicKey: '3QAqhQAL6l8kcJE-j',
      }).then(
      (response) => {
        console.log('Success!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
}