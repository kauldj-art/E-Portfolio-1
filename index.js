// template_krwzw4r
// service_q1gds29
// lg6wF3BoLS9tWWvuH

function contact(event) {
    event.preventDefault();
    emailjs
    .sendform(
        'service_q1gds29',
        'template_krwzw4r',
        event.target,
        'lg6wF3BoLS9tWWvuH'
    )
    .then(() => {
        console.log('Email sent successfully!');
    });
}